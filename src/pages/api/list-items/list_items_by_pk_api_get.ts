import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import {
  List_items_by_pk_api_get,
  list_items_by_pk_api_get_Config,
} from '../../../model/api-models/list-items/List_Items_by_pk_api_get'
import { dataList } from '../../../model/datas/list-items'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

export default withSentry(
  logMiddleware(async function API(req: NextApiRequest, res: NextApiResponse) {
    // check method
    if (req.method !== list_items_by_pk_api_get_Config.method.toUpperCase()) {
      res.setHeader('Allow', [list_items_by_pk_api_get_Config.method.toUpperCase()])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    // input data
    const inputData = req.query as List_items_by_pk_api_get['input']

    // process
    const data: List_items_by_pk_api_get['output'] = dataList.data.list_items.find(
      (item) => item.id === inputData.list_item_id
    )

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
