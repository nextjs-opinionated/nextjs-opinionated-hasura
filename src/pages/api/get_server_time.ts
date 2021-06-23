import { withSentry } from '@sentry/nextjs'
import logger from '../../logger/logger'
import { prepObjectKeys } from '../../logger/utils'
import _ from 'lodash'

const throwKnownError = () => Promise.reject(new Error('API Test 1'))
throwKnownError() // only test sentry

export default withSentry(async function get_server_time(req, res) {
  const response = {message: `Hello from server! It's ${new Date().toLocaleTimeString()}`}

  const headers = prepObjectKeys(req.headers)

  const headerWithoutCookie = _.omit(headers, ['cookie'])

  logger.debug(
    {
      request: {
        headers: headerWithoutCookie,
        url: req.url,
        method: req.method,
      },
      response: {
        statusCode: res.statusCode,
        body: response
      },
    },
    'API get_server_time'
  )

  // logger.debug({ data: response }, "get_server_time")
  
  res.status(200).json(response)
})

