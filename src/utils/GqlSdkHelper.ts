import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../graphql/generated'

// prevent this to be called from client browser
if (typeof window !== 'undefined') {
  throw new Error('only server calls')
}

export default class GqlSdkHelper {
  private _client: GraphQLClient

  private _sdk: ReturnType<typeof getSdk>

  constructor() {
    const gqlEndpoint = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT as string
    const adminSecret = process.env.HASURA_ADMIN_SECRET as string

    this._client = new GraphQLClient(gqlEndpoint, {
      headers: {
        'x-hasura-admin-secret': adminSecret,
      },
    })
    this._sdk = getSdk(this._client)
  }

  public getSdk() {
    return this._sdk
  }
}
