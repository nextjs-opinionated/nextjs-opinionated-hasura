import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormTextarea, FormTextareaProps } from './FormTextarea'

export default {
  title: 'Component/Forms/FormTextarea',
  component: FormTextarea,
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

const Template: Story<FormTextareaProps> = (args) => <FormTextarea {...args} />

export const Textarea_Default_Title = Template.bind({})
Textarea_Default_Title.args = {
  name: 'text-area-name',
  register: () => {
    /* noop */
  },
  defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
  validationErrors: {},
}

export const Textarea_Label = Template.bind({})
Textarea_Label.args = {
  label: 'Label:',
  name: 'text-area-name',
  register: () => {
    /* noop */
  },
  defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
  validationErrors: {},
}

export const Textarea_Error = Template.bind({})
Textarea_Error.args = {
  name: 'text_area_name',
  register: () => {
    /* noop */
  },
  defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
  validationErrors: {
    text_area_name: {
      message: 'This is validation error!',
    },
  },
}

export const Textarea_CustomClassName = Template.bind({})
Textarea_CustomClassName.args = {
  name: 'text_area_name',
  register: () => {
    /* noop */
  },
  className: 'text-lg h-64',
  defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
  validationErrors: {},
}
