import { IncomingHttpHeaders } from "http"

export const prepObjectKeys = (headers: IncomingHttpHeaders) => {
  const keyValues = {}
  Object.keys(headers).map((key) => {
    const newKey = key.replace(/-/g, '_')
    keyValues[newKey] = headers[key]
  })

  return keyValues
}
