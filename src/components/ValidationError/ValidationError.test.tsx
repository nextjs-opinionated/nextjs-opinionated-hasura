import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ValidationError } from './ValidationError'

describe('Validation Error Component', () => {
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
    expect(render.getByTestId('validation-validation')).toHaveTextContent('email')
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
    expect(render.getByTestId('validation-validation')).toHaveTextContent(
      'please, select an option'
    )
  })
})
