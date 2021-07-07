import { z } from 'zod'
import { Insert_List_Items_OneMutation } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'
import { ListItemsValidationSchema } from '../../schemas/ListItemsValidationSchema'

export interface Insert_list_items_one_api_post {
  input: z.infer<typeof ListItemsValidationSchema>
  output: Insert_List_Items_OneMutation
}

export const insert_list_items_one_api_post_Config: ApiConfig = {
  url: '/api/list-items/insert_list_items_one_api_post',
  method: 'post',
  responseType: 'json',
}
