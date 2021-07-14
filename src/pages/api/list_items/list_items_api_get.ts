import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import {
  list_items_api_get_Config,
  List_Items_api_get,
} from '../../../model/api-models/list_items/List_items_api_get'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import _ from 'lodash'

export default withSentry(
  logMiddleware(async function list_items_api_get(req: NextApiRequest, res: NextApiResponse) {
    // check method
    if (req.method !== list_items_api_get_Config.method.toUpperCase()) {
      res.setHeader('Allow', [list_items_api_get_Config.method.toUpperCase()])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
      return
    }

    const inputData = req.query as List_Items_api_get['input']

    const limit = _.toNumber(inputData.limit)
    const current_page = _.toNumber(inputData.current_page)
    const offset = current_page * limit - limit
    // process
    const data: List_Items_api_get['output'] = await new GqlSdkHelper()
      .getSdk()
      .list_items({ limit, offset })

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
