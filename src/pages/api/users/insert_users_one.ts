import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { isAdmin } from '../../../utils/middleware/isAdmin'
import { UserValidationSchema }  from '../../../model/schemas/UserValidationSchema'

export default  isAdmin(async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'POST':
      try {
        const payload: unknown = req.body
        const userBodyUpdate = UserValidationSchema.parse(payload);
        const { insert_users_one } = await new GqlSdkHelper().getSdk().insert_users_one({ user: userBodyUpdate })
        res.json(insert_users_one)
      } catch (e) {
        res.statusCode = 500
        console.error('Request error', e)
        res.json({
          error: e.message,
        })
      }
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
})
