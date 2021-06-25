import { NextApiRequest, NextApiResponse } from 'next'
import { Messages_Update_Column } from '../../../graphql/generated'
import { MessageValidationSchema } from '../../../model/schemas/MessageValidationSchema'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

export default async function API(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'POST':
      try {
        try {
          // server validations
          MessageValidationSchema.parse(req.body)
        } catch (error) {
          console.log('--  error: ', error)
          if (error?.errors) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR_500).json(error.errors)
            return
          }
          res.status(HttpStatusCode.INTERNAL_SERVER_ERROR_500).json(error)
          return
        }

        const result = await new GqlSdkHelper().getSdk().insert_messages_one({
          message: {
            id: req.body.message_id,
            title: req.body.title,
            body: req.body.body || '',
            url: req.body.url,
            imageUrl: req.body.imageUrl,
            publishedAt: req.body.publishedAt,
          },
          update_columns: Object.values(Messages_Update_Column),
        })

        res.json(result)
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
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${method} Not Allowed`)
  }
}
