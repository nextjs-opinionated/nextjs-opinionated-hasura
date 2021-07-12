import * as React from 'react'
import { useRouter } from 'next/router'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import Head from 'next/head'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'
import Loading from '../../components/Loading/Loading'
import { useQuery } from 'react-query'
import {
  Users_by_pk_api_get,
  users_by_pk_api_get_Config,
} from '../../model/api-models/users/Users_by_pk_api_get'
import typedFetch from '../../utils/typedFetch/typedFetch'
import {
  Insert_users_one_api_post,
  insert_users_one_api_post_Config,
} from '../../model/api-models/users/Insert_users_one_api_post'
import { Users_Form } from '../../components/Users_Form/Users_Form'
import {
  Delete_users_by_pk_api_delete,
  delete_users_by_pk_api_delete_Config,
} from '../../model/api-models/users/Delete_users_by_pk_api_delete'
import { Roles_Enum } from '../../graphql/generated'

const Page: React.FunctionComponent = () => {
  const router = useRouter()

  // react-query
  const { data, isLoading, isSuccess, error } = useQuery(
    users_by_pk_api_get_Config.url, // queryKey
    async () => {
      const resultObj = await typedFetch<
        Users_by_pk_api_get['input'],
        Users_by_pk_api_get['output']
      >({
        ...users_by_pk_api_get_Config, // url, method, responseType
        inputData: {
          id: router.query?.user_id as string,
        },
      })
      return resultObj
    },
    // # enabled
    //   Set this to false to disable automatic refetching when the query mounts
    //   or changes query keys. To refetch the query, use the refetch method returned
    //   from the useQuery instance. Defaults to true.
    //
    // dependent query
    // https://github.com/tannerlinsley/react-query-essentials/blob/master/18%20-%20dependent%20queries/app/src/App.js
    {
      enabled: (router.query?.user_id as string)?.length > 0,
    }
  )

  if (isLoading) {
    return (
      <>
        <Head>
          <title>EDIT LIST ITEM : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
        </Head>

        <Layout
          title={
            <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
              <div className='text-base font-bold'>EDIT LIST ITEM</div>
              <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
            </div>
          }
          menuItems={Object.values(LinksList)}
        >
          <div className='flex items-center justify-center'>
            <Loading title='Loading...' className='w-10 h-10' />
          </div>
        </Layout>
      </>
    )
  }

  if (error) {
    return <p>ERROR {error}</p>
  }

  return (
    <>
      <Head>
        <title>EDIT LIST ITEM : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>EDIT LIST ITEM</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='flex justify-center mx-8'>
          {isSuccess && (
            <Users_Form
              initialFormData={{
                id: router.query?.user_id as string,
                name: data?.outputData?.users_by_pk?.name || '',
                email: data?.outputData?.users_by_pk?.email || '',
                role: data?.outputData?.users_by_pk?.role || Roles_Enum.User,
                image: data?.outputData?.users_by_pk?.image,
              }}
              onSubmitConfirm={async (submitProps) => {
                const headers = new Headers()
                headers.append('Content-Type', 'application/json')

                const typedFetchResult = await typedFetch<
                  Insert_users_one_api_post['input'],
                  Insert_users_one_api_post['output']
                >({
                  ...insert_users_one_api_post_Config,
                  inputData: {
                    id: router?.query?.user_id as string,
                    name: submitProps.name,
                    email: submitProps.email,
                    role: submitProps.role,
                    image: submitProps.image,
                  },
                })

                const myAlert = withReactContent(Swal)
                if (typedFetchResult.error) {
                  await myAlert.fire({
                    title: 'error',
                    html: typedFetchResult.statusText,
                    confirmButtonText: 'close',
                  })
                  return
                }
                router.back()
              }}
              //
              // delete item
              onDelete={async () => {
                const result = await typedFetch<
                  Delete_users_by_pk_api_delete['input'],
                  Delete_users_by_pk_api_delete['output']
                >({
                  ...delete_users_by_pk_api_delete_Config,
                  inputData: { id: String(data?.outputData?.users_by_pk?.id) },
                })

                // show alert
                const myAlert = withReactContent(Swal)
                if (!result.error) {
                  await myAlert.fire({
                    title: 'Deletion was successful!',
                    confirmButtonText: 'close',
                  })
                  router.back()
                } else {
                  await myAlert.fire({
                    title: 'error',
                    html: <p>{JSON.stringify(result.error)}</p>,
                    confirmButtonText: 'close',
                  })
                }
              }}
            />
          )}
        </main>
      </Layout>
    </>
  )
}

export default Page
