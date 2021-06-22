import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormToggle } from './FormToggle'
import { FormBaseProps } from '../FormBaseProps'

export default {
  title: 'Component/Forms/FormToggle',
  component: FormToggle,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story<FormBaseProps> = (args) => <FormToggle {...args} />

export const Toggle_Default = Template.bind({})
Toggle_Default.args = {
  name: 'select_toggle',
  label: 'Toggle:',
  register: () => {
    /* noop */
  },
}

export const Toggle_Disabled = Template.bind({})
Toggle_Disabled.args = {
  name: 'select_toggle',
  label: 'Toggle Disabled:',
  disabled: true,
  register: () => {
    /* noop */
  },
}

export const Toggle_DefaultValuesFalse = Template.bind({})
Toggle_DefaultValuesFalse.args = {
  name: 'select_toggle',
  label: 'Toggle defaultValue = false',
  defaultValue: false,
  register: () => {
    /* noop */
  },
}

export const Toggle_DefaultValuesTrue = Template.bind({})
Toggle_DefaultValuesTrue.args = {
  name: 'select_toggle',
  label: 'Toggle defaultValue = true',
  defaultValue: true,
  register: () => {
    /* noop */
  },
}
