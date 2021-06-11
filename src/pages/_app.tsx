import '../styles/tailwind.css'
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { ThemeProvider } from 'next-themes'
import { StrictMode } from 'react'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('America/Sao_Paulo')

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
