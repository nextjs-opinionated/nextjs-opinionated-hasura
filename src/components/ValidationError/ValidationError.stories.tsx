import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ValidationError, ValidationErrorProps } from './ValidationError'

export default {
  title: 'Component/ValidationError',
  component: ValidationError,
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

const Template: Story<ValidationErrorProps> = (args) => <ValidationError {...args} />

const content = [
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
]

export const Alert_OK = Template.bind({})
Alert_OK.args = {
  content,
}

export const Alert_Without_content = Template.bind({})
Alert_Without_content.args = {
  content: [],
}

export const Alert_With_ClassName = Template.bind({})
Alert_With_ClassName.args = {
  content,
  className: 'bg-secondary text-base-100',
}

export const Alert_With_TextType = Template.bind({})
Alert_With_TextType.args = {
  content,
}
