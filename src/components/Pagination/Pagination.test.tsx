import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Pagination } from './Pagination'

describe('Pagination Component', () => {
  it('should render a component', async () => {
    const render = TestingLib.render(
      <Pagination
        currentPage={1}
        totalPage={1}
        OnPageSet={() => {
          //
        }}
        className='btn-xs'
      />
    )
    expect(render.getByTestId('button')).toHaveClass('btn-group')
  })
  it('should render a component with different button className ', async () => {
    const render = TestingLib.render(
      <Pagination
        currentPage={1}
        totalPage={1}
        OnPageSet={() => {
          //
        }}
        className='btn-xs'
      />
    )
    expect(render.getByText('1')).toHaveClass('btn-xs')
  })
  it('should render a component with different button Name ', async () => {
    const render = TestingLib.render(
      <Pagination
        currentPage={1}
        totalPage={1}
        OnPageSet={() => {
          //
        }}
        className='btn-xs'
        nextButtonTitle='proximo'
        previousButtonTitle='anterior'
      />
    )
    expect(render.getByText('proximo')).toBeInTheDocument()
    expect(render.getByText('anterior')).toBeInTheDocument()
  })
})
