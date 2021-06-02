import '../styles/tailwind.css'
import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('America/Sao_Paulo')

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
