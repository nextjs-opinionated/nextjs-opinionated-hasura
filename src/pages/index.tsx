/* eslint-disable no-console */
import Head from 'next/head'
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import Link from 'next/link'
import * as nextjsAuth0 from '@auth0/nextjs-auth0'

export default function Page() {
  const pageTitle = process.env.NEXT_PUBLIC_SITE_NAME
  const pageUrl = process.env.NEXT_PUBLIC_SITE_URL
  const imageUrl = process.env.NEXT_PUBLIC_SITE_IMAGE
  const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION
  const keywords = process.env.NEXT_PUBLIC_SITE_KEYWORDS

  const { user, error, isLoading } = nextjsAuth0.useUser()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

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
              src={user?.picture || 'http://daisyui.com/tailwind-css-component-profile-1@94w.png'}
              // Example
              onClick={throwKnownError}
            />
          </div>

          {user && (
            <div className='flex flex-col'>
              Welcome, <span className='font-bold underline'>{user.name}</span>
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

          <Link href='/messages?showAs=table'>
            <a className='mx-2 my-4 btn btn-primary btn-md'>Messages (hasura)</a>
          </Link>

          <hr className='my-16 text-secondary-content' />

          {/* buttons */}
          <div className='flex space-x-2 space-y-2'>
            <div></div>

            <Link href='/form-example'>
              <a className='btn btn-primary'>React Form Example</a>
            </Link>

            <Link href='/typed-fetch-examples'>
              <a className='btn btn-primary'>Typed-Fetch</a>
            </Link>

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

            {!user && (
              <a className='btn btn-primary btn-md' href='/api/auth/login'>
                Login
              </a>
            )}

            {user && (
              <a className='btn btn-outline btn-md' href='/api/auth/logout'>
                Logout
              </a>
            )}
          </div>

          <p className='max-w-md mt-5 italic'>
            {extLink('next.js', 'https://nextjs.org/')},
            {extLink('typescript', 'https://www.typescriptlang.org/')},
            {extLink('tailwindcss', 'https://tailwindcss.com/')},
            {extLink('daisyUI', 'https://daisyui.com/')},
            {extLink('storybook', 'https://storybook.js.org/')},
            {extLink('jest', 'https://jestjs.io/')}, {extLink('eslint', 'https://eslint.org/')},
            {extLink('prettier', 'https://prettier.io/')},
            {extLink('sweetalert2', 'https://sweetalert2.github.io/')},
            {extLink('react-icons', 'https://react-icons.github.io/react-icons/')},
            {extLink('react-hook-form', 'https://react-hook-form.com/')},
            {extLink('@tailwindcss/forms', 'https://github.com/tailwindlabs/tailwindcss-forms')},
            {extLink('zod', 'https://github.com/colinhacks/zod')},
            {extLink('react-query', 'https://react-query.tanstack.com/')},
            {extLink('auth0', 'https://auth0.com/')}
            {/*
              --- HASURA, etc - BELLOW ---
            */}
            {extLink('hasura', 'https://hasura.io/')},
            {extLink('graphql-request', 'https://github.com/prisma-labs/graphql-request')},
            {extLink('graphql-codegen', 'https://www.graphql-code-generator.com/')},
            {extLink('docker-compose', 'https://docs.docker.com/compose/')}
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
