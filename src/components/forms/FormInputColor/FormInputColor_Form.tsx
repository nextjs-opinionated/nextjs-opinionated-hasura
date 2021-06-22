import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { FormInputColor, FormInputColorProps } from './FormInputColor'
import * as z from 'zod'
import { CodeBlock } from '../../CodeBlock/CodeBlock'
import isHexColor from 'validator/lib/isHexColor'
import { useTheme } from 'next-themes'
import { ThemeList } from '../../../model/site/ThemeList'

export const FormInputColor_Form: React.FC<FormInputColorProps> = (formProps) => {
  const { theme, setTheme } = useTheme()
  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
    watch,
    setValue,
  } = useForm<FormInputColorProps>({
    mode: 'onChange',
    resolver: zodResolver(
      z.object({
        color_input: z
          .string()
          .min(7)
          .refine((value) => isHexColor(value), {
            message: 'invalid color',
          }),
      })
    ),
  })

  const onSubmit = handleSubmit(
    async (submitProps) => {
      // const resultJSON = await fetchResponse.json()
      const myAlert = withReactContent(Swal)
      await myAlert.fire({
        title: 'submited',
        html: <CodeBlock content={submitProps} />,
        confirmButtonText: 'close',
      })
    },
    (submitErrors) => {
      console.error('--  submitErrors: ', submitErrors)
    }
  )

  return (
    <>
      <div className='flex justify-end'>
        <select
          className='mb-4 select select-bordered'
          onChange={(ev) => {
            setTheme(ev.target.value)
          }}
          value={theme}
        >
          <option disabled>theme</option>
          {Object.values(ThemeList).map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
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
                <h3 className='text-lg font-medium leading-6 text-primary'>Form Example</h3>
                <h3 className='my-2 text-sm font-medium leading-4 text-secondary'>color_input</h3>
              </div>
            </div>
            <div className='mt-5 md:mt-0 md:col-span-2'>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 space-y-6 sm:p-6'>
                  <FormInputColor
                    {...formProps}
                    register={register}
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
    </>
  )
}
