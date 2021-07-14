import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import {
  List_items_by_pk_api_get,
  list_items_by_pk_api_get_Config,
} from '../../../model/api-models/list_items/List_items_by_pk_api_get'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

export default withSentry(
  logMiddleware(async function list_items_by_pk_api_get(req: NextApiRequest, res: NextApiResponse) {
    // check method
    if (req.method !== list_items_by_pk_api_get_Config.method.toUpperCase()) {
      res.setHeader('Allow', [list_items_by_pk_api_get_Config.method.toUpperCase()])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
      return
    }

    // input data
    const inputData = req.query as List_items_by_pk_api_get['input']

    // process
    const data: List_items_by_pk_api_get['output'] = await new GqlSdkHelper()
      .getSdk()
      .list_items_by_pk({
        id: String(inputData.id),
      })

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
