import '../styles/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { StrictMode } from 'react'

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
