import '../styles/tailwind.css'
import { StrictMode } from 'react'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps, err }) {
  return (
    <ThemeProvider>
      <StrictMode>
        <Component {...pageProps} err={err} />
      </StrictMode>
    </ThemeProvider>
  )
}

export default MyApp
