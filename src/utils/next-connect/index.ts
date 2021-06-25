import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from "next";

import { logMiddleware2 } from '../middleware/log';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(logMiddleware2)

export default handler