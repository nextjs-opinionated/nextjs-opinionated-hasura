import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { FormInputColor } from './FormInputColor'
import * as z from 'zod'

export type FormInputColor_FormProps = {
  initialFormData?: {
    color_input: string
  }
}

export const FormInputColor_Form: React.FunctionComponent<FormInputColor_FormProps> = ({
  initialFormData = {},
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
    watch,
    setValue,
  } = useForm<FormInputColor_FormProps['initialFormData']>({
    mode: 'onChange',
    resolver: zodResolver(
      z.object({
        color_input: z.string().nonempty().min(7),
      })
    ),
    defaultValues: React.useMemo(() => {
      return initialFormData
    }, [initialFormData]),
  })

  const onSubmit = handleSubmit(
    async (submitProps) => {
      // const resultJSON = await fetchResponse.json()
      const myAlert = withReactContent(Swal)
      await myAlert.fire({
        title: 'submited',
        html: (
          <div className='mockup-code'>
            {JSON.stringify(submitProps, null, 2)
              .split('\n')
              .map((line, i) => (
                <pre key={`line_${i}`} className='text-left'>
                  <code>{line}</code>
                </pre>
              ))}
          </div>
        ),
        confirmButtonText: 'close',
      })
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
              <h3 className='text-lg font-medium leading-6'>Form Example</h3>
              <h3 className='my-2 text-sm font-medium leading-4'>color_input</h3>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <div className='shadow sm:rounded-md sm:overflow-hidden'>
              <div className='px-4 py-5 space-y-6 sm:p-6'>
                <FormInputColor
                  label='select a color:'
                  placeholder='#000000'
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
  )
}
