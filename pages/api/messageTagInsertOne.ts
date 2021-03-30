import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../src/utils/GqlSdkHelper'

export default async function API(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        // https://www.spaceflightnewsapi.net/api/v2/articles?_limit=1&_start=222

        const data = await new GqlSdkHelper().getSdk().messagesAll()
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
