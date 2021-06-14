import Head from 'next/head'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import { ChangeThemeDropDown } from '../components/ChangeThemeDropDown/ChangeThemeDropDown'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [session] = useSession()

  useEffect(() => {
    console.log(session?.user)
  }, [session])

  const callApi = async () => {
    const response = await fetch('/api/hello')

    const response_json = await response.json()
    return response_json
  }
  const pageTitle = process.env.NEXT_PUBLIC_SITE_NAME
  const pageUrl = process.env.NEXT_PUBLIC_SITE_URL
  const imageUrl = process.env.NEXT_PUBLIC_SITE_IMAGE
  const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION
  const keywords = process.env.KEYWORDS

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/favicon.ico' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        {/* Open Graph */}
        <meta name='og:title' content={pageTitle} key='ogtitle' />
        <meta name='og:type' content='website' />
        <meta name='og:url' content={pageUrl} />
        <meta name='og:description' content={description} />
        <meta name='og:image' content={imageUrl} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' key='twcard' />
        <meta property='twitter:image' content={imageUrl} />
        <meta name='twitter:creator' content='' key='twhandle' />
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>HOME</div>
            <div className='text-sm'>Next.js Opinionated Hasura</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        {/* avatar */}
        <div className='flex flex-col avatar'>
          <div className='w-24 h-24 my-8 rounded-box ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img
              onClick={() => callApi()}
              src={
                session?.user?.image ||
                'http://daisyui.com/tailwind-css-component-profile-1@94w.png'
              }
            />
          </div>

          {session?.user && (
            <div className='flex flex-col'>
              <p>
                Welcome, <span className='font-bold'>{session.user.email}</span>{' '}
                <div className='badge'>{session.user.role}</div>
              </p>
            </div>
          )}
        </div>

        {/* text */}
        <div className='pb-3'>
          <h1 className='py-2 text-3xl font-bold'>Next.js Opinionated Hasura</h1>

          <p className='max-w-md my-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius odit soluta
            porro libero amet quidem, iste nihil ipsam, aspernatur distinctio iure aperiam fugiat
            quaerat sit architecto nemo tempora ratione.
          </p>

          <Link href='/messages'>
            <a className='mx-2 my-4 btn btn-primary btn-md'>Messages (hasura)</a>
          </Link>

          {!session?.user && (
            <button className='ml-5 btn btn-primary btn-md' onClick={() => signIn()}>
              Login
            </button>
          )}

          {session?.user && (
            <button className='ml-5 btn btn-outline btn-md' onClick={() => signOut()}>
              SignOut
            </button>
          )}

          <hr className='my-16 text-secondary-content' />

          {/* buttons */}
          <div className='flex flex-wrap my-6 space-y-2'>
            <div className='mx-2 mt-2'>
              <ChangeThemeDropDown />
            </div>

            <div className='mx-2'>
              <button
                className='btn btn-primary'
                onClick={async () => {
                  const myAlert = withReactContent(Swal)
                  await myAlert.fire({
                    title: 'Some Alert Title',
                    html: <img src='https://unsplash.it/600/300' />,
                    imageAlt: 'Custom image',
                    confirmButtonText: 'ok button',
                  })
                }}
              >
                Show Image
              </button>
            </div>
            <div className='mx-2'>
              <button
                className='btn btn-primary'
                onClick={async () => {
                  const res = await fetch('/api/say-hello-from-api')
                  const resultJSON = await res.json()
                  const myAlert = withReactContent(Swal)
                  await myAlert.fire({
                    title: 'from server',
                    html: resultJSON.message,
                    confirmButtonText: 'close',
                  })
                }}
              >
                Call API
              </button>
            </div>
          </div>

          <p className='max-w-md mt-10 text-sm italic'>
            <a className='underline' target='_blank' rel='noreferrer' href='https://nextjs.org/'>
              next.js
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://www.typescriptlang.org/'
            >
              typescript
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://tailwindcss.com/'
            >
              tailwindcss
            </a>
            ,{' '}
            <a className='underline' target='_blank' rel='noreferrer' href='https://daisyui.com/'>
              daisyUI
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://storybook.js.org/'
            >
              storybook
            </a>
            ,{' '}
            <a className='underline' target='_blank' rel='noreferrer' href='https://jestjs.io/'>
              jest
            </a>
            ,{' '}
            <a className='underline' target='_blank' rel='noreferrer' href='https://eslint.org/'>
              eslint
            </a>
            ,{' '}
            <a className='underline' target='_blank' rel='noreferrer' href='https://prettier.io/'>
              prettier
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://sweetalert2.github.io/'
            >
              sweetalert2
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://react-icons.github.io/react-icons/'
            >
              react-icons
            </a>
            ,{' '}
            <a className='underline' target='_blank' rel='noreferrer' href='https://hasura.io/'>
              hasura
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/prisma-labs/graphql-request'
            >
              graphql-request
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://www.graphql-code-generator.com/'
            >
              graphql-codegen
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://docs.docker.com/compose/'
            >
              docker-compose
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://swr.vercel.app/'
            >
              swr
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://react-hook-form.com/'
            >
              react-hook-form
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/tailwindlabs/tailwindcss-forms'
            >
              @tailwindcss/forms
            </a>
            ,{' '}
            <a
              className='underline'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/colinhacks/zod'
            >
              zod (validations)
            </a>
          </p>
        </div>
      </Layout>
    </>
  )
}
