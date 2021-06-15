import { getProviders, ClientSafeProvider, getCsrfToken, useSession } from 'next-auth/client'
import {
  CustomButtonAuth,
  KeyProvider,
} from '../../../components/CustomButtonAuth/CustomButtonAuth'
import { NextPageContext } from 'next'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../../../components/Layout/Layout'
import { LinksList } from '../../../model/site/LinksList'

interface ClientSafeProviderProps extends ClientSafeProvider {
  id: KeyProvider
}

type Provider = {
  providers: {
    [key in KeyProvider]: ClientSafeProviderProps
  }
  csrfToken: string
}

export default function login({ providers, csrfToken }: Provider) {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.user) {
      router.push('/')
    }
  }, [session, router])

  return (
    <Layout
      title={
        <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
          <div className='text-base font-bold'>Login</div>
          <div className='text-sm'>Next.js Opinionated</div>
        </div>
      }
      menuItems={Object.values(LinksList)}
    >
      {' '}
      <div className='flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <>
            <img
              className='w-auto h-12 mx-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
            <h2 className='mt-6 text-3xl font-extrabold text-center'>Sign in to your account</h2>
            <p className='mt-2 text-sm text-center text-primary'>welcome to next-opinionated</p>
          </>
          {/* 
          <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-6'>
            <input type='hidden' name='remember' defaultValue='true' />
            <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
            <FormInput
              name='email'
              label='email'
              validationErrors={validationErrors}
              register={register}
            />
            <div>
              <CustomButtonAuth
                keyProvider={providers?.email?.id}
                providerId={providers?.email?.id}
                label={`Sign in with ${providers?.email?.name}`}
              />
            </div>
          </form>
          */}
          <div>
            <>
              <CustomButtonAuth
                keyProvider={providers?.github?.id}
                providerId={providers?.github?.id}
                label={`Sign in with ${providers?.github.name}`}
              />
            </>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: { providers, csrfToken },
  }
}
