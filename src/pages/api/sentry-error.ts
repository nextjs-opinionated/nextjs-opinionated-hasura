import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { logMiddleware } from '../../utils/middleware/log'

const throwKnownError = () => Promise.reject(new Error('Sentry Error'))


export default withSentry(logMiddleware((_: NextApiRequest, res: NextApiResponse) => {
  const response = {message: `This must have generated an error in sentry. Check the console`}
  
  throwKnownError() // only test sentry
  return res.status(200).json(response)
}))


