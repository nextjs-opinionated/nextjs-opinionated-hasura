import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import {
  List_items_by_pk_api_get,
  list_items_by_pk_api_get_Config,
} from '../../../model/api-models/list_items/List_Items_by_pk_api_get'
import { LIST_ITEMS_STUB_DATA } from '../../../model/api-models/list_items/stubs/LIST_ITEMS_STUB_DATA'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

// THIS IS JUST A SIMULATION
// Go check for https://github.com/nextjs-opinionated/nextjs-opinionated-hasura for a real implementation
export default withSentry(
  logMiddleware(async function API(req: NextApiRequest, res: NextApiResponse) {
    // check method
    if (req.method !== list_items_by_pk_api_get_Config.method.toUpperCase()) {
      res.setHeader('Allow', [list_items_by_pk_api_get_Config.method.toUpperCase()])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    // THIS IS JUST A SIMULATION
    // Go check for https://github.com/nextjs-opinionated/nextjs-opinionated-hasura for a real implementation
    // input data
    const inputData = req.query as List_items_by_pk_api_get['input']

    // process
    const list_items_by_pk = LIST_ITEMS_STUB_DATA.data.list_items.find(
      (item) => item.id === inputData.list_item_id
    )
    const data: List_items_by_pk_api_get['output'] = { list_items_by_pk: list_items_by_pk }

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
