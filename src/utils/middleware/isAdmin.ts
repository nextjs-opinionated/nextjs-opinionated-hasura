import { NextApiRequest, NextApiResponse } from 'next'
import { User } from 'next-auth'
import { getSession } from 'next-auth/client'
import { Roles_Enum } from '../../graphql/generated'
import { HttpStatusCode } from '../typedFetch/HttpStatusCode'

export interface NextApiRequestWithUser extends NextApiRequest {
  user: User
}

// HOC
export const isAdmin = (handler: (req: NextApiRequestWithUser, res: NextApiResponse) => void) => {
  return async (req: NextApiRequestWithUser, res: NextApiResponse): Promise<void> => {
    const session = await getSession({ req })

    if (!session?.user) {
      console.log(session)
      return res
        .status(HttpStatusCode.UNAUTHORIZED_401)
        .json({ message: 'you are not authenticated' })
    }

    if (session.user.role === Roles_Enum.Admin) {
      req.user = session.user
      return handler(req, res)
    } else {
      return res
        .status(HttpStatusCode.FORBIDDEN_403)
        .json({ message: 'you do not have access to this resource' })
    }
  }
}
