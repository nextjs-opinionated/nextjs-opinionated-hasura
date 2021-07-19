/* eslint-disable @typescript-eslint/no-extra-semi */
import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Page from '../../src/pages'
import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'

jest.mock('@auth0/nextjs-auth0')
jest.mock('next/router')

global.fetch = require('node-fetch')

describe('Home page', () => {
  it('should render home page with user signed out', () => {
    // mock useUser

    ;(useRouter as jest.Mock).mockReturnValue({
      asPath: '',
    })
    ;(useUser as jest.Mock).mockReturnValue({
      user: { picture: 'http://daisyui.com/tailwind-css-component-profile-1@94w.png' },
    })
    const PageWithProvider = <Page />
    const { getByText } = TestingLib.render(PageWithProvider)

    const eleList = getByText('Code Generator')
    expect(eleList).toBeInTheDocument()
  })
})
