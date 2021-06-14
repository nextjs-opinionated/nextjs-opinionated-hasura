/* eslint-disable no-console */
import Head from 'next/head'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import { ChangeThemeDropDown } from '../components/ChangeThemeDropDown/ChangeThemeDropDown'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [session] = useSession()

  useEffect(() => {
    console.log(session?.user)
  }, [session])

  const callApi = async () => {
    const response = await fetch('/api/say-hello-from-api')

    const response_json = await response.json()
    console.log(response_json)
  }

  return (
    <>
      <Head>
        <title>Next.js Opinionated</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>HOME</div>
            <div className='text-sm'>Next.js Opinionated</div>
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
                Welcome, <span className='font-bold underline'>{session.user.name}</span>
              </p>
            </div>
          )}
        </div>

        {/* text */}
        <div className='pb-3'>
          <h1 className='py-2 text-3xl font-bold'>Next.js Opinionated</h1>

          <p className='max-w-md my-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius odit soluta
            porro libero amet quidem, iste nihil ipsam, aspernatur distinctio iure aperiam fugiat
            quaerat sit architecto nemo tempora ratione.
          </p>

          {/* buttons */}
          <div className='flex flex-wrap my-16 space-y-2'>
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

            <div className='mx-2'>
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
          </p>
        </div>
      </Layout>
    </>
  )
}
