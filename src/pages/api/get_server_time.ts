import { prepObjectKeys } from '../../logger/utils'
import logger from '../../logger/logger'

export default (req, res) => {
  logger.debug('It Works!')

  const headers = prepObjectKeys(req.headers)

  logger.info(
    {
      request: {
        headers: headers,
        url: req.url,
        method: req.method,
      },
      response: {
        statusCode: res.statusCode,
      },
    },
    'API request'
  )

  res.status(200).json({
    message: `Hello from server! It's ${new Date().toLocaleTimeString()}`,
  })
}
