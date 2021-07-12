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
import { FormImage } from '../forms/FormImage/FormImage'
import { FormSelect } from '../forms/FormSelect/FormSelect'
import _ from 'lodash'

export type Users_FormProps = {
  onDelete: () => void
  deleteConfirmationMessage?: string
  deleteConfirmationYesLabel?: string
  deleteConfirmationNoLabel?: string
  onSubmitConfirm: (submitProps: Insert_users_one_api_post['input']) => void
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
    watch,
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

                <FormImage
                  label='image:'
                  name='image'
                  watch={watch}
                  register={register}
                  height={96}
                  defaultValue={initialFormData?.image}
                  validationErrors={validationErrors}
                />

                <FormSelect
                  label='Role'
                  placeholder='Select a role'
                  name='role'
                  register={register}
                  validationErrors={''}
                  className=''
                  options={_.map(RoleList, (item) => ({
                    label: item.name,
                    value: item.id,
                  }))}
                />

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
