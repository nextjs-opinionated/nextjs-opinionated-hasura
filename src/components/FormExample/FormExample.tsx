/* eslint-disable no-console */
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormExampleValidationSchema } from '../../model/schemas/FormExampleValidationSchema'
import { FormInput } from '../forms/FormInput/FormInput'
import { FormSelect } from '../forms/FormSelect/FormSelect'
import { FormToggle } from '../forms/FormToggle/FormToggle'
import { useMemo, useEffect } from 'react'
import { FormImage } from '../forms/FormImage/FormImage'
import { FormInputColor } from '../forms/FormInputColor/FormInputColor'
import {
  Fetch_formExample_api_post,
  fetch_formExample_api_post_Config,
} from '../../model/api-models/form-example/Fetch_formExample_api_post'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import typedFetch from '../../utils/typedFetch/typedFetch'
import { ValidationError } from '../ValidationError/ValidationError'
import { CodeBlock } from '../CodeBlock/CodeBlock'

export type FormExampleProps = {
  onSubmitConfirm: (submitProps: any) => void
  initialFormData: {
    email: string
    color_select: string
    toggle: boolean
    image?: File
    image_url: string
    color_input: string
  }
}

export const FormExample: React.FunctionComponent<FormExampleProps> = ({
  onSubmitConfirm,
  initialFormData = {},
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
    getValues,
    watch,
    setValue,
  } = useForm<FormExampleProps['initialFormData']>({
    mode: 'onChange',
    resolver: zodResolver(FormExampleValidationSchema),
    defaultValues: useMemo(() => {
      return initialFormData
    }, [initialFormData]),
  })

  useEffect(() => {
    if (initialFormData?.image_url) {
      setValue('image_url', initialFormData.image_url)
    }
  }, [initialFormData.image_url, setValue])

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
          <div className='border-t' />
        </div>
      </div>
      <div>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6'>Form Fields</h3>
              <h3 className='my-2 text-sm font-medium leading-4'>
                same validation is applied on client and on server with zod
              </h3>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <div className='shadow sm:rounded-md sm:overflow-hidden'>
              <div className='px-4 py-5 space-y-6 sm:p-6'>
                <FormInput
                  label='Email:'
                  name='email'
                  register={register}
                  defaultValue={initialFormData.email}
                  validationErrors={validationErrors}
                />

                <FormToggle
                  label='Toggle:'
                  name='toggle'
                  defaultValue={initialFormData.toggle}
                  register={register}
                  validationErrors={validationErrors}
                />

                <FormSelect
                  label='Colors:'
                  placeholder='Please, select a color...'
                  name='color_select'
                  register={register}
                  defaultValue={initialFormData.color_select}
                  validationErrors={validationErrors}
                  options={[
                    { value: 'white', label: 'White' },
                    { value: 'red', label: 'Red' },
                    { value: 'green', label: 'Green' },
                    { value: 'yellow', label: 'Yellow' },
                  ]}
                />

                <FormImage
                  register={register}
                  label='Image:'
                  placeholder='Select an Image'
                  name='image'
                  width={120}
                  height={120}
                  defaultValue={initialFormData.image_url}
                  validationErrors={validationErrors}
                />

                <FormInputColor
                  label='select a color:'
                  name='color_input'
                  register={register}
                  defaultValue=''
                  watch={watch}
                  setValue={setValue}
                  validationErrors={validationErrors}
                />

                <div className='flex flex-col'>
                  <div className='flex justify-end'>
                    <button type='reset' className='mx-3 btn btn-secondary'>
                      RESET
                    </button>

                    <button type='submit' className='mx-3 btn btn-primary'>
                      SEND
                    </button>
                  </div>

                  <div className='flex justify-end'>
                    <button
                      type='button'
                      className='m-3 btn btn-ghost btn-link'
                      onClick={async () => {
                        const Fetch_formExample_apiResult = await typedFetch<
                          Fetch_formExample_api_post['input'],
                          Fetch_formExample_api_post['output']
                        >({
                          ...fetch_formExample_api_post_Config,
                          inputData: {
                            email: getValues('email'),
                            color_select: getValues('color_select'),
                            toggle: getValues('toggle'),
                            image: getValues('image'),
                            image_url: getValues('image_url'),
                            color_input: getValues('color_input'),
                          },
                        })
                        if (
                          Fetch_formExample_apiResult.status === 400 &&
                          Fetch_formExample_apiResult.error
                        ) {
                          const myAlert = withReactContent(Swal)
                          await myAlert.fire({
                            html: (
                              <ValidationError
                                content={Fetch_formExample_apiResult.error.validationError}
                              />
                            ),
                            customClass: {
                              title: 'text-base-content',
                            },
                            title: 'Server Validation Errors',
                            showConfirmButton: false,
                            showCancelButton: false,
                            background: 'hsla(var(--b2))',
                            icon: 'error',
                          })
                        } else if (
                          Fetch_formExample_apiResult.error === null &&
                          Fetch_formExample_apiResult.status === 200
                        ) {
                          const myAlert = withReactContent(Swal)
                          await myAlert.fire({
                            title: 'submited',
                            html: <CodeBlock content={Fetch_formExample_apiResult.outputData} />,
                            confirmButtonText: 'close',
                            customClass: {
                              confirmButton: 'btn btn-primary btn-md',
                              actions: 'bg-base-200 sweetalert-action',
                              title: 'bg-base-200 text-base-content',
                              htmlContainer: 'bg-base-200',
                            },
                            buttonsStyling: false,
                            showConfirmButton: true,
                            background: 'transparent',
                            width: 'auto',
                          })
                        }
                      }}
                    >
                      Validate on server only
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t' />
        </div>
      </div>
    </form>
  )
}
