import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ValidationError } from './ValidationError'

describe('Code_block Component', () => {
  it('should render a component', async () => {
    const render = TestingLib.render(
      <ValidationError
        content={[
          {
            code: 'too_small',
            minimum: 5,
            type: 'string',
            inclusive: true,
            message: 'Should be at least 5 characters',
            path: ['email'],
          },
          {
            code: 'custom',
            message: 'please, select an option',
            path: ['color_select'],
          },
        ]}
      />
    )
    expect(render.getByTestId('validation-validation')).toHaveClass('card')
  })
  it('should render a component with className background', async () => {
    const render = TestingLib.render(
      <ValidationError
        content={[
          {
            code: 'too_small',
            minimum: 5,
            type: 'string',
            inclusive: true,
            message: 'Should be at least 5 characters',
            path: ['email'],
          },
          {
            code: 'custom',
            message: 'please, select an option',
            path: ['color_select'],
          },
        ]}
        className='bg-primary'
      />
    )
    expect(render.getByTestId('validation-validation')).toHaveClass('bg-primary')
  })
  it('should render a component with no default title', async () => {
    const render = TestingLib.render(
      <ValidationError
        content={[
          {
            code: 'too_small',
            minimum: 5,
            type: 'string',
            inclusive: true,
            message: 'Should be at least 5 characters',
            path: ['email'],
          },
          {
            code: 'custom',
            message: 'please, select an option',
            path: ['color_select'],
          },
        ]}
        title='Erro de validação!'
      />
    )
    expect(render.getByText('Erro de validação!')).toBeInTheDocument()
  })
})
