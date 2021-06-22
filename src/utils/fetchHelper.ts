import queryString from 'query-string'

export default async function fetchHelper<P>(url: string, method = 'get', data: any = {}) {
  const fetchOptions: {
    headers: Headers
    method: string
    body?: string
  } = {
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    method,
  }

  let qs = ''
  if (method === 'post' || method === 'put') {
    fetchOptions.body = JSON.stringify(data)
  } else if (method === 'get') {
    qs = `?${queryString.stringify(data)}`
  }

  const res = await fetch(`${url}${qs}`, fetchOptions)

  if (res.status !== 200) {
    const errorJSON = await res.json()
    return {
      error: {
        statusText: res.statusText,
        message: errorJSON?.error,
      },
      data: null as P,
    }
  }

  const responseData = res.ok ? await res.json() : null
  return { error: null, data: responseData as P }
}
