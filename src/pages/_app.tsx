import '../styles/tailwind.css'
import '../styles/sweetalert.css'
import { ThemeProvider } from 'next-themes'
import { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ReactQueryDevtools } from 'react-query/devtools'
import type { AppProps } from 'next/app'

// dayjs
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('America/Sao_Paulo')

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
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
