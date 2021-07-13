import React from 'react'
import renderer from 'react-test-renderer'
import { Layout } from './Layout'
import { UserProvider } from '@auth0/nextjs-auth0'

test('renders correctly', () => {
  jest.mock('@auth0/nextjs-auth0', () => ({
    useUser: () => ({
      user: {},
    }),
  }))
  const tree = renderer
    .create(
      <UserProvider>
        <Layout>Some Text</Layout>
      </UserProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
