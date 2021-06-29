import { NextApiRequest, NextApiResponse } from "next"
import {  NextHandler  } from 'next-connect'
import { headerFormatter, logger } from "../logger"
import _ from "lodash"

export const logMiddleware = (handler: (req: NextApiRequest, res: NextApiResponse) =>  void) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {

    const enviroment = process.env.NODE_ENV

    if(enviroment === "production") {
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
          body
        },
      },
      handler.name
    )

    return handler(req, res)
  }
}


export const logMiddleware2 = (req: NextApiRequest, __: NextApiResponse, next: NextHandler) => {
  const enviroment = process.env.NODE_ENV

  if (enviroment === 'production') {
    return next()
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
    req.url.split("/").pop()
  )

  return next()
}
