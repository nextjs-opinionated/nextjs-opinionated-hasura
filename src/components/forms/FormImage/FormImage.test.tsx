import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { FormImage } from './FormImage'
import { fireEvent } from '@testing-library/react'

describe('Form Local Image Component', () => {
  it('should render a component', async () => {
    const render = TestingLib.render(
      <FormImage
        label='Name'
        placeholder='Select an Image'
        name='image_name'
        register={() => {
          /* noop */
        }}
        watch={() => {
          /* noop */
        }}
        validationErrors={''}
        className='text-lg select-accent'
      />
    )
    expect(render.getByText('Name')).toBeInTheDocument()
  })

  it('should render component with default value', async () => {
    const render = TestingLib.render(
      <FormImage
        label='Label'
        name='Select an Image'
        defaultValue='https://via.placeholder.com/1080x1920.png?text=Image+Placeholder'
        register={() => {
          /* noop */
        }}
        watch={() => {
          /* noop */
        }}
        validationErrors={''}
      />
    )

    const allOptions = render.getByRole('img') as HTMLImageElement
    expect(allOptions).toHaveAttribute('src')
    expect(allOptions.src).toEqual(
      'https://via.placeholder.com/1080x1920.png?text=Image+Placeholder'
    )
  })

  it('should click and change the selected image', async () => {
    const render = TestingLib.render(
      <FormImage
        label='Label'
        placeholder='Select an Image'
        name='image_name'
        register={() => {
          /* noop */
        }}
        watch={() => {
          /* noop */
        }}
        validationErrors={''}
      />
    )

    fireEvent.change(render.getByRole('img'), {
      target: { src: 'https://via.placeholder.com/1080x1920.png?text=Image+Placeholder' },
    })

    const select = render.getByRole('img') as HTMLImageElement
    expect(select.src).toEqual('https://via.placeholder.com/1080x1920.png?text=Image+Placeholder')
  })

  it('should render component with error message', async () => {
    const render = TestingLib.render(
      <FormImage
        label='Label'
        placeholder='Select an Image'
        name='text_with_error'
        register={() => {
          /* noop */
        }}
        watch={() => {
          /* noop */
        }}
        validationErrors={{
          text_with_error: {
            message: 'Error Message',
          },
        }}
      />
    )
    render.debug()

    expect(render.getByText('Error Message')).toHaveClass('text-error')
  })
})
