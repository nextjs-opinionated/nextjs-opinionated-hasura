import React from 'react'
import renderer from 'react-test-renderer'
import { Layout } from './Layout'
import { useUser } from '@auth0/nextjs-auth0'

jest.mock('@auth0/nextjs-auth0')

test('renders correctly', () => {
  // mock useUser
  ;(useUser as jest.Mock).mockReturnValueOnce({ user: {}, error: null, isLoading: false })

  const tree = renderer.create(<Layout>Some Text</Layout>).toJSON()
  expect(tree).toMatchSnapshot()
})
