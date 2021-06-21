import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CodeBlock } from './CodeBlock'

describe('Code_block Component', () => {
  it('should render a component', async () => {
    const render = TestingLib.render(
      <CodeBlock
        content={{
          initialFormData: {
            email: 'email@hotmail.com',
            color_select: '#000',
            toggle: true,
            image_url: '',
          },
        }}
      />
    )
    expect(render.getByTestId('code-block')).toHaveClass('mockup-code')
  })
})
