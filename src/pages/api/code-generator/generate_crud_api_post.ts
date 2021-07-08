import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { withSentry } from '@sentry/nextjs'
import { Generate_crud_api_post } from '../../../model/api-models/code-generator/Generate_crud_api_post'
import { code_gen_replace } from '../../../utils/code_generator/code_gen_replace'

export default withSentry(
  logMiddleware(async function simple_page_api_post(req: NextApiRequest, res: NextApiResponse) {
    const inputData = req.body as Generate_crud_api_post['input']

    const table_name = inputData.table_name.toLowerCase()
    const Table_name = `${table_name[0].toUpperCase()}${table_name.slice(1).toLowerCase()}`
    const table_id = inputData.table_id.toLowerCase()

    const defaultReplaces = [
      {
        from: 'Messages',
        to: Table_name,
      },
      {
        from: 'messages',
        to: table_name,
      },
    ]

    // pages
    await code_gen_replace({
      from_file: 'src/pages/messages/index.tsx',
      to_file: `src/pages/${table_name}/index.tsx`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/pages/messages/[message_id].tsx',
      to_file: `src/pages/${table_name}/[${table_id}].tsx`,
      replaces: defaultReplaces,
    })

    // api-models
    await code_gen_replace({
      from_file: 'src/model/api-models/messages/Insert_messages_one_api_post.ts',
      to_file: `src/model/api-models/${table_name}/Insert_${table_name}_one_api_post.ts`,
      replaces: defaultReplaces,
    })

    await code_gen_replace({
      from_file: 'src/model/api-models/messages/Messages_api_get.ts',
      to_file: `src/model/api-models/${table_name}/${Table_name}_api_get.ts`,
      replaces: defaultReplaces,
    })

    await code_gen_replace({
      from_file: 'src/model/api-models/messages/Messages_by_pk_api_get.ts',
      to_file: `src/model/api-models/${table_name}/${Table_name}_by_pk_api_get.ts`,
      replaces: defaultReplaces,
    })

    // api
    await code_gen_replace({
      from_file: 'src/pages/api/messages/insert_messages_one_api_post.ts',
      to_file: `src/pages/api/${table_name}/insert_${table_name}_one_api_post.ts`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/pages/api/messages/messages_api_get.ts',
      to_file: `src/pages/api/${table_name}/${table_name}_api_get.ts`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/pages/api/messages/messages_by_pk_api_get.ts    ',
      to_file: `src/pages/api/${table_name}/${table_name}_by_pk_api_get.ts    `,
      replaces: defaultReplaces,
    })

    // ValidationSchema
    await code_gen_replace({
      from_file: 'src/model/schemas/MessagesValidationSchema.ts',
      to_file: `src/model/schemas/${Table_name}ValidationSchema.ts`,
      replaces: defaultReplaces,
    })

    // gqls
    await code_gen_replace({
      from_file: 'src/graphql/gqls/messages/delete_messages.gql',
      to_file: `src/graphql/gqls/${table_name}/delete_${table_name}.gql`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/graphql/gqls/messages/insert_messages_one.gql',
      to_file: `src/graphql/gqls/${table_name}/insert_${table_name}_one.gql`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/graphql/gqls/messages/messages_by_pk.gql',
      to_file: `src/graphql/gqls/${table_name}/${table_name}_by_pk.gql`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/graphql/gqls/messages/messages.gql',
      to_file: `src/graphql/gqls/${table_name}/${table_name}.gql`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/graphql/gqls/messages/messagesFragment.gql',
      to_file: `src/graphql/gqls/${table_name}/${table_name}Fragment.gql`,
      replaces: defaultReplaces,
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
