import { Messages_By_PkQuery } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Messages_by_pk_api_get {
  input: {
    message_id: string | string[]
  }
  output: Messages_By_PkQuery
}

export const messages_by_pk_api_get_Config: ApiConfig = {
  url: '/api/messages/messages_by_pk_api_get',
  method: 'get',
  responseType: 'json',
}
