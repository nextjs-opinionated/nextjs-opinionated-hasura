import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { withSentry } from '@sentry/nextjs'
import fs from 'fs-extra'
import { Generate_crud_api_post } from '../../../model/api-models/code-generator/Generate_crud_api_post'
import { code_gen_replace } from '../../../utils/code_generator/code_gen_replace'

export default withSentry(
  logMiddleware(async function simple_page_api_post(req: NextApiRequest, res: NextApiResponse) {
    const inputData = req.body as Generate_crud_api_post['input']

    const table_name = inputData.table_name.toLowerCase()
    const Table_name = `${table_name[0].toUpperCase()}${table_name.slice(1).toLowerCase()}`
    const table_id = inputData.table_id.toLowerCase()

    // mkdir
    await fs.ensureDir(`src/pages/${table_name}`)

    // src/pages/messages/index.tsx
    await code_gen_replace({
      from_file: 'src/pages/messages/index.tsx',
      to_file: `src/pages/${table_name}/index.tsx`,
      replace_from: 'Messages',
      replace_to: Table_name,
    })
    await code_gen_replace({
      from_file: `src/pages/${table_name}/index.tsx`,
      to_file: `src/pages/${table_name}/index.tsx`,
      replace_from: 'messages',
      replace_to: table_name,
    })

    // src/pages/messages/[message_id].tsx
    await code_gen_replace({
      from_file: 'src/pages/messages/[message_id].tsx',
      to_file: `src/pages/${table_name}/[${table_id}].tsx`,
      replace_from: 'Messages',
      replace_to: Table_name,
    })
    await code_gen_replace({
      from_file: `src/pages/${table_name}/[${table_id}].tsx`,
      to_file: `src/pages/${table_name}/[${table_id}].tsx`,
      replace_from: 'messages',
      replace_to: table_name,
    })

    // src/model/api-models/messages/Insert_messages_one_api_post.ts
    await code_gen_replace({
      from_file: 'src/model/api-models/messages/Insert_messages_one_api_post.ts',
      to_file: `src/model/api-models/${table_name}/Insert_${table_name}_one_api_post.ts`,
      replace_from: 'Messages',
      replace_to: Table_name,
    })
    await code_gen_replace({
      from_file: `src/model/api-models/${table_name}/Insert_${table_name}_one_api_post.ts`,
      to_file: `src/model/api-models/${table_name}/Insert_${table_name}_one_api_post.ts`,
      replace_from: 'messages',
      replace_to: table_name,
    })

    // src/model/api-models/messages/Messages_api_get.ts
    await code_gen_replace({
      from_file: 'src/model/api-models/messages/Messages_api_get.ts',
      to_file: `src/model/api-models/${table_name}/${Table_name}_api_get.ts`,
      replace_from: 'Messages',
      replace_to: Table_name,
    })
    await code_gen_replace({
      from_file: `src/model/api-models/${table_name}/${Table_name}_api_get.ts`,
      to_file: `src/model/api-models/${table_name}/${Table_name}_api_get.ts`,
      replace_from: 'messages',
      replace_to: table_name,
    })

    // src/model/api-models/messages/Messages_by_pk_api_get.ts
    await code_gen_replace({
      from_file: 'src/model/api-models/messages/Messages_by_pk_api_get.ts',
      to_file: `src/model/api-models/${table_name}/${Table_name}_by_pk_api_get.ts`,
      replace_from: 'Messages',
      replace_to: Table_name,
    })
    await code_gen_replace({
      from_file: `src/model/api-models/${table_name}/${Table_name}_by_pk_api_get.ts`,
      to_file: `src/model/api-models/${table_name}/${Table_name}_by_pk_api_get.ts`,
      replace_from: 'messages',
      replace_to: table_name,
    })

    // src/model/schemas/MessagesValidationSchema.ts
    await code_gen_replace({
      from_file: 'src/model/schemas/MessagesValidationSchema.ts',
      to_file: `src/model/schemas/${Table_name}ValidationSchema.ts`,
      replace_from: 'Messages',
      replace_to: Table_name,
    })

    // output
    const output: Generate_crud_api_post['output'] = {
      saved: true,
      vars: {
        table_name,
        Table_name,
        table_id,
      },
    }
    res.status(HttpStatusCode.OK_200).json(output)
  })
)
