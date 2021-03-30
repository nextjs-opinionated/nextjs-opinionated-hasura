import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../src/utils/GqlSdkHelper'

export default async function API(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const data = await new GqlSdkHelper().getSdk().messagesLast8()
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
