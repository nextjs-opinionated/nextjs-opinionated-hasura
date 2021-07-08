import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { withSentry } from '@sentry/nextjs'
import fs from 'fs-extra'
import { Generate_component_api_post } from '../../../model/api-models/code-generator/Generate_component_api_post'
import { code_gen_replace } from '../../../utils/code_generator/code_gen_replace'

export default withSentry(
  logMiddleware(async function simple_page_api_post(req: NextApiRequest, res: NextApiResponse) {
    const inputData = req.body as Generate_component_api_post['input']

    // mkdir
    await fs.ensureDir(`src/components/${inputData.name}`)

    const defaultReplaces = [
      {
        from: 'Pagination',
        to: inputData.name,
      },
    ]

    // replace from Pagination.tsx
    await code_gen_replace({
      from_file: 'src/components/Pagination/Pagination.tsx',
      to_file: `src/components/${inputData.name}/${inputData.name}.tsx`,
      replaces: defaultReplaces,
    })

    // replace from Pagination.stories.tsx
    await code_gen_replace({
      from_file: 'src/components/Pagination/Pagination.stories.tsx',
      to_file: `src/components/${inputData.name}/${inputData.name}.stories.tsx`,
      replaces: defaultReplaces,
    })

    // replace from Pagination.test.tsx
    await code_gen_replace({
      from_file: 'src/components/Pagination/Pagination.test.tsx',
      to_file: `src/components/${inputData.name}/${inputData.name}.test.tsx`,
      replaces: defaultReplaces,
    })

    // output
    const output: Generate_component_api_post['output'] = {
      saved: true,
    }
    res.status(HttpStatusCode.OK_200).json(output)
  })
)
