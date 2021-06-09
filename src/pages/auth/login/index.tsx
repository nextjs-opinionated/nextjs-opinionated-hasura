import { getProviders, ClientSafeProvider } from 'next-auth/client'
import { Layout } from '../../../components/Layout/Layout'
import { CustomButtonAuth } from '../../../components/CustomButtonAuth/CustomButtonAuth'

export default function SignIn({ providers }: Record<string, ClientSafeProvider>) {
  return (
    <Layout>
      <div className='flex justify-center w-full'>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <CustomButtonAuth keyProvider={provider.name} providerId={provider.id}>
              Sign in with {provider.name}
            </CustomButtonAuth>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
