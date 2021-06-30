import { NextApiRequest, NextApiResponse } from 'next'
import { headerFormatter, logger } from '../logger'
import _ from 'lodash'

export const logMiddleware = (handler: (req: NextApiRequest, res: NextApiResponse) => void) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const enviroment = process.env.NODE_ENV

    if (enviroment === 'production') {
      return handler(req, res)
    }

    const headers = headerFormatter(req.headers)

    const headerWithoutCookie = _.omit(headers, ['cookie'])

    const body: unknown = req.body

    logger.debug(
      {
        request: {
          headers: headerWithoutCookie,
          url: req.url,
          method: req.method,
        },
        input: {
          body,
        },
      },
      handler.name
    )

    return handler(req, res)
  }
}
