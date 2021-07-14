import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { withSentry } from '@sentry/nextjs'
import { Generate_crud_api_post } from '../../../model/api-models/code-generator/Generate_crud_api_post'
import { code_gen_replace } from '../../../utils/code_generator/code_gen_replace'

export default withSentry(
  logMiddleware(async function simple_page_api_post(req: NextApiRequest, res: NextApiResponse) {
    const inputData = req.body as Generate_crud_api_post['input']

    const list_items = inputData.table_name.toLowerCase()
    const List_Items = list_items
      .split('_')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('_')

    // remove 's' from plural words with last letter as 's'
    let List_Item = List_Items
    if (List_Item.substring(List_Item.length - 1) === 's') {
      List_Item = List_Item.substring(0, List_Item.length - 1)
    }
    const list_item = List_Item.toLowerCase()

    const List_items = `${list_items[0].toUpperCase()}${list_items.slice(1).toLowerCase()}`
    const list_item_id = inputData.table_id.toLowerCase()

    const defaultReplaces = [
      {
        from: 'List_items',
        to: List_items,
      },
      {
        from: 'List_Items',
        to: List_Items,
      },
      {
        from: 'List_Item',
        to: List_Item,
      },
      {
        from: 'list_item',
        to: list_item,
      },
      {
        from: 'list_items',
        to: list_items,
      },
    ]

    // pages
    await code_gen_replace({
      from_file: 'src/pages/list_items/index.tsx',
      to_file: `src/pages/${list_items}/index.tsx`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/pages/list_items/[list_item_id].tsx',
      to_file: `src/pages/${list_items}/[${list_item_id}].tsx`,
      replaces: [
        ...defaultReplaces,
        {
          from: 'list_item_id',
          to: list_item_id,
        },
      ],
    })

    // components
    await code_gen_replace({
      from_file: 'src/components/List_items_Form/List_items_Form.stories.tsx',
      to_file: `src/components/${List_items}_Form/${List_items}_Form.stories.tsx`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/components/List_items_Form/List_items_Form.tsx',
      to_file: `src/components/${List_items}_Form/${List_items}_Form.tsx`,
      replaces: defaultReplaces,
    })

    // api-models
    await code_gen_replace({
      from_file: 'src/model/api-models/list_items/Insert_list_items_one_api_post.ts',
      to_file: `src/model/api-models/${list_items}/Insert_${list_items}_one_api_post.ts`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/model/api-models/list_items/List_items_api_get.ts',
      to_file: `src/model/api-models/${list_items}/${List_items}_api_get.ts`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/model/api-models/list_items/List_items_by_pk_api_get.ts',
      to_file: `src/model/api-models/${list_items}/${List_items}_by_pk_api_get.ts`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/model/api-models/list_items/Delete_list_items_by_pk_api_delete.ts',
      to_file: `src/model/api-models/${list_items}/Delete_${list_items}_by_pk_api_delete.ts`,
      replaces: defaultReplaces,
    })

    // api
    await code_gen_replace({
      from_file: 'src/pages/api/list_items/insert_list_items_one_api_post.ts',
      to_file: `src/pages/api/${list_items}/insert_${list_items}_one_api_post.ts`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/pages/api/list_items/list_items_api_get.ts',
      to_file: `src/pages/api/${list_items}/${list_items}_api_get.ts`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/pages/api/list_items/list_items_by_pk_api_get.ts',
      to_file: `src/pages/api/${list_items}/${list_items}_by_pk_api_get.ts`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/pages/api/list_items/delete_list_items_by_pk_api_delete.ts',
      to_file: `src/pages/api/${list_items}/delete_${list_items}_by_pk_api_delete.ts`,
      replaces: defaultReplaces,
    })

    // validation_schema
    await code_gen_replace({
      from_file: 'src/model/schemas/List_items_validation_schema.ts',
      to_file: `src/model/schemas/${List_items}_validation_schema.ts`,
      replaces: defaultReplaces,
    })

    // gqls
    await code_gen_replace({
      from_file: 'src/graphql/gqls/list_items/delete_list_items_by_pk.gql',
      to_file: `src/graphql/gqls/${list_items}/delete_${list_items}_by_pk.gql`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/graphql/gqls/list_items/insert_list_items_one.gql',
      to_file: `src/graphql/gqls/${list_items}/insert_${list_items}_one.gql`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/graphql/gqls/list_items/list_items_by_pk.gql',
      to_file: `src/graphql/gqls/${list_items}/${list_items}_by_pk.gql`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/graphql/gqls/list_items/list_items.gql',
      to_file: `src/graphql/gqls/${list_items}/${list_items}.gql`,
      replaces: defaultReplaces,
    })
    await code_gen_replace({
      from_file: 'src/graphql/gqls/list_items/list_items_fragment.gql',
      to_file: `src/graphql/gqls/${list_items}/${list_items}_fragment.gql`,
      replaces: defaultReplaces,
    })

    // output
    const output: Generate_crud_api_post['output'] = {
      saved: true,
      vars: {
        table_name: list_items,
        Table_name: List_items,
        table_id: list_item_id,
      },
    }
    res.status(HttpStatusCode.OK_200).json(output)
  })
)
