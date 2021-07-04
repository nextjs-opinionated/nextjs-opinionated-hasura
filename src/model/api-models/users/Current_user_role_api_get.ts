import { Roles_Enum } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Current_user_role_api_get {
  input: null
  output: Roles_Enum
}

export const current_user_role_api_get_Config: ApiConfig = {
  url: '/api/users/current_user_role_api_get',
  method: 'get',
  responseType: 'json',
}
