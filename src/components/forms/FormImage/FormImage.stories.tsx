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

export const Image_Clean = Template.bind({})
Image_Clean.args = {
  name: 'image_name',
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
  register: () => {
    /* noop */
  },
  watch: () => {
    /* noop */
  },
  validationErrors: {},
  height: 400,
}

export const Image_Small = Template.bind({})
Image_Small.args = {
  name: 'image_name',
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

export const Image_DefaultValue = Template.bind({})
Image_DefaultValue.args = {
  name: 'image_name',
  defaultValue: 'https://via.placeholder.com/1080x1920.png?text=Image+Placeholder',
  register: () => {
    /* noop */
  },
  watch: () => {
    /* noop */
  },

  validationErrors: {},
}

export const Image_Placeholder_changes_Button_Label = Template.bind({})
Image_Placeholder_changes_Button_Label.args = {
  name: 'image_name',
  placeholder: 'Select an Image',
  defaultValue: 'https://via.placeholder.com/1080x1920.png?text=Image+Placeholder',
  register: () => {
    /* noop */
  },
  watch: () => {
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
  watch: () => {
    /* noop */
  },
  validationErrors: {
    text_with_error: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
    },
  },
}

export const Image_CustomClassName_add_border = Template.bind({})
Image_CustomClassName_add_border.args = {
  label: 'Label:',
  name: 'image_name',
  placeholder: 'Select an Image',
  register: () => {
    /* noop */
  },
  watch: () => {
    /* noop */
  },
  validationErrors: {},
  className: 'border-4',
}
