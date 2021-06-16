import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { isAdmin } from '../../../utils/middleware/isAdmin'

export default  isAdmin(async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'DELETE':
      try {
        const userId = Number(req.query.user_id)
        const { delete_users_by_pk } = await new GqlSdkHelper().getSdk().delete_users_by_pk({ id: userId })
        res.json(delete_users_by_pk)
      } catch (e) {
        res.statusCode = 500
        console.error('Request error', e)
        res.json({
          error: e.message,
        })
      }
      break
    default:
      res.setHeader('Allow', ['DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
})
