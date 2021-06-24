import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Page from '../../src/pages'

global.fetch = require('node-fetch')

describe('Home page', () => {
  it('should render', () => {
    const renderResult = TestingLib.render(<Page />)
    const eleList = renderResult.getByText('HOME')
    expect(eleList).toBeInTheDocument()
  })
})
