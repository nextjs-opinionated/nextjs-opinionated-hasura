import { getSession } from 'next-auth/client'
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  console.log(session)

  if(session.user.role === "Admin") {
    return res.send({ content: 'Voce é admin.' })
  }

  if (session) {
    res.send({ content: 'This is protected content. You can access this content because you are signed in.' })
  } else {
    res.send({ error: 'You must be sign in to view the protected content on this page.' })
  }
}