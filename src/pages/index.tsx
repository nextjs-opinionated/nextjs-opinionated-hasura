/* eslint-disable no-console */
import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import * as nextjsAuth0 from '@auth0/nextjs-auth0'
import Loading from '../components/Loading/Loading'
import Logo from '../components/LogoDefault/Logo'
import { FaGithub } from 'react-icons/fa'
import isLocalhost from '../utils/isLocalhost'
import { BiLinkExternal } from 'react-icons/bi'
import { Card } from '../components/Cards/Cards'

export default function Page() {
  const pageTitle = process.env.NEXT_PUBLIC_SITE_NAME
  const pageUrl = process.env.NEXT_PUBLIC_SITE_URL
  const imageUrl = process.env.NEXT_PUBLIC_SITE_IMAGE
  const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION
  const keywords = process.env.NEXT_PUBLIC_SITE_KEYWORDS

  const { error, isLoading } = nextjsAuth0.useUser()
  if (isLoading) return <Loading />
  if (error) return <div>{error.message}</div>

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
          <div className='flex items-center flex-grow px-2 mx-2 space-x-3'>
            <Link href='/'>
              <a>
                <Logo />
              </a>
            </Link>
            <div className='text-sm font-bold'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <div className='min-h-screen hero bg-base-200 bg-gradient-to-br from-secondary to-primary text-primary-content'>
          <div className='text-center hero-content'>
            <div className='flex flex-col items-center justify-between w-full max-w-6xl mt-5 mb-48 sm:mt-10'>
              <h1 className='mt-20 mb-5 text-4xl font-extrabold sm:text-6xl'>
                {process.env.NEXT_PUBLIC_SITE_NAME}
              </h1>
              <div className='max-w-md'>
                <p className='my-3 text-xs sm:my-10 sm:text-sm sm:block'>
                  The complete {extLink('Next.js', 'https://nextjs.org/')} boilerplate with
                  {extLink('tailwindcss', 'https://tailwindcss.com/')},
                  {extLink('daisyUI', 'https://daisyui.com/')},
                  {extLink('storybook', 'https://storybook.js.org/')},
                  {extLink('jest', 'https://jestjs.io/')},{' '}
                  {extLink('eslint', 'https://eslint.org/')},
                  {extLink('prettier', 'https://prettier.io/')},
                  {extLink('sweetalert2', 'https://sweetalert2.github.io/')},
                  {extLink('react-icons', 'https://react-icons.github.io/react-icons/')},
                  {extLink('react-hook-form', 'https://react-hook-form.com/')},
                  {extLink(
                    '@tailwindcss/forms',
                    'https://github.com/tailwindlabs/tailwindcss-forms'
                  )}
                  ,{extLink('zod', 'https://github.com/colinhacks/zod')},
                  {extLink('react-query', 'https://react-query.tanstack.com/')} and
                  {extLink('auth0', 'https://auth0.com/')}
                </p>
                <div className='flex flex-wrap justify-center mt-10 space-x-2'>
                  <a href='/docs' className='btn btn-ghost'>
                    Documentation
                  </a>
                  <a href='/docs/getting-started' className='btn btn-primary'>
                    Get Started
                  </a>
                </div>
                <div className='absolute left-0 right-0 flex justify-center mt-2 bottom-10 sm:bottom-20'>
                  <IoIosArrowDown className='w-6 h-6 animate-bounce' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-md pb-20 mx-auto hero md:max-w-full bg-base-100'>
          <div className='flex-col text-center hero-content'>
            <div>
              <h2 className='mt-20 mb-2 text-4xl font-extrabold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                Demos
              </h2>
              <h3 className='mt-5 text-2xl font-bold'>Check some features</h3>
            </div>

            <div className='grid grid-cols-1 gap-6 mt-5 space-x-2 md:grid-cols-3 text-base-content'>
              {/* CARD */}
              <div className='shadow-2xl card lg:card-side bg-base-300'>
                <div className='justify-between card-body'>
                  <div>
                    <h2 className='card-title'>Storybook</h2>
                    <p>
                      this project works with storybook (and also with next.js, tailwind and
                      postcss)
                    </p>
                  </div>
                  <div className='justify-center card-actions'>
                    {isLocalhost() ? (
                      <a href='http://localhost:6006' className='btn btn-primary'>
                        see storybook
                      </a>
                    ) : (
                      <a
                        href='https://main--60d0b5d829870700396e0a3b.chromatic.com'
                        className='btn btn-primary'
                      >
                        see storybook
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div className='shadow-2xl card lg:card-side bg-base-300'>
                <div className='justify-between card-body'>
                  <div>
                    <h2 className='card-title'>Code Generator</h2>
                    <p>
                      Generate code directly from this project if you are running on
                      http://localhost:3000
                    </p>
                  </div>
                  <div className='justify-center card-actions'>
                    <Link href='/code-generator'>
                      <a className='btn btn-primary'>Generate code</a>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div className='shadow-2xl card lg:card-side bg-base-300'>
                <div className='justify-between card-body'>
                  <div>
                    <h2 className='card-title'>CRUD Example</h2>
                    <p>A standard way to List, Set, Update and Delete items</p>
                  </div>
                  <div className='justify-center card-actions'>
                    <Link href='/list_items?page=1'>
                      <a className='btn btn-primary'>list items</a>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div className='shadow-2xl card lg:card-side bg-base-300'>
                <div className='justify-between card-body'>
                  <div>
                    <h2 className='card-title'>TypedFetch</h2>
                    <p>
                      We created a standard typed-fetch using typeScript to manage API calls. That
                      way you will be typing input and output of all fetch calls
                    </p>
                  </div>
                  <div className='justify-center card-actions'>
                    <Link href='/typed-fetch-examples'>
                      <a className='btn btn-primary'>test fetch</a>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div className='shadow-2xl card lg:card-side bg-base-300'>
                <div className='justify-between card-body'>
                  <div>
                    <h2 className='card-title'>Authentication</h2>
                    <p className='inline'>
                      We use a simple integration with auth0. The incredible integration is made
                      with the
                      <div className='flex items-center justify-center'>
                        <a
                          href='https://github.com/auth0/nextjs-auth0'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='underline'
                        >
                          nextjs-auth0
                        </a>
                        <BiLinkExternal className='ml-2' size={17} />
                      </div>
                    </p>
                  </div>
                  <div className='justify-center card-actions'>
                    <Link href='/typed-fetch-examples'>
                      <a className='btn btn-primary'>Login now</a>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div className='shadow-2xl card lg:card-side bg-base-300'>
                <div className='justify-between card-body'>
                  <div>
                    <h2 className='card-title'>Universal Validation</h2>
                    <p className='inline'>
                      ZOD validator is a simple validation library. We use it to validate input
                      fields on server side and on cliente side.
                    </p>
                  </div>
                  <div className='justify-center card-actions'>
                    <Link href='/list_items/cb0f6982-de0a-4b35-804f-5ed5e8d7bed3'>
                      <a className='btn btn-primary'>Check Validation</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <>
              <Card />
            </>
          </div>
        </div>

        <div className='max-w-md mx-auto hero bg-neutral text-neutral-content md:max-w-full'>
          <div className='text-center hero-content'>
            <div className='sm:my-32'>
              <h2 className='mt-20 mb-2 text-4xl font-extrabold md:text-6xl'>
                The complete boilerplate for Next.js
              </h2>{' '}
              <h3 className='my-10 text-3xl font-bold'>start your project the right way</h3>{' '}
              <p className='max-w-lg mx-auto my-10'>
                {process.env.NEXT_PUBLIC_SITE_NAME} has all best dependencies and our team always
                make sure everything is updated
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className='w-full p-4 bg-neutral text-neutral-content'>
          <div className='pt-2 text-center opacity-60'>
            <p>© 2021 Next.js Opinionated Team.</p>
            <a
              className='hover:scale-125 btn btn-link'
              href='https://github.com/nextjs-opinionated/nextjs-opinionated'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub color='#fff' size={22} />
            </a>
          </div>
        </div>
      </Layout>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

function extLink(name: string, url: string) {
  return (
    <a className='mx-1 hover:link' target='_blank' rel='noreferrer' href={url}>
      {name}
    </a>
  )
}
