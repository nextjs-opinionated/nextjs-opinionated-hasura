import Head from 'next/head'
import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { FormExample } from '../../components/FormExample/FormExample'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'
import typedFetch from '../../utils/typedFetch/typedFetch'
import {
  Fetch_formExample_api_post,
  fetch_formExample_api_post_Config,
} from '../../model/api-models/form-example/Fetch_formExample_api_post'

const Page: React.FunctionComponent = () => (
  <>
    <Head>
      <title>Form Example: {process.env.NEXT_PUBLIC_SITE_NAME}</title>
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
        <FormExample
          initialFormData={{
            email: '',
            color_select: '',
            toggle: false,
            image_url: '',
            color_input: '',
          }}
          onSubmitConfirm={async (submitProps) => {
            const fetch_result = await typedFetch<
              Fetch_formExample_api_post['input'],
              Fetch_formExample_api_post['output']
            >({
              ...fetch_formExample_api_post_Config,
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
          }}
        />
      </main>
    </Layout>
  </>
)

export default Page
