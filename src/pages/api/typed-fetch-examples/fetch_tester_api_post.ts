import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { Fetch_tester_api_post } from '../../../model/api-models/typed-fetch-examples/Fetch_tester_api_post'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

export default withSentry(async function fetch_tester_api_post(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // input data
  const inputData = req.body as Fetch_tester_api_post['input']

  // force_error
  if (inputData.force_error === true) {
    throw new Error('SOME SERVER ERROR ON POST')
  }

  // process
  const result = 10 / inputData.divide_by
  const finalMessage = `Your string <${inputData.some_string}> has ${inputData.some_string.length} letters`

  await new Promise(function (resolve) {
    setTimeout(resolve, 1000)
  })

  // output data
  const output: Fetch_tester_api_post['output'] = {
    message: finalMessage,
    division_result: result,
  }
  res.status(HttpStatusCode.OK_200).json(output)
})
