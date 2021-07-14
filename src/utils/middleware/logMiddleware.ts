import { NextApiRequest, NextApiResponse } from 'next'
import { headerFormatter, logger } from '../logger'
import omit from 'lodash/omit'

export const logMiddleware = (handler: (req: NextApiRequest, res: NextApiResponse) => void) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const enviroment = process.env.NODE_ENV

    if (enviroment === 'production') {
      return handler(req, res)
    }

    const headers = headerFormatter(req.headers)

    const headerWithoutCookie = omit(headers, ['cookie'])

    const { body } = req

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
