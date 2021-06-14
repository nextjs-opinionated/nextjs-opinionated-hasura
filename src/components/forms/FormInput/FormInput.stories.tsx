import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormInput, FormInputProps } from './FormInput'

export default {
  title: 'Component/Forms/FormInput',
  component: FormInput,
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

const Template: Story<FormInputProps> = (args) => <FormInput {...args} />

export const Text_Input_OK = Template.bind({})
Text_Input_OK.args = {
  name: 'input_name',
  register: () => {
    /* noop */
  },
  defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at.',
  validationErrors: {},
}

export const Text_Input_Placeholder_Placeholder = Template.bind({})
Text_Input_Placeholder_Placeholder.args = {
  title: 'Title',
  name: 'input_name',
  register: () => {
    /* noop */
  },

  validationErrors: {},
}

export const Text_Input_Label = Template.bind({})
Text_Input_Label.args = {
  label: 'Label:',
  name: 'input_name',
  register: () => {
    /* noop */
  },
  defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at.',
  validationErrors: {},
}

export const Text_Input_Error = Template.bind({})
Text_Input_Error.args = {
  name: 'text_with_error',
  register: () => {
    /* noop */
  },
  defaultValue: 'this is a title',
  validationErrors: {
    text_with_error: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
    },
  },
}

export const Date_Input = Template.bind({})
Date_Input.args = {
  name: 'date_input',
  type: 'date',
  register: () => {
    /* noop */
  },
  defaultValue: '2021-01-01',
  validationErrors: null,
}

export const Time_Input = Template.bind({})
Time_Input.args = {
  name: 'time_input',
  type: 'time',
  register: () => {
    /* noop */
  },
  defaultValue: '12:30',
  validationErrors: null,
}

export const Text_Input_CustomClassName = Template.bind({})
Text_Input_CustomClassName.args = {
  label: 'Label:',
  name: 'input_name',
  register: () => {
    /* noop */
  },
  defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at.',
  validationErrors: {},
  className: 'text-lg',
}
