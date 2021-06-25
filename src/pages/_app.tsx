import '../styles/tailwind.css'
import '../styles/sweetalert.css'
import { ThemeProvider } from 'next-themes'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import React, { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { ReactQueryDevtools } from 'react-query/devtools'
import type { AppProps } from 'next/app'

Sentry.init({
  dsn: 'https://afda10ad7e6e47ef99c2ed248abef638@o878762.ingest.sentry.io/5830876',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

const queryClient = new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <NextAuthProvider
          // Provider options are not required but can be useful in situations where
          // you have a short session maxAge time. Shown here with default values.
          options={{
            // Client Max Age controls how often the useSession in the client should
            // contact the server to sync the session state. Value in seconds.
            // e.g.
            // * 0  - Disabled (always use cache value)
            // * 60 - Sync session state with server if it's older than 60 seconds
            clientMaxAge: 0,
            // Keep Alive tells windows / tabs that are signed in to keep sending
            // a keep alive request (which extends the current session expiry) to
            // prevent sessions in open windows from expiring. Value in seconds.
            //
            // Note: If a session has expired when keep alive is triggered, all open
            // windows / tabs will be updated to reflect the user is signed out.
            keepAlive: 0,
          }}
          session={pageProps.session}
        >
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </NextAuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  )
}

export default MyApp
