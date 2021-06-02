import React from 'react'
import { render, fireEvent } from '../testUtils'
import Page from '../../src/pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Page />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('SweetAlert: clicking button triggers SweetAlert with Some Alert Title', () => {
    const { getByText, queryByText } = render(<Page />, {})

    expect(queryByText('Some Alert Title')).toBeNull()

    fireEvent.click(getByText('Show Image'))
    expect(queryByText('Some Alert Title')).toBeDefined()
  })

  it('SweetAlert: ok button closes SweetAlert', () => {
    const { getByText, queryByText } = render(<Page />, {})
    fireEvent.click(getByText('Show Image'))
    fireEvent.click(getByText('ok button'))
    expect(queryByText('Some Alert Title')).toBeNull()
  })
})
