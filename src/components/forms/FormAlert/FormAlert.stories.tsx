import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormAlert, FormAlertProps } from './FormAlert'

export default {
  title: 'Component/Forms/FormAlert',
  component: FormAlert,
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

const Template: Story<FormAlertProps> = (args) => <FormAlert {...args} />

export const FormAlert_OK = Template.bind({})
FormAlert_OK.args = {
  content: {
    initialFormData: {
      email: 'email@hotmail.com',
      color_select: '#000',
      toggle: true,
      image_url: '',
    },
  },
  type: 'code',

  register: () => {
    /* noop */
  },
  validationErrors: {},
}

export const FormAlert_With_Content = Template.bind({})
FormAlert_With_Content.args = {
  content: {
    initialFormData: {
      email: 'email@hotmail.com',
      color_select: '#000',
      toggle: true,
      image_url: '',
    },
    type: 'code',
  },
  register: () => {
    /* noop */
  },
}
