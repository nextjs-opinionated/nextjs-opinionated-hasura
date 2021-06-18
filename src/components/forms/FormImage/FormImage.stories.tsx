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

export const Image_OK = Template.bind({})
Image_OK.args = {
  name: 'image_name',
  placeholder: 'Select an Image',
  register: () => {
    /* noop */
  },
  validationErrors: {},
}

export const Image_DefaultValue = Template.bind({})
Image_DefaultValue.args = {
  title: 'Title',
  name: 'image_name',
  placeholder: 'Select an Image',
  defaultValue: 'https://via.placeholder.com/1080x1920.png?text=Image+Placeholder',
  register: () => {
    /* noop */
  },

  validationErrors: {},
}

export const Image_Label = Template.bind({})
Image_Label.args = {
  label: 'Label:',
  name: 'image_name',
  placeholder: 'Select an Image',
  register: () => {
    /* noop */
  },
  validationErrors: {},
}

export const Image_Error = Template.bind({})
Image_Error.args = {
  name: 'text_with_error',
  placeholder: 'Select an Image',
  register: () => {
    /* noop */
  },
  validationErrors: {
    text_with_error: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
    },
  },
}

export const Image_CustomClassName = Template.bind({})
Image_CustomClassName.args = {
  label: 'Label:',
  name: 'image_name',
  placeholder: 'Select an Image',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  className: 'text-lg',
}
