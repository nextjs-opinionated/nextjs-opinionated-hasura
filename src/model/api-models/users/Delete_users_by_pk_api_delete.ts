import { Delete_Users_By_PkMutation } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Delete_users_by_pk_api_delete {
  input: { id: string }
  output: Delete_Users_By_PkMutation
}

export const delete_users_by_pk_api_delete_Config: ApiConfig = {
  url: '/api/users/delete_users_by_pk_api_delete',
  method: 'delete',
  responseType: 'json',
}
