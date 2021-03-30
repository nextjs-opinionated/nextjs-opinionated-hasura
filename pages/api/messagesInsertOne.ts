import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../src/utils/GqlSdkHelper'

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

        const data = await new GqlSdkHelper().getSdk().messagesInsertOne({
          message: {
            body: spaceJson?.[0]?.title,
          },
        })
        res.json(data)
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
