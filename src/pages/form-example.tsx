import Head from 'next/head'
import * as React from 'react'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { FormExampleValidationSchema } from '../model/FormExampleValidationSchema'
import { FormInput } from '../components/forms/FormInput/FormInput'
import { checkFetchJsonResult } from '../utils/checkFetchResult'
import { FormToggle } from '../components/forms/FormToggle/FormToggle'
import { FormSelect } from '../components/forms/FormSelect/FormSelect'
import { useRouter } from 'next/router'

type FormProps = {
  email: string
  color_select: string
  toggle: boolean
}

const Page: React.FunctionComponent = () => {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
    getValues,
    // reset,
  } = useForm<FormProps>({
    mode: 'onChange',
    resolver: zodResolver(FormExampleValidationSchema),
  })

  const onSubmit = handleSubmit(
    async (submitProps) => {
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const fetchResponse = await fetch('/api/formExample_api', {
        method: 'POST',
        headers,
        body: JSON.stringify(submitProps),
      })

      /* check for server errors (VALIDATIONS) */
      const isValid = await checkFetchJsonResult(fetchResponse)
      if (isValid) {
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
      }
    },
    (submitErrors) => {
      console.error('--  submitErrors: ', submitErrors)
    }
  )

  return (
    <>
      <Head>
        <title>Form Example : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>Form Example</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='flex flex-col items-center mx-8'>
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={() => {
                router.replace('/form-example/')
              }}
              className='mx-3 btn btn-secondary'
            >
              empty form
            </button>
            <button
              type='button'
              onClick={() => {
                router.replace(
                  '/form-example/?email=some_email@gmail.com&color_select=red&toggle=true'
                )
              }}
              className='mx-3 btn btn-secondary'
            >
              initial values form
            </button>
          </div>
          <form onSubmit={onSubmit} className='max-w-4xl md:w-full'>
            <div className='hidden sm:block' aria-hidden='true'>
              <div className='py-5'></div>
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
                        defaultValue={router.query.email}
                        validationErrors={validationErrors}
                      />

                      <FormToggle
                        label='Toggle:'
                        name='toggle'
                        defaultValue={router.query.toggle}
                        register={register}
                        validationErrors={validationErrors}
                      />

                      <FormSelect
                        label='Colors:'
                        placeholder='Please, select a color...'
                        name='color_select'
                        register={register}
                        defaultValue={router.query.color_select}
                        validationErrors={validationErrors}
                        options={[
                          { value: 'white', label: 'White' },
                          { value: 'red', label: 'Red' },
                          { value: 'green', label: 'Green' },
                          { value: 'yellow', label: 'Yellow' },
                        ]}
                      />

                      <div className='flex flex-wrap justify-end'>
                        <button type='submit' className='mx-3 btn btn-primary'>
                          Validate on client and on server
                        </button>

                        <button type='reset' className='mx-3 btn btn-secondary'>
                          RESET
                        </button>

                        <button
                          type='button'
                          className='m-3 btn btn-outline'
                          onClick={async () => {
                            const headers = new Headers()
                            headers.append('Content-Type', 'application/json')

                            const allValues = {
                              email: getValues('email'),
                              toggle: getValues('toggle'),
                              color_select: getValues('color_select'),
                            }

                            const fetchResponse = await fetch('/api/formExample_api', {
                              method: 'POST',
                              headers,
                              body: JSON.stringify(allValues),
                            })

                            /* check for server errors (VALIDATIONS) */
                            const isValid = await checkFetchJsonResult(fetchResponse)
                            if (isValid) {
                              const resultJSON = await fetchResponse.json()
                              const myAlert = withReactContent(Swal)
                              await myAlert.fire({
                                title: 'email is valid',
                                html: resultJSON.message,
                                confirmButtonText: 'close',
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

            <div className='hidden sm:block' aria-hidden='true'>
              <div className='py-5'>
                <div className='border-t' />
              </div>
            </div>
          </form>
        </main>
      </Layout>
    </>
  )
}

export default Page
