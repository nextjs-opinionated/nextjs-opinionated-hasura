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
  name: 'select_item',
  placeholder: 'Select an Item',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  options: [
    { value: 'it1', label: 'item 1' },
    { value: 'it2', label: 'item 2' },
  ],
}

export const Select_Empty = Template.bind({})
Select_Empty.args = {
  name: 'select_item',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  options: [],
}

export const Select_Empty_With_EmptyMessage = Template.bind({})
Select_Empty_With_EmptyMessage.args = {
  name: 'select_item',
  placeholder: 'Select an Item',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  options: [],
  emptyMessage: 'no items',
}

export const Select_DefaultValue = Template.bind({})
Select_DefaultValue.args = {
  title: 'Title',
  name: 'select_defaultValue',
  placeholder: 'Select an Item',
  defaultValue: 'it1',
  register: () => {
    /* noop */
  },

  validationErrors: {},
  options: [
    { value: 'it1', label: 'item 1' },
    { value: 'it2', label: 'item 2' },
  ],
}

export const Select_Label = Template.bind({})
Select_Label.args = {
  label: 'Label',
  placeholder: 'Select an Item',
  name: 'select_name',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  options: [
    { value: 'it1', label: 'item 1' },
    { value: 'it2', label: 'item 2' },
  ],
}

export const Select_Error = Template.bind({})
Select_Error.args = {
  name: 'text_with_error',
  register: () => {
    /* noop */
  },
  placeholder: 'Select an Item',
  validationErrors: {
    text_with_error: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at',
    },
  },
  options: [
    { value: 'it1', label: 'item 1' },
    { value: 'it2', label: 'item 2' },
  ],
}

export const Select_CustomClassName = Template.bind({})
Select_CustomClassName.args = {
  name: 'select_CustomClassName',
  placeholder: 'Select an Item',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  className: 'text-lg select-accent',
  options: [
    { value: 'it1', label: 'item 1' },
    { value: 'it2', label: 'item 2' },
  ],
}
