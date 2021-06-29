import { NextApiRequest, NextApiResponse } from 'next'
import { FormExampleValidationSchema } from '../../../model/schemas/FormExampleValidationSchema'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { Fetch_formExample_api_post } from '../../../model/api-models/form-example/Fetch_formExample_api_post'
import { logMiddleware } from '../../../utils/middleware/log'
import { withSentry } from '@sentry/nextjs'
import { logger } from '../../../utils/logger'

export default withSentry(
  logMiddleware(function fetch_formExample_api_post(req: NextApiRequest, res: NextApiResponse) {
    const log = logger.child({ file: 'pages/api/form-example/formExample_api_post.ts' })
    // input data
    const inputData = req.body as Fetch_formExample_api_post['input']

    try {
      // server validation (VALIDATIONS)
      FormExampleValidationSchema.parse(req.body)
    } catch (error) {
      log.debug({ msg: 'validation:', error })
      if (error?.errors) {
        res.status(HttpStatusCode.BAD_REQUEST_400).json({
          message: error.message,
          stack: error.stack,
          validationError: error?.errors,
        })
        return
      }
    }

    // process
    // output data
    const output: Fetch_formExample_api_post['output'] = {
      ...inputData,
      server_time: new Date().toLocaleTimeString(),
    }
    res.status(HttpStatusCode.OK_200).json(output)
  })
)
