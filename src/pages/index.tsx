/* eslint-disable no-console */
import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import Logo from '../components/LogoDefault/Logo'
import { FaGithub } from 'react-icons/fa'
import { Cards } from '../components/Cards/Cards'

export default function Page() {
  const pageTitle = process.env.NEXT_PUBLIC_SITE_NAME
  const pageUrl = process.env.NEXT_PUBLIC_SITE_URL
  const imageUrl = process.env.NEXT_PUBLIC_SITE_IMAGE
  const description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION
  const keywords = process.env.NEXT_PUBLIC_SITE_KEYWORDS

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
          <div className='flex items-center justify-end flex-grow px-2 mx-2 space-x-3 md:justify-start'>
            <Logo />
            <div className='hidden text-sm font-bold md:block'>
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </div>
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
                  {extLink('hasura', 'https://hasura.io/')},
                  {extLink('graphql-request', 'https://github.com/prisma-labs/graphql-request')},
                  {extLink('graphql-codegen', 'https://www.graphql-code-generator.com/')},
                  {extLink('docker-compose', 'https://docs.docker.com/compose/')} and also
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
                  <Link href='/docs'>
                    <a className='btn btn-ghost'>Documentation</a>
                  </Link>
                  <Link href='/docs/getting-started'>
                    <a className='btn btn-primary'>Get Started</a>
                  </Link>
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

            {/* Grid Cards component */}
            <Cards />
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
              </p>
            </div>
          </div>
        </div>

        <footer className='w-full p-4 bg-neutral text-neutral-content'>
          <div className='pt-2 text-center opacity-60'>
            <p>© 2021 Next.js Opinionated Team.</p>
            <a
              className='hover:scale-125 btn btn-link'
              href='https://github.com/nextjs-opinionated/nextjs-opinionated-hasura'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub color='#fff' size={22} />
            </a>
          </div>
        </footer>
      </Layout>
      <style jsx global>{`
        html,
        body {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </>
  )
}

function extLink(name: string, url: string) {
  return (
    <a className='mx-1 link-hover hover:link-neutral' target='_blank' rel='noreferrer' href={url}>
      {name}
    </a>
  )
}
