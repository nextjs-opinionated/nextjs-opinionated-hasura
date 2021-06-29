/* eslint-disable no-console */
import Head from 'next/head'
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import { ChangeThemeDropDown } from '../components/ChangeThemeDropDown/ChangeThemeDropDown'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

export default function Page() {
  const pageTitle = process.env.NEXT_PUBLIC_SITE_NAME
  const pageUrl = process.env.NEXT_PUBLIC_SITE_URL
  const imageUrl = process.env.NEXT_PUBLIC_SITE_IMAGE
  const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION
  const keywords = process.env.NEXT_PUBLIC_SITE_KEYWORDS
  const [session] = useSession()

  const throwKnownError = () => {
    throw new Error('Error from sentry!!!')
  }

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
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        {/* avatar */}
        <div className='flex flex-col avatar'>
          <div className='w-24 h-24 my-8 rounded-box ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img
              src={
                session?.user?.image ||
                'http://daisyui.com/tailwind-css-component-profile-1@94w.png'
              }
              // Example
              onClick={throwKnownError}
            />
          </div>

          {session?.user && (
            <div className='flex flex-col'>
              Welcome, <span className='font-bold underline'>{session.user.name}</span>
            </div>
          )}
        </div>

        {/* text */}
        <div className='pb-3'>
          <h1 className='py-2 text-3xl font-bold'>
            {process.env.NEXT_PUBLIC_SITE_NAME} - {process.env.NODE_ENV}
          </h1>

          <p className='max-w-md my-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius odit soluta
            porro libero amet quidem, iste nihil ipsam, aspernatur distinctio iure aperiam fugiat
            quaerat sit architecto nemo tempora ratione.
          </p>

          {/* buttons */}
          <div className='flex flex-wrap items-center my-16 space-x-2'>
            <Link href='/form-example'>
              <a className='mx-2 mb-2 btn btn-primary'>React Form Example</a>
            </Link>

            <Link href='/typed-fetch-examples'>
              <a className='mb-2 btn btn-primary'>Typed-Fetch</a>
            </Link>

            <div className='mx-2 mb-2'>
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

            <div className='mx-2 mb-2'>
              <button
                className='btn btn-primary'
                onClick={async () => {
                  const res = await fetch('/api/sentry-error')
                  const resultJSON = await res.json()
                  const myAlert = withReactContent(Swal)
                  await myAlert.fire({
                    title: 'Sentry error',
                    html: (
                      <div>
                        <h5>
                          <strong>message:</strong> {resultJSON.message}
                        </h5>
                      </div>
                    ),
                    confirmButtonText: 'close',
                  })
                }}
              >
                Sentry Error
              </button>
            </div>

            <div className='mb-2'>
              <ChangeThemeDropDown />
            </div>

            <div className='mx-2 mb-2'>
              {!session?.user && (
                <button className='btn btn-primary btn-md' onClick={() => signIn()}>
                  Login
                </button>
              )}

              {session?.user && (
                <button className='btn btn-outline btn-md' onClick={() => signOut()}>
                  SignOut
                </button>
              )}
            </div>
          </div>

          <p className='max-w-md mt-5 text-sm italic'>
            {extLink('next.js', 'https://nextjs.org/')},{' '}
            {extLink('typescript', 'https://www.typescriptlang.org/')},{' '}
            {extLink('tailwindcss', 'https://tailwindcss.com/')},{' '}
            {extLink('daisyUI', 'https://daisyui.com/')},{' '}
            {extLink('storybook', 'https://storybook.js.org/')},{' '}
            {extLink('jest', 'https://jestjs.io/')}, {extLink('eslint', 'https://eslint.org/')},{' '}
            {extLink('prettier', 'https://prettier.io/')},{' '}
            {extLink('sweetalert2', 'https://sweetalert2.github.io/')},{' '}
            {extLink('react-icons', 'https://react-icons.github.io/react-icons/')},{' '}
            {extLink('react-hook-form', 'https://react-hook-form.com/')},{' '}
            {extLink('@tailwindcss/forms', 'https://github.com/tailwindlabs/tailwindcss-forms')},{' '}
            {extLink('zod', 'https://github.com/colinhacks/zod')},{' '}
            {extLink('react-query', 'https://react-query.tanstack.com/')}
          </p>
        </div>
      </Layout>
    </>
  )
}

function extLink(name: string, url: string) {
  return (
    <a className='link' target='_blank' rel='noreferrer' href={url}>
      {name}
    </a>
  )
}
