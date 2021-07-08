import { NextApiRequest, NextApiResponse } from 'next'
import {
  list_items_api_get_Config,
  List_Item_api_get,
} from '../../../model/api-models/list-items/List_Items_api_get'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { dataList } from '../../../model/datas/list-items'
import _ from 'lodash'

export default withSentry(
  logMiddleware(async function API(req: NextApiRequest, res: NextApiResponse) {
    // check method
    if (req.method !== list_items_api_get_Config.method.toUpperCase()) {
      res.setHeader('Allow', [list_items_api_get_Config.method.toUpperCase()])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET'])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    const inputData = req.query as List_Item_api_get['input']

    const limit = _.toNumber(inputData.limit)
    const current_page = _.toNumber(inputData.current_page)
    const offset = current_page * limit - limit

    const listItems: List_Item_api_get['output']['list_items'] = []
    for (let x = offset; x < offset + limit; x++) {
      if (dataList.data.list_items[x]) {
        listItems.push(dataList.data.list_items[x])
      }
    }

    // process

    const data: List_Item_api_get['output'] = {
      list_items: listItems,
      list_items_aggregate: dataList.data.list_items_aggregate,
    }

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
