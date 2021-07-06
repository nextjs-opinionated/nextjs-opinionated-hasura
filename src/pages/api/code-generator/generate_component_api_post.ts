import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { withSentry } from '@sentry/nextjs'
import fs from 'fs-extra'
import { Generate_component_api_post } from '../../../model/api-models/code-generator/Generate_component_api_post'

export default withSentry(
  logMiddleware(async function simple_page_api_post(req: NextApiRequest, res: NextApiResponse) {
    const inputData = req.body as Generate_component_api_post['input']

    // mkdir
    await fs.ensureDir(`src/components/${inputData.name}`)

    const ENCODING = {
      encoding: 'utf8',
    }

    // replace from Pagination.tsx
    await fs.writeFile(
      `src/components/${inputData.name}/${inputData.name}.tsx`,
      (await fs.readFile('src/components/Pagination/Pagination.tsx', ENCODING)).replace(
        /Pagination/gm,
        inputData.name
      ),
      ENCODING
    )

    // replace from Pagination.stories.tsx
    await fs.writeFile(
      `src/components/${inputData.name}/${inputData.name}.stories.tsx`,
      (await fs.readFile('src/components/Pagination/Pagination.stories.tsx', ENCODING)).replace(
        /Pagination/gm,
        inputData.name
      ),
      ENCODING
    )

    // replace from Pagination.test.tsx
    await fs.writeFile(
      `src/components/${inputData.name}/${inputData.name}.test.tsx`,
      (await fs.readFile('src/components/Pagination/Pagination.test.tsx', ENCODING)).replace(
        /Pagination/gm,
        inputData.name
      ),
      ENCODING
    )

    // output
    const output: Generate_component_api_post['output'] = {
      saved: true,
    }
    res.status(HttpStatusCode.OK_200).json(output)
  })
)
