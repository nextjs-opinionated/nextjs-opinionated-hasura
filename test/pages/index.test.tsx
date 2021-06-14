import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Page from '../../src/pages'

describe('Home page', () => {
  it('should render', () => {
    const renderResult = TestingLib.render(<Page />)
    const eleList = renderResult.getAllByText('Next.js Opinionated')
    expect(eleList[0]).toBeInTheDocument()
    expect(eleList[1]).toBeInTheDocument()
  })
})
