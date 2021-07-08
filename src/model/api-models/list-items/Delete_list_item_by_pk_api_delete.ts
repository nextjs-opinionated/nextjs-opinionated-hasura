import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Delete_list_items_by_pk_api_delete {
  input: { id: string }
  output: {
    affected_rows: 'Int'
  }
}

export const delete_list_items_by_pk_api_delete_Config: ApiConfig = {
  url: '/api/list-items/delete_list_items_by_pk_api_delete',
  method: 'delete',
  responseType: 'json',
}
