import Head from 'next/head'
import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { FormExample } from '../../components/FormExample/FormExample'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'
import typedFetch from '../../utils/typedFetch'
import {
  Fetch_formExample_api_Input_Post,
  Fetch_formExample_api_Output_Post,
  FETCH_FORMEXAMPLE_API_POST_URL,
} from '../api/fetch_formExample_api_post'

const Page: React.FunctionComponent = () => {
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
          <FormExample
            initialFormData={{
              email: 'some_email@gmail.com',
              color_select: 'red',
              toggle: true,
              image_url: 'https://via.placeholder.com/1080x1920.png?text=Image+Placeholder',
              color_input: '#ff0000',
            }}
            onSubmitConfirm={async (submitProps) => {
              const typedFetchResult = await typedFetch<
                Fetch_formExample_api_Input_Post,
                Fetch_formExample_api_Output_Post
              >({
                url: FETCH_FORMEXAMPLE_API_POST_URL,
                method: 'post',
                data: {
                  ...submitProps,
                },
                responseType: 'json',
              })

              if (typedFetchResult?.status === 200) {
                const myAlert = withReactContent(Swal)
                await myAlert.fire({
                  title: 'submited',
                  html: <CodeBlock content={typedFetchResult.data} />,
                  confirmButtonText: 'close',
                })
              }
            }}
          />
        </main>
      </Layout>
    </>
  )
}

export default Page
