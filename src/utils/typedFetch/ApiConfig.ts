import { HTTP_METHODS } from './HTTP_METHODS'
import { RESPONSE_TYPE } from './RESPONSE_TYPE'

export type ApiConfig = {
  url: string
  method: HTTP_METHODS
  responseType: RESPONSE_TYPE
}
