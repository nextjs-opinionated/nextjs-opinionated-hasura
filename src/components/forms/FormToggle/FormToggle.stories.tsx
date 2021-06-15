import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormToggle, FormToggleProps } from './FormToggle'

export default {
  title: 'Component/Forms/FormToggle',
  component: FormToggle,
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

const Template: Story<FormToggleProps> = (args) => <FormToggle {...args} />

export const Toggle_Default = Template.bind({})
Toggle_Default.args = {
  label: 'Label:',
  disabled: false,
  defaultValue: false,
  register: () => {
    /* noop */
  },
  validationErrors: {},
}
