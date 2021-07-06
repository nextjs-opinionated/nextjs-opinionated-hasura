import Head from 'next/head'
import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'
import typedFetch from '../../utils/typedFetch/typedFetch'
import { useForm } from 'react-hook-form'
import { FormInput } from '../../components/forms/FormInput/FormInput'
import {
  Generate_component_api_post,
  generate_component_api_post_Config,
} from '../../model/api-models/code-generator/Generate_component_api_post'

export type FormProps = {
  name: string
}

const initialFormData = {
  name: '',
}

const Page: React.FunctionComponent = () => {
  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
  } = useForm<FormProps>({
    mode: 'onChange',
  })

  const onSubmit = handleSubmit(
    async (submitProps) => {
      const fetch_result = await typedFetch<
        Generate_component_api_post['input'],
        Generate_component_api_post['output']
      >({
        ...generate_component_api_post_Config,
        data: {
          ...submitProps,
        },
      })

      if (fetch_result.error === null) {
        const myAlert = withReactContent(Swal)
        await myAlert.fire({
          title: 'submited',
          html: <CodeBlock content={fetch_result.data} />,
          confirmButtonText: 'close',
          customClass: {
            confirmButton: 'btn btn-primary btn-md',
            actions: 'bg-base-200 sweetalert-action',
            title: 'bg-base-200',
            htmlContainer: 'bg-base-200',
          },
          buttonsStyling: false,
          showConfirmButton: true,
          background: 'transparent',
          width: 'auto',
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
        <title>Generate new Component: {process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>Generate new Component</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='flex flex-col items-center mx-8'>
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
                    <h3 className='text-lg font-medium leading-6'>Fields</h3>
                  </div>
                </div>
                <div className='mt-5 md:mt-0 md:col-span-2'>
                  <div className='shadow sm:rounded-md sm:overflow-hidden'>
                    <div className='px-4 py-5 space-y-6 sm:p-6'>
                      <FormInput
                        label='Component Name:'
                        placeholder='MyComponent'
                        name='name'
                        register={register}
                        defaultValue={initialFormData.name}
                        validationErrors={validationErrors}
                      />

                      <div className='flex flex-col'>
                        <div className='flex justify-end'>
                          <button type='reset' className='mx-3 btn btn-secondary'>
                            Generate Code
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
