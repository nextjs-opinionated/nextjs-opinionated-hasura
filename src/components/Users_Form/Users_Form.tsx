import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormInput } from '../forms/FormInput/FormInput'
import { useMemo } from 'react'
import { Users_validation_schema } from '../../model/schemas/Users_validation_schema'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Insert_users_one_api_post } from '../../model/api-models/users/Insert_users_one_api_post'
import { RoleList } from '../../model/site/RoleList'

export type Users_FormProps = {
  onDelete: () => void
  deleteConfirmationMessage?: string
  deleteConfirmationYesLabel?: string
  deleteConfirmationNoLabel?: string
  onSubmitConfirm: (submitProps: any) => void
  initialFormData: Insert_users_one_api_post['input']
}

export const Users_Form: React.FunctionComponent<Users_FormProps> = ({
  onSubmitConfirm,
  onDelete,
  deleteConfirmationMessage = 'Do you really want to delete?',
  deleteConfirmationYesLabel = 'Yes',
  deleteConfirmationNoLabel = 'No',
  initialFormData = {},
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
    formState,
    reset,
  } = useForm<Users_FormProps['initialFormData']>({
    mode: 'onChange',
    resolver: zodResolver(Users_validation_schema),
    defaultValues: useMemo(() => {
      return initialFormData
    }, [initialFormData]),
  })

  const onSubmit = handleSubmit(
    async (submitProps) => {
      return onSubmitConfirm(submitProps)
    },
    (submitErrors) => {
      console.error('--  submitErrors: ', submitErrors)
    }
  )

  return (
    <form onSubmit={onSubmit} className='max-w-4xl md:w-full'>
      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t ' />
        </div>
      </div>

      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6'>List Item</h3>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <div className='shadow sm:rounded-md sm:overflow-hidden'>
              <div className='px-4 py-5 sm:p-6'>
                <FormInput
                  label='Nome:'
                  name='name'
                  register={register}
                  defaultValue={initialFormData?.name}
                  validationErrors={validationErrors}
                />

                <FormInput
                  label='email:'
                  name='email'
                  type='email'
                  register={register}
                  defaultValue={initialFormData?.email}
                  validationErrors={validationErrors}
                />

                {/* TODO: change to select component */}
                <select
                  {...register('role')}
                  name='role'
                  defaultValue={initialFormData?.role as string}
                  className='w-full mt-10 select select-bordered'
                >
                  {Object.entries(RoleList).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value.name}
                    </option>
                  ))}
                </select>

                <div className='flex justify-end'>
                  <button
                    type='button'
                    onClick={() => {
                      reset(initialFormData)
                    }}
                    className='btn btn-secondary btn-link'
                  >
                    RESET
                  </button>

                  <button type='submit' className='btn btn-primary' disabled={!formState.isValid}>
                    SAVE
                  </button>
                </div>

                {initialFormData && (
                  <div className='flex justify-end mt-2'>
                    <button
                      type='button'
                      onClick={async () => {
                        const SwalReactAlert = withReactContent(Swal)
                        const swalConfirmDelete = await SwalReactAlert.fire({
                          html: <p>{deleteConfirmationMessage}</p>,
                          showCloseButton: true,
                          showDenyButton: true,
                          denyButtonText: deleteConfirmationNoLabel,
                          confirmButtonText: deleteConfirmationYesLabel,
                          icon: 'question',
                        })
                        if (swalConfirmDelete.isConfirmed) {
                          await onDelete()
                        }
                      }}
                      className='mx-2 link text-error'
                    >
                      Delete
                    </button>
                  </div>
                )}
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
  )
}
