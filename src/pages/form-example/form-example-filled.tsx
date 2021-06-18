import Head from 'next/head'
import * as React from 'react'
import { FormExample } from '../../components/FormExample/FormExample'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'

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
            }}
          />
        </main>
      </Layout>
    </>
  )
}

export default Page
