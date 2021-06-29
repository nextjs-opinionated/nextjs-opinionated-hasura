/* eslint-disable @typescript-eslint/no-extra-semi */
import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { useSession } from 'next-auth/client'
import Page from '../../src/pages'
jest.mock('next-auth/client')

global.fetch = require('node-fetch')

describe('Home page', () => {
  it('should render home page with user signed out', () => {
    ;(useSession as jest.Mock).mockReturnValueOnce([false, false])

    const { getByText, getByRole } = TestingLib.render(<Page />)

    const eleList = getByText('HOME')
    const image = getByRole('img')
    expect(eleList).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      'http://daisyui.com/tailwind-css-component-profile-1@94w.png'
    )
  })

  it('should render home page with user signed in', () => {
    ;(useSession as jest.Mock).mockReturnValueOnce([
      {
        user: {
          name: 'user',
          email: 'user@domain.com',
          role: 'User',
          image: 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=user',
        },
      },
      false,
    ])

    const { getByText, getByRole } = TestingLib.render(<Page />)

    const eleList = getByText('HOME')
    const image = getByRole('img')
    expect(eleList).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=user'
    )
  })
})
