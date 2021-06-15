import type { NextApiResponse } from 'next';
import { isAdmin, NextApiRequestWithUser } from '../../../utils/middleware/isAdmin';

export interface HelloResponse {
  message: string
}

const handler = (req: NextApiRequestWithUser, res: NextApiResponse) => {
  const { method, user } = req

  if (method === 'GET') {
    return res.status(200).json({ message: `Olá, ${user.email}! Você é um ${user.role}` })
  }

  res.setHeader('Allow', ['GET'])
  return res.status(405).end(`Method ${method} Not Allowed`)
}


export default isAdmin(handler)