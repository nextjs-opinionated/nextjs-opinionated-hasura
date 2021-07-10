import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { List_items_validation_schema } from '../../../model/schemas/List_items_validation_schema'
import {
  Insert_list_items_one_api_post,
  insert_list_items_one_api_post_Config,
} from '../../../model/api-models/list_items/Insert_list_items_one_api_post'
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
      console.error(error)
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR_500).json(error)
      return
    }

    // THIS IS JUST A SIMULATION
    // Go check for https://github.com/nextjs-opinionated/nextjs-opinionated-hasura for a real implementation
    res.status(HttpStatusCode.OK_200).json({
      insert_list_items_one: inputData,
    } as Insert_list_items_one_api_post['output'])
  })
)
