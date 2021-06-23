import '../styles/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </StrictMode>
    </ThemeProvider>
  )
}

export default MyApp
