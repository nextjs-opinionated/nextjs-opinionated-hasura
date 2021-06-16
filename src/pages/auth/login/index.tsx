import { getProviders, ClientSafeProvider, useSession } from 'next-auth/client'
import {
  CustomButtonAuth,
  KeyProvider,
} from '../../../components/CustomButtonAuth/CustomButtonAuth'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../../../components/Layout/Layout'
import { LinksList } from '../../../model/site/LinksList'

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

interface ClientSafeProviderProps extends ClientSafeProvider {
  id: KeyProvider
}

type Provider = {
  providers: {
    [key in KeyProvider]: ClientSafeProviderProps
  }
}

export default function login({ providers }: Provider) {
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
          <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
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
            <p className='mt-2 text-sm text-center text-primary'>
              welcome to {process.env.NEXT_PUBLIC_SITE_NAME}
            </p>
          </>

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
