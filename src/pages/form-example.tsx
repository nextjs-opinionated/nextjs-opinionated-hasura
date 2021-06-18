import Head from 'next/head'
import * as React from 'react'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import { FormExample } from '../components/FormExample/FormExample'
import { EMPTY_SELECT_OPTION_VALUE } from '../components/forms/FormSelect/FormSelect'
import { useState } from 'react'

const Page: React.FunctionComponent = () => {
  const [formValues, formValuesSet] = useState({
    email: null,
    color_select: null,
    toggle: false,
  })

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
                formValuesSet({
                  email: undefined,
                  color_select: undefined,
                  toggle: undefined,
                })
              }}
              className='mx-3 btn btn-secondary'
            >
              empty form
            </button>

            <button
              type='button'
              onClick={() => {
                formValuesSet({
                  email: '',
                  color_select: EMPTY_SELECT_OPTION_VALUE,
                  toggle: false,
                })
              }}
              className='mx-3 btn btn-secondary'
            >
              empty form (FORCED)
            </button>

            <button
              type='button'
              onClick={() => {
                formValuesSet({
                  email: 'some_email@gmail.com',
                  color_select: 'red',
                  toggle: true,
                })
              }}
              className='mx-3 btn btn-secondary'
            >
              filled form
            </button>
          </div>

          <FormExample initialFormData={formValues} />
        </main>
      </Layout>
    </>
  )
}

export default Page
