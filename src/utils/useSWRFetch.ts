import useSWR from 'swr'

export const fetcher = <T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> =>
  fetch(input, init).then((res) => res.json())

export default function useSWRFetch<T>(url: string) {
  const { data, error, isValidating } = useSWR<T>(url, fetcher)

  const serverError = error

  return {
    data,
    loading: !serverError && !data,
    isValidating,
    error: serverError,
  }
}
