import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import {
  Delete_list_items_by_pk_api_delete,
  delete_list_items_by_pk_api_delete_Config,
} from '../../../model/api-models/list_items/Delete_list_item_by_pk_api_delete'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'

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

    // input data
    const inputData = req.query as Delete_list_items_by_pk_api_delete['input']

    const data: Delete_list_items_by_pk_api_delete['output'] = await new GqlSdkHelper()
      .getSdk()
      .delete_list_items_by_pk({
        id: inputData.id,
      })

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
