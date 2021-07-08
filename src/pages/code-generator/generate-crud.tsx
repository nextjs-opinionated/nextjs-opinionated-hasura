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
  Generate_crud_api_post,
  generate_crud_api_post_Config,
} from '../../model/api-models/code-generator/Generate_crud_api_post'

export type FormProps = {
  table_name: string
  table_id: string
}

const initialFormData = {
  table_name: '',
  table_id: '',
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
        Generate_crud_api_post['input'],
        Generate_crud_api_post['output']
      >({
        ...generate_crud_api_post_Config,
        inputData: {
          ...submitProps,
        },
      })

      if (fetch_result.error === null) {
        const myAlert = withReactContent(Swal)
        await myAlert.fire({
          title: 'submited',
          html: <CodeBlock content={fetch_result.outputData} />,
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
        <title>Generate new CRUD: {process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>Generate new CRUD</div>
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
                        label='Table name:'
                        placeholder='table_name'
                        name='table_name'
                        register={register}
                        defaultValue={initialFormData.table_name}
                        validationErrors={validationErrors}
                      />

                      <FormInput
                        label='Table ID:'
                        placeholder='table_id'
                        name='table_id'
                        register={register}
                        defaultValue={initialFormData.table_id}
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
