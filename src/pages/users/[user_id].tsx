import { Roles_Enum } from '../../graphql/generated'
import { Layout } from '../../components/Layout/Layout'
import { useRouter } from 'next/router'
import { RoleList } from '../../model/site/RoleList'
import { DeepMap, FieldError, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserValidationSchema } from '../../model/schemas/UserValidationSchema'
import { FormInput } from '../../components/forms/FormInput/FormInput'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { getInitialNameAvatar } from '../../utils/getInitialNameAvatar'
import { LinksList } from '../../model/site/LinksList'
import {
  Insert_users_one_api_post,
  insert_users_one_api_post_Config,
} from '../../model/api-models/users/Insert_users_one_api_post'
import typedFetch from '../../utils/typedFetch/typedFetch'
import {
  Delete_users_by_pk_api_delete,
  delete_users_by_pk_api_delete_Config,
} from '../../model/api-models/users/Delete_users_by_pk_api_delete'
import { useQuery } from 'react-query'
import {
  Users_by_pk_api_get,
  users_by_pk_api_get_Config,
} from '../../model/api-models/users/Users_by_pk_api_get'
import { useUser } from '@auth0/nextjs-auth0'

type FormProps = Insert_users_one_api_post['input']

export default function Page() {
  const router = useRouter()
  // react-query
  const queryObj = useQuery(
    'users_by_pk_api_get',
    async () => {
      const resultObj = await typedFetch<
        Users_by_pk_api_get['input'],
        Users_by_pk_api_get['output']
      >({
        ...users_by_pk_api_get_Config,
        data: {
          id: router.query.user_id as string,
        },
      })
      return resultObj.data
    },
    // # enabled
    //   Set this to false to disable automatic refetching when the query mounts
    //   or changes query keys. To refetch the query, use the refetch method returned
    //   from the useQuery instance. Defaults to true.
    //
    // dependent query
    // https://github.com/tannerlinsley/react-query-essentials/blob/master/18%20-%20dependent%20queries/app/src/App.js
    {
      enabled: (router?.query?.user_id as string)?.length > 0,
    }
  )

  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
    reset,
  } = useForm<FormProps>({
    mode: 'onChange',
    resolver: zodResolver(UserValidationSchema),
  })

  const { user: currentUser, error, isLoading } = useUser()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  const isAdmin = currentUser?.role === Roles_Enum.Admin

  const onUpdateUser = async (submitProps: FormProps) => {
    const result = await typedFetch<
      Insert_users_one_api_post['input'],
      Insert_users_one_api_post['output']
    >({
      ...insert_users_one_api_post_Config,
      data: {
        ...submitProps,
        id: router.query.user_id as string,
      },
    })

    if (!result.error) {
      const myAlert = withReactContent(Swal)
      await myAlert.fire({
        title: 'updated user',
        confirmButtonText: 'close',
      })
      await router.push('/users')
    } else {
      const myAlert = withReactContent(Swal)
      await myAlert.fire({
        title: 'error',
        html: <p>{JSON.stringify(result.error)}</p>,
        confirmButtonText: 'close',
      })
    }
  }
  const onError = (error: DeepMap<FormProps, FieldError>) => {
    console.log('--  submitErrors: ', error)
  }

  const onDeleteUser = async () => {
    const SwalReactAlert = withReactContent(Swal)
    const swalConfirmDelete = await SwalReactAlert.fire({
      html: (
        <p>
          Do you want to delete the user: <strong>{queryObj?.data?.users_by_pk?.name}</strong>
        </p>
      ),
      showCloseButton: true,
      showDenyButton: true,
      denyButtonText: 'No',
      confirmButtonText: 'Yes',
      icon: 'question',
    })

    if (swalConfirmDelete.isConfirmed && queryObj?.data?.users_by_pk?.id) {
      const result = await typedFetch<
        Delete_users_by_pk_api_delete['input'],
        Delete_users_by_pk_api_delete['output']
      >({
        ...delete_users_by_pk_api_delete_Config,
        data: {
          id: queryObj?.data?.users_by_pk?.id?.toString(),
        },
      })

      if (!result.error) {
        const myAlert = withReactContent(Swal)
        await myAlert.fire({
          title: 'deleted user',
          confirmButtonText: 'close',
        })
        await router.push('/users')
      } else {
        const myAlert = withReactContent(Swal)
        await myAlert.fire({
          title: 'error',
          html: <p>{JSON.stringify(result.error)}</p>,
          confirmButtonText: 'close',
        })
      }
    }
  }

  return (
    <Layout
      title={
        <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
          <div className='text-base font-bold'>Edit user</div>
          <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
        </div>
      }
      menuItems={Object.values(LinksList)}
    >
      {!queryObj.isSuccess ? (
        <button className='btn btn-sm btn-ghost loading'>loading</button>
      ) : (
        <main className='flex justify-center mx-8'>
          <form onSubmit={handleSubmit(onUpdateUser, onError)} className='max-w-4xl md:w-full'>
            <div className='hidden sm:block' aria-hidden='true'>
              <div className='py-5'>
                <div className='border-t ' />
              </div>
            </div>

            <div>
              <div className='md:grid md:grid-cols-3 md:gap-6'>
                <div className='md:col-span-1'>
                  <div className='px-4 sm:px-0'>
                    <h3 className='text-lg font-medium leading-6 text-left'>Users</h3>
                    <div className='w-40 h-40 m-auto mt-8 mb-4 rounded-btn ring ring-primary ring-offset-base-100 ring-offset-2'>
                      <img
                        className='w-full h-full'
                        src={
                          queryObj?.data?.users_by_pk?.image ||
                          getInitialNameAvatar(queryObj?.data?.users_by_pk?.name)
                        }
                      />
                    </div>
                    {isAdmin && (
                      <button
                        type='button'
                        onClick={() => onDeleteUser()}
                        className='w-full mt-4 btn btn-error'
                      >
                        Delete user
                      </button>
                    )}
                  </div>
                </div>
                <div className='mt-5 md:mt-0 md:col-span-2'>
                  <div className='shadow sm:rounded-md sm:overflow-hidden'>
                    <div className='px-4 py-5 space-y-6 sm:p-6'>
                      <FormInput
                        label='Nome:'
                        name='name'
                        register={register}
                        disabled={!isAdmin}
                        defaultValue={queryObj?.data?.users_by_pk?.name}
                        validationErrors={validationErrors}
                      />

                      <FormInput
                        label='email:'
                        name='email'
                        type='email'
                        disabled={!isAdmin}
                        register={register}
                        defaultValue={queryObj?.data?.users_by_pk?.email}
                        validationErrors={validationErrors}
                      />

                      {/* TODO: change to select component */}
                      <select
                        {...register('role')}
                        name='role'
                        defaultValue={queryObj?.data?.users_by_pk?.role as string}
                        disabled={!isAdmin}
                        className='w-full mt-10 select select-bordered'
                      >
                        {Object.entries(RoleList).map(([key, value]) => (
                          <option disabled={!isAdmin} key={key} value={key}>
                            {value.name}
                          </option>
                        ))}
                      </select>

                      <div className='flex justify-end'>
                        <button
                          type='button'
                          onClick={() => {
                            reset(queryObj?.data?.users_by_pk as FormProps)
                          }}
                          className='btn btn-secondary btn-link'
                        >
                          RESET
                        </button>

                        <button type='submit' className='btn btn-primary' disabled={!isAdmin}>
                          SAVE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden sm:block' aria-hidden='true'>
              <div className='py-5'>
                <div className='border-t ' />
              </div>
            </div>
          </form>
        </main>
      )}
    </Layout>
  )
}
