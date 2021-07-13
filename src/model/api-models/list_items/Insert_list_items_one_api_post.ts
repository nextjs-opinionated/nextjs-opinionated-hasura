import { z } from 'zod'
import { Insert_List_Items_OneMutation } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'
import { List_items_validation_schema } from '../../schemas/List_items_validation_schema'

export interface Insert_list_items_one_api_post {
  input: z.infer<typeof List_items_validation_schema>
  output: Insert_List_Items_OneMutation
}

export const insert_list_items_one_api_post_Config: ApiConfig = {
  url: '/api/list_items/insert_list_items_one_api_post',
  method: 'post',
  responseType: 'json',
}
