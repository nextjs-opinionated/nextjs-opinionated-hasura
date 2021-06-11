import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

export interface NextApiRequestWithUser extends NextApiRequest {
  user: {
    name: string
    role?: unknown
    image: string
    email: string
  }
}

// HOC
export const isAdmin = (handler: (req: NextApiRequestWithUser, res: NextApiResponse) => void) => {
  return async (req: NextApiRequestWithUser, res: NextApiResponse): Promise<void> => {
    const session = await getSession({ req })

    if (!session?.user) {
      console.log(session)
      return res.status(401).json({ message: 'you are not authenticated' })
    }

    if (session.user.role === 'Admin') {
      req.user = session.user
      return handler(req, res)
    } else {
      return res.status(401).json({ message: 'unauthorized' })
    }
  }
}
