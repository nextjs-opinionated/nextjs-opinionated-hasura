import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { Users_api_get } from '../../../model/api-models/users/Users_api_get'
import _ from 'lodash'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'

export default withSentry(
  logMiddleware(async function users_api_get(req: NextApiRequest, res: NextApiResponse) {
    // check method
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET'])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    // input data
    const inputData = req.query as Users_api_get['input']

    const limit = _.toNumber(inputData.limit)
    const current_page = _.toNumber(inputData.current_page)
    const offset = current_page * limit - limit

    // process
    const data: Users_api_get['output'] = await new GqlSdkHelper().getSdk().users({ limit, offset })

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
