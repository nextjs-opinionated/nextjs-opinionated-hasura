import { withSentry } from '@sentry/nextjs'
import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import { List_items_by_pk_api_get } from '../../../model/api-models/list-items/List_Items_by_pk_api_get'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

export default withSentry(
  logMiddleware(async function API(req: NextApiRequest, res: NextApiResponse) {
    // check method
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET'])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    // input data
    const inputData = req.query as List_items_by_pk_api_get['input']

    // process
    const data: List_items_by_pk_api_get['output'] = await new GqlSdkHelper()
      .getSdk()
      .list_items_by_pk({
        id: _.toNumber(inputData.list_item_id),
      })

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
