import { NextApiRequest, NextApiResponse } from 'next'
import toNumber from 'lodash/toNumber'
import { Fetch_tester_api_get } from '../../../model/api-models/typed-fetch-examples/Fetch_tester_api_get'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import Sentry, { withSentry } from '@sentry/nextjs'

export default withSentry(async function fetch_tester_api_get(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // input data
  const inputData = req.query as Fetch_tester_api_get['input']

  // force_error
  if (inputData.force_error === 'true') {
    Sentry.captureException(new Error('test'))
    throw new Error('SOME SERVER ERROR ON GET')
  }

  // process
  const result = 10 / toNumber(inputData.divide_by)
  const finalMessage = `Your string <${inputData.some_string}> has ${inputData.some_string.length} letters`

  await new Promise(function (resolve) {
    setTimeout(resolve, 1000)
  })

  // output data
  const output: Fetch_tester_api_get['output'] = {
    message: finalMessage,
    division_result: result,
  }
  res.status(HttpStatusCode.OK_200).json(output)
})
