import '../styles/tailwind.css'
import '../styles/sweetalert.css'
import { ThemeProvider } from 'next-themes'
import { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ReactQueryDevtools } from 'react-query/devtools'
import type { AppProps } from 'next/app'

const queryClient = new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </UserProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  )
}

export default MyApp
