import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { logMiddleware } from '../../utils/middleware/log'

const throwKnownError = () => Promise.reject(new Error('API Test 1'))
throwKnownError() // only test sentry


export default withSentry(logMiddleware((_: NextApiRequest, res: NextApiResponse) => {
  const response = {message: `This must have generated an error in sentry. Check the console`}
  
  res.status(200).json(response)
}))


