import {
  getProviders,
  ClientSafeProvider,
  getCsrfToken,
  signIn,
  useSession,
} from 'next-auth/client'
import {
  CustomButtonAuth,
  KeyProvider,
} from '../../../components/CustomButtonAuth/CustomButtonAuth'
import { FormInput } from '../../../components/FormInput/FormInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { authValidationSchema } from '../../../model/authValidationSchema'
import { NextPageContext } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface ClientSafeProviderProps extends ClientSafeProvider {
  name: KeyProvider
}

type Provider = {
  providers: {
    [key in KeyProvider]: ClientSafeProviderProps
  }
  csrfToken: string
}

type FormProps = {
  email: string
}

export default function login({ providers, csrfToken }: Provider) {
  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
  } = useForm<FormProps>({
    mode: 'onChange',
    resolver: zodResolver(authValidationSchema),
  })

  const onSubmit = handleSubmit(
    async (submitProps) => {
      const email = submitProps.email
      signIn('email', { email })
    },
    (submitErrors) => {
      console.log('--  submitErrors: ', submitErrors)
    }
  )

  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.user) {
      router.push('/')
    }
  }, [session, router])

  return (
    <div className='flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <>
          <img
            className='w-auto h-12 mx-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-3xl font-extrabold text-center'>Sign in to your account</h2>
          <p className='mt-2 text-sm text-center text-gray-600'>welcome to next-opinionated</p>
        </>
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
              keyProvider={providers?.email?.name}
              providerId={providers?.email?.id}
              label={`Sign in with ${providers?.email?.name}`}
            />
          </div>
        </form>
        <div>
          <>
            <CustomButtonAuth
              keyProvider={providers?.github?.name}
              providerId={providers?.github?.id}
              label={`Sign in with ${providers?.github.name}`}
            />
          </>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: { providers, csrfToken },
  }
}
