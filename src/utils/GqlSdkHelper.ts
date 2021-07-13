import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../graphql/generated'

if (typeof window !== 'undefined') {
  // prevent this to be called from client browser
  throw new Error('WARNING: Only server calls are allowed!')
}

export default class GqlSdkHelper {
  private client: GraphQLClient

  private sdk: ReturnType<typeof getSdk>

  constructor() {
    const gqlEndpoint = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT as string
    const adminSecret = process.env.HASURA_ADMIN_SECRET as string

    this.client = new GraphQLClient(gqlEndpoint, {
      headers: {
        'x-hasura-admin-secret': adminSecret,
      },
    })
    this.sdk = getSdk(this.client)
  }

  public getSdk() {
    return this.sdk
  }
}
