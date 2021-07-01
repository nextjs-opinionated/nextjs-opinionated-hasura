import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { Messages_Update_Column } from '../../../graphql/generated'
import { MessageValidationSchema } from '../../../model/schemas/MessageValidationSchema'
import _ from 'lodash'
import { Insert_random_message_api_post } from '../../../model/api-models/messages/Insert_random_message_api_post'
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
  logMiddleware(async function insert_random_message_api_post(
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
    } as Insert_random_message_api_post['input']

    // server validations
    try {
      MessageValidationSchema.parse(inputData)
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
    const data: Insert_random_message_api_post['output'] = await new GqlSdkHelper()
      .getSdk()
      .insert_messages_one({
        message: inputData,
        update_columns: Object.values(Messages_Update_Column),
      })

    // get last 6 messages
    const messagesLast6 = await new GqlSdkHelper().getSdk().messages()

    // delete old items
    await new GqlSdkHelper().getSdk().delete_messages({
      message_id: _.last(messagesLast6.messages)?.id,
    })

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
