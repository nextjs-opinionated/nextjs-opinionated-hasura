import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormSelect, SelectProps } from './FormSelect'

export default {
  title: 'Component/Forms/FormSelect',
  component: FormSelect,
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

const Template: Story<SelectProps> = (args) => <FormSelect {...args} />



export const Select_OK = Template.bind({})
Select_OK.args = {
  name: 'select_name',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  options: [
    { id: 'it1', value: 'item 1' },
    { id: 'it2', value: 'item 2' },
  ],
}

export const Select_DefaultValue = Template.bind({})
Select_DefaultValue.args = {
  title: 'Title',
  name: 'select_name',
  defaultValue: 1,

  register: () => {
    /* noop */
  },

  validationErrors: {},
  options: [
    { id: 'it1', value: 'item 1' },
    { id: 'it2', value: 'item 2' },
  ],

}

export const Select_Label = Template.bind({})
Select_Label.args = {
  label: 'Label:',
  name: 'select_name',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  options: [
    { id: 'it1', value: 'item 1' },
    { id: 'it2', value: 'item 2' },
  ],
}

export const Select_Error = Template.bind({})
Select_Error.args = {
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
  options: [
    { id: 'it1', value: 'item 1' },
    { id: 'it2', value: 'item 2' },
  ],
}




export const Select_CustomClassName = Template.bind({})
Select_CustomClassName.args = {
  label: 'Label:',
  name: 'select_name',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  className: 'text-lg select-accent',
  options: [
    { id: 'it1', value: 'item 1' },
    { id: 'it2', value: 'item 2' },
  ],
}

