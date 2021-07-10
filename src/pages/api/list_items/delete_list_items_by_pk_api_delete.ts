import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import {
  Delete_list_items_by_pk_api_delete,
  delete_list_items_by_pk_api_delete_Config,
} from '../../../model/api-models/list_items/Delete_list_item_by_pk_api_delete'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'

// THIS IS JUST A SIMULATION
// Go check for https://github.com/nextjs-opinionated/nextjs-opinionated-hasura for a real implementation
export default withSentry(
  logMiddleware(async function insert_list_items_one_api_post(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    // check method
    if (req.method !== delete_list_items_by_pk_api_delete_Config.method.toUpperCase()) {
      res.setHeader('Allow', [delete_list_items_by_pk_api_delete_Config.method.toUpperCase()])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    // THIS IS JUST A SIMULATION
    // Go check for https://github.com/nextjs-opinionated/nextjs-opinionated-hasura for a real implementation
    res.status(HttpStatusCode.OK_200).json({
      affected_rows: 1,
    } as Delete_list_items_by_pk_api_delete['output'])
  })
)
