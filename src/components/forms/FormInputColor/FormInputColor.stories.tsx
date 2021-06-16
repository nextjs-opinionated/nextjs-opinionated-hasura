import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormInputColor, FormInputColorProps } from './FormInputColor'

export default {
  title: 'Component/Forms/FormInputColor',
  component: FormInputColor,
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

const Template: Story<FormInputColorProps> = (args) => <FormInputColor {...args} />

export const Text_Input_Color_Default = Template.bind({})
Text_Input_Color_Default.args = {
  name: 'input_name',
  register: () => {
    /* noop */
  },
  defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at.',
  validationErrors: {},
}

export const Text_Input_Color_Label = Template.bind({})
Text_Input_Color_Label.args = {
  label: 'Label:',
  name: 'input_name',
  register: () => {
    /* noop */
  },
  defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at.',
  validationErrors: {},
}
