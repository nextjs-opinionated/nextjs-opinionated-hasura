/* eslint-disable @typescript-eslint/no-extra-semi */
import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Page from '../../src/pages'

global.fetch = require('node-fetch')

describe('Home page', () => {
  it('should render home page with user signed out', () => {
    const { getByText, getByRole } = TestingLib.render(<Page />)

    const eleList = getByText('HOME')
    const image = getByRole('img')
    expect(eleList).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png'
    )
  })
})
