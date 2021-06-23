import '../styles/tailwind.css'
import { ThemeProvider } from 'next-themes'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import React, { StrictMode } from 'react'

Sentry.init({
  dsn: 'https://afda10ad7e6e47ef99c2ed248abef638@o878762.ingest.sentry.io/5830876',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <StrictMode>
        <Component {...pageProps} />
      </StrictMode>
    </ThemeProvider>
  )
}

export default MyApp
