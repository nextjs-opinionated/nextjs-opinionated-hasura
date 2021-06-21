import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormInputColor_Form } from './FormInputColor_Form'
import { FormInputColorProps } from './FormInputColor'

export default {
  title: 'Component/Forms/FormInputColor_Form',
  component: FormInputColor_Form,
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

const Template: Story<FormInputColorProps> = (args) => <FormInputColor_Form {...args} />

export const Color_null = Template.bind({})
Color_null.args = {
  label: 'Color:',
  name: 'color_input',
  placeholder: 'color...',
  defaultValue: null,
  className: '',
}

export const Color_Red = Template.bind({})
Color_Red.args = {
  label: 'Color Red:',
  name: 'color_input',
  placeholder: 'color...',
  defaultValue: '#ff0000',
  className: '',
}
