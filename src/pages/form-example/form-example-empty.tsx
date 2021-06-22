import Head from 'next/head'
import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FormExample } from '../../components/FormExample/FormExample'
import { CodeBlock } from '../../components/forms/CodeBlock/CodeBlock'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'
import { checkFetchJsonResult } from '../../utils/checkFetchResult'

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
            onSubmitConfirm={async (submitProps) => {
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
                  html: <CodeBlock content={submitProps} />,
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
