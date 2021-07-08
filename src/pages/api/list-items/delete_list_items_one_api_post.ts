import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import {
  Delete_list_items_by_pk_api_delete,
  delete_list_items_by_pk_api_delete_Config,
} from '../../../model/api-models/list-items/Delete_list_item_by_pk_api_delete'
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
    if (req.method !== delete_list_items_by_pk_api_delete_Config.method.toUpperCase()) {
      res.setHeader('Allow', [delete_list_items_by_pk_api_delete_Config.method.toUpperCase()])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    // input data
    const inputData = req.body as Delete_list_items_by_pk_api_delete['input']

    const list_items_by_pk = dataList.data.list_items.findIndex((item) => item.id === inputData.id)
    if (list_items_by_pk > 0) {
      dataList.data.list_items.slice(list_items_by_pk)
    }

    fs.writeFile(
      path.join(__dirname, '..', '..', '..', '..', '..', 'src', 'model', 'datas', 'list-items.ts'),
      `export const dataList=${JSON.stringify(dataList)}`,
      'utf8',
      (err) => {
        if (err) {
          throw new Error(err.message)
        }
      }
    )
    // process
    const data: Delete_list_items_by_pk_api_delete['output'] = {
      affected_rows: 1,
    }

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
