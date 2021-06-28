import { MessagesQuery } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Messages_api_get {
  input: null
  output: MessagesQuery
}

export const messages_api_get_Config: ApiConfig = {
  url: '/api/messages/messages_api_get',
  method: 'get',
  responseType: 'json',
}
