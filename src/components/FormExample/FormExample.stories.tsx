import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormExample, FormExampleProps } from './FormExample'

export default {
  title: 'Component/Pages/FormExample',
  component: FormExample,
} as Meta

const Template: Story<FormExampleProps> = (args) => <FormExample {...args} />

export const FormExample_Empty = Template.bind({})
FormExample_Empty.args = {}

export const FormExample_Filled = Template.bind({})
FormExample_Filled.args = {
  initialFormData: {
    email: 'some_email@gmail.com',
    color_select: 'red',
    toggle: true,
  },
}
