import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'

export default async function API(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const data = await new GqlSdkHelper().getSdk().messages_by_pk({
          id: _.toNumber(req.query.message_id),
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
