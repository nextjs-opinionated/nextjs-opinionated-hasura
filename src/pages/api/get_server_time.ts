import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { logMiddleware } from '../../utils/middleware/log'

const throwKnownError = () => Promise.reject(new Error('API Test 1'))
throwKnownError() // only test sentry


export default withSentry(logMiddleware(async function get_server_time(_: NextApiRequest, res: NextApiResponse) {
  const response = {message: `Hello from server! It's ${new Date().toLocaleTimeString()}`}
  
  res.status(200).json(response)
}))


