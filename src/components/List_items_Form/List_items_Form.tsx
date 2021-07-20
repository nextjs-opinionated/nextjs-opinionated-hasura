/* eslint-disable no-console */
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormInput } from '../forms/FormInput/FormInput'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import { List_items_validation_schema } from '../../model/schemas/List_items_validation_schema'
import { FormImage } from '../forms/FormImage/FormImage'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Insert_list_items_one_api_post } from '../../model/api-models/list_items/Insert_list_items_one_api_post'

export type List_items_FormProps = {
  onDelete: () => void
  deleteConfirmationMessage?: string
  deleteConfirmationYesLabel?: string
  deleteConfirmationNoLabel?: string
  onSubmitConfirm: (submitProps: Insert_list_items_one_api_post['input']) => void
  initialFormData: Insert_list_items_one_api_post['input']
}

export const List_items_Form: React.FunctionComponent<List_items_FormProps> = ({
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
  } = useForm<List_items_FormProps['initialFormData']>({
    mode: 'onChange',
    resolver: zodResolver(List_items_validation_schema),
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
                  className='mb-4'
                  label='Title:'
                  name='title'
                  register={register}
                  defaultValue={initialFormData.title}
                  validationErrors={validationErrors}
                />

                <FormInput
                  className='mb-4'
                  label='Body:'
                  name='body'
                  register={register}
                  defaultValue={initialFormData.body}
                  validationErrors={validationErrors}
                />

                <FormInput
                  className='mb-4'
                  label='URL:'
                  name='url'
                  register={register}
                  defaultValue={initialFormData.url}
                  validationErrors={validationErrors}
                />

                <FormImage
                  className='mb-4'
                  label='Image URL:'
                  name='imageUrl'
                  register={register}
                  watch={watch}
                  defaultValue={initialFormData.imageUrl}
                  validationErrors={validationErrors}
                />

                <FormInput
                  className='mb-4'
                  label='Publish Date:'
                  type='date'
                  name='publishedAt_date'
                  register={register}
                  defaultValue={dayjs(initialFormData.publishedAt || '').format('YYYY-MM-DD')}
                  validationErrors={validationErrors}
                />

                <FormInput
                  className='mb-4'
                  label='Publish Time:'
                  type='time'
                  name='publishedAt_time'
                  register={register}
                  defaultValue={dayjs(initialFormData.publishedAt || '').format('HH:mm')}
                  validationErrors={validationErrors}
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
