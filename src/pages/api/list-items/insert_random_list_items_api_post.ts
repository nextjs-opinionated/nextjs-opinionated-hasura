import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { List_Items_Update_Column } from '../../../graphql/generated'
import { ListItemsValidationSchema } from '../../../model/schemas/ListItemsValidationSchema'
import _ from 'lodash'
import { Insert_random_list_items_api_post } from '../../../model/api-models/list-items/Insert_random_list_items_api_post'
import dayjs from 'dayjs'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'

interface SpaceFlightNewsApiType {
  id: string
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: Date
  updatedAt: Date
  featured: boolean
  launches: any[]
  events: any[]
}

export default withSentry(
  logMiddleware(async function Insert_random_list_items_api_post(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    // check method
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST'])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    // input data
    const resSpace = await fetch(
      `https://www.spaceflightnewsapi.net/api/v2/articles?_limit=1&_start=${Math.floor(
        Math.random() * 8000
      )}`
    )
    const spaceJson = (await resSpace.json()) as SpaceFlightNewsApiType[]

    const inputData = {
      title: spaceJson?.[0]?.title,
      body: spaceJson?.[0]?.summary,
      url: spaceJson?.[0]?.url,
      imageUrl: spaceJson?.[0]?.imageUrl,
      publishedAt: dayjs(spaceJson?.[0]?.publishedAt).toISOString(),
    } as Insert_random_list_items_api_post['input']

    // server validations
    try {
      ListItemsValidationSchema.parse(inputData)
    } catch (error) {
      if (error?.errors) {
        res.status(HttpStatusCode.BAD_REQUEST_400).json(error.errors)
        return
      }
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR_500).json(error)
      return
    }

    // process
    // insert new item
    const data: Insert_random_list_items_api_post['output'] = await new GqlSdkHelper()
      .getSdk()
      .insert_list_items_one({
        list_item: inputData,
        update_columns: Object.values(List_Items_Update_Column),
      })

    // get last 6 messages
    const listItemsLast6 = await new GqlSdkHelper().getSdk().list_items()

    // delete old items
    await new GqlSdkHelper().getSdk().delete_list_item_by_pk({
      list_item_id: _.toNumber(_.last(listItemsLast6.list_items)?.id),
    })

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
