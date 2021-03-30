import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../utils/GqlSdkHelper'

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

export default async function API(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const resSpace = await fetch(
          `https://www.spaceflightnewsapi.net/api/v2/articles?_limit=1&_start=${Math.floor(
            Math.random() * 8000
          )}`
        )
        const spaceJson = (await resSpace.json()) as SpaceFlightNewsApiType[]

        // add message
        const messageResponseData = await new GqlSdkHelper().getSdk().messagesInsertOne({
          message: {
            body: spaceJson?.[0]?.title,
          },
        })

        // add a tag
        // const messagesTagResponseData = await new GqlSdkHelper().getSdk().messagesTagInsertOne({
        //   message_tag: {
        //     message_id: messageResponseData.insert_messages_one.id,
        //     tag_id: 1,
        //   },
        // })

        // lista all
        const messagesLast8 = await new GqlSdkHelper().getSdk().messagesLast8()

        const messagesDeleted = await new GqlSdkHelper().getSdk().messagesDeleteIdLessThan({
          message_id: _.last(messagesLast8.messages)?.id,
        })

        res.json({ messageResponseData, messagesDeleted })
      } catch (e) {
        res.statusCode = 500
        console.error('Request error', e)
        res.json({
          error: e.message,
        })
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
