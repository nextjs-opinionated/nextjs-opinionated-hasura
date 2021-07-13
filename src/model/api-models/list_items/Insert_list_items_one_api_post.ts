import { Insert_List_Items_OneMutation, List_Items_Insert_Input } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Insert_list_items_one_api_post {
  input: List_Items_Insert_Input
  output: Insert_List_Items_OneMutation
}

export const insert_list_items_one_api_post_Config: ApiConfig = {
  url: '/api/list_items/insert_list_items_one_api_post',
  method: 'post',
  responseType: 'json',
}
