import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { List_items_validation_schema } from '../../../model/schemas/List_items_validation_schema'
import {
  Insert_list_items_one_api_post,
  insert_list_items_one_api_post_Config,
} from '../../../model/api-models/list-items/Insert_list_items_one_api_post'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { dataList } from '../../../model/datas/list-items'
import fs from 'fs'
import path from 'path'

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
      //   List_items_validation_schema.parse(inputData)
    } catch (error) {
      if (error?.errors) {
        res.status(HttpStatusCode.BAD_REQUEST_400).json(error.errors)
        return
      }
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR_500).json(error)
      return
    }

    const list_items_by_pk = dataList.data.list_items.findIndex((item) => item.id === inputData.id)
    if (list_items_by_pk < 0) {
      dataList.data.list_items.push(inputData)
      dataList.data.list_items_aggregate.aggregate.count =
        dataList.data.list_items_aggregate.aggregate.count + 1
    } else {
      dataList.data.list_items[list_items_by_pk] = {
        ...inputData,
      }
    }

    fs.writeFile(
      path.join(__dirname, '..', '..', '..', '..', '..', 'src', 'model', 'datas', 'list-items.ts'),
      `export const dataList=${JSON.stringify(dataList)}`,
      'utf8',
      (err) => {
        if (err) {
          throw new Error(err.message)
        } else {
          console.log('success')
        }
      }
    )
    // process
    const data: Insert_list_items_one_api_post['output'] = {
      ...inputData,
    }

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
