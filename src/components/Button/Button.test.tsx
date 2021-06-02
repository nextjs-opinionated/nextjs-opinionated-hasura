import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from './Button'

test('renders correctly', () => {
  const tree = renderer.create(<Button>Some Text</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
