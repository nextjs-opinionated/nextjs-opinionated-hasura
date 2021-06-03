import React from 'react'
import renderer from 'react-test-renderer'
import { Layout } from './Layout'

test('renders correctly', () => {
  const tree = renderer.create(<Layout>Some Text</Layout>).toJSON()
  expect(tree).toMatchSnapshot()
})
