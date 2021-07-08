import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { List_Items_Update_Column } from '../../../graphql/generated'
import { List_items_validation_schema } from '../../../model/schemas/List_items_validation_schema'
import {
  Insert_list_items_one_api_post,
  insert_list_items_one_api_post_Config,
} from '../../../model/api-models/list-items/Insert_list_items_one_api_post'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'

export default withSentry(
  logMiddleware(async function insert_list_items_one_api_post(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    // check method
    if (req.method !== insert_list_items_one_api_post_Config.method.toUpperCase()) {
      res.setHeader('Allow', [insert_list_items_one_api_post_Config.method.toUpperCase()])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    // input data
    const inputData = req.body as Insert_list_items_one_api_post['input']

    // server validations
    try {
      List_items_validation_schema.parse(inputData)
    } catch (error) {
      if (error?.errors) {
        res.status(HttpStatusCode.BAD_REQUEST_400).json(error.errors)
        return
      }
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR_500).json(error)
      return
    }

    // process
    const data: Insert_list_items_one_api_post['output'] = await new GqlSdkHelper()
      .getSdk()
      .insert_list_items_one({
        list_item: inputData,
        update_columns: Object.values(List_Items_Update_Column),
      })

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
