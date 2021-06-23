import queryString from 'query-string'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import _ from 'lodash'

export type TypedFetchResult<P> = {
  status: number
  statusText: string
  error?: any
  data?: P
}

export default async function typedFetch<INPUT_TYPE, OUTPUT_TYPE>({
  url,
  method = 'get',
  responseType = 'json',
  headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
  data,
}: {
  url: string
  method?: 'get' | 'post' | 'put' | 'delete'
  data?: INPUT_TYPE
  headers?: Headers
  responseType?: 'json' | 'text'
}): Promise<TypedFetchResult<OUTPUT_TYPE>> {
  const fetchOptions: {
    headers: Headers
    method: string
    body?: string
  } = {
    headers,
    method,
  }

  let qs = ''
  if (method === 'post' || method === 'put') {
    // TODO: Add a way to send normal post, without json
    fetchOptions.body = JSON.stringify(data)
  } else if (method === 'get') {
    qs = `?${queryString.stringify(data)}`
  }

  const res = await fetch(`${url}${qs}`, fetchOptions)

  // NOT OK!
  if (!res.ok) {
    let errorJSON = {}
    try {
      // try get JSON
      errorJSON = await res.json()
    } catch (error) {
      console.error('> fetchHelper error: ', error)
    }

    return {
      status: res.status,
      statusText: res.statusText,
      error: errorJSON,
      data: null,
    }
  }

  // OK!
  if (responseType === 'json') {
    let resultJSON: OUTPUT_TYPE
    try {
      // try get JSON
      resultJSON = await res.json()
    } catch (error) {
      console.error('>> await res.json() error: ', error)
    }

    // (VALIDATIONS)
    if (_.isArray(resultJSON)) {
      const myAlert = withReactContent(Swal)
      await myAlert.fire({
        title: 'server validation error',
        html: JSON.stringify(resultJSON, null, 2),
        confirmButtonText: 'close',
      })
    }
    /* else {
      console.error('>> VALIDATIONS error: ', resultJSON)
    } */

    return {
      status: res.status,
      statusText: res.statusText,
      error: null,
      data: resultJSON,
    }
  }
}
