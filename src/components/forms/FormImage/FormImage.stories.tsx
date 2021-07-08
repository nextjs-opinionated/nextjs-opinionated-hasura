import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormImage, FormImageProps } from './FormImage'

export default {
  title: 'Component/Forms/FormImage',
  component: FormImage,
  argTypes: {
    register: {
      table: {
        disable: true,
      },
    },
    validationErrors: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<FormImageProps> = (args) => <FormImage {...args} />

export const Image_Default = Template.bind({})
Image_Default.args = {
  name: 'image_name',
  defaultValue: 'https://media.altphotos.com/cache/images/2020/04/14/05/752/flowers-spring.jpg',
  register: () => {
    /* noop */
  },
  watch: () => {
    /* noop */
  },
  validationErrors: {},
}

export const Image_Height = Template.bind({})
Image_Height.args = {
  name: 'image_name',
  defaultValue: 'https://media.altphotos.com/cache/images/2020/04/14/05/752/flowers-spring.jpg',
  register: () => {
    /* noop */
  },
  watch: () => {
    /* noop */
  },
  validationErrors: {},
  height: 400,
}

export const Image_Width = Template.bind({})
Image_Width.args = {
  name: 'image_name',
  defaultValue: 'https://media.altphotos.com/cache/images/2020/04/14/05/752/flowers-spring.jpg',
  register: () => {
    /* noop */
  },
  watch: () => {
    /* noop */
  },
  validationErrors: {},
  width: 400,
}

export const Image_Small = Template.bind({})
Image_Small.args = {
  name: 'image_name',
  defaultValue: 'https://media.altphotos.com/cache/images/2020/04/14/05/752/flowers-spring.jpg',
  register: () => {
    /* noop */
  },
  watch: () => {
    /* noop */
  },
  validationErrors: {},
  width: 100,
  height: 100,
}

export const Image_Empty = Template.bind({})
Image_Empty.args = {
  name: 'image_name',
  placeholder: 'Select an Image',
  register: () => {
    /* noop */
  },
  watch: () => {
    /* noop */
  },
  width: 400,
  validationErrors: {
    text_with_error: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
    },
  },
}

export const Image_Invalid_Url = Template.bind({})
Image_Invalid_Url.args = {
  name: 'image_name',
  defaultValue: 'https://invalid-url',
  placeholder: 'Select an Image',
  register: () => {
    /* noop */
  },
  watch: () => {
    /* noop */
  },
  validationErrors: {
    text_with_error: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
    },
  },
}

export const Image_Error = Template.bind({})
Image_Error.args = {
  name: 'image_name',
  defaultValue: 'https://invalid-url',
  placeholder: 'Select an Image',
  register: () => {
    /* noop */
  },
  watch: () => {
    /* noop */
  },
  validationErrors: {
    text_with_error: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
    },
  },
}
