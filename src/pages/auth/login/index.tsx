import { getProviders, ClientSafeProvider, getCsrfToken, signIn } from 'next-auth/client'
import { Layout } from '../../../components/Layout/Layout'
import { CustomButtonAuth } from '../../../components/CustomButtonAuth/CustomButtonAuth'
// import { LockClosedIcon } from '@heroicons/react/solid'
import React from 'react'

export default function SignIn({ providers, csrfToken }: Record<string, ClientSafeProvider>) {
  return (
    <div className='flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img
            className='w-auto h-12 mx-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-sm text-center text-gray-600'>
            Or{' '}
            <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
              welcome to next-opinionated
            </a>
          </p>
        </div>
        <form className='mt-8 space-y-6' action='/api/auth/signin/email' method='POST'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='-space-y-px rounded-md shadow-sm'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember_me'
                name='remember_me'
                type='checkbox'
                className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
              />
              <label htmlFor='remember_me' className='block ml-2 text-sm text-gray-900'>
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => signIn('credentials', { email: 'jsmith@gmail.com', password: '1234' })}
            >
              Sign in
            </button>
          </div>
          <div className='flex justify-center w-full'>
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <CustomButtonAuth keyProvider={provider.name} providerId={provider.id}>
                  Sign in with {provider.name}
                </CustomButtonAuth>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  const providers = await getProviders()
  return {
    props: { providers, csrfToken },
  }
}
