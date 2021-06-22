import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { EMPTY_SELECT_OPTION_VALUE, FormSelect, SelectProps } from './FormSelect'

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

const FIVE_OPTIONS = [
  { value: 'it0', label: 'item 0' },
  { value: 'it1', label: 'item 1' },
  { value: 'it2', label: 'item 2' },
  { value: 'it3', label: 'item 3' },
  { value: 'it4', label: 'item 4' },
]

export const Select_Without_Label = Template.bind({})
Select_Without_Label.args = {
  name: 'select_item',
  placeholder: 'Select an Item',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  options: FIVE_OPTIONS,
}

export const Select_With_Label = Template.bind({})
Select_With_Label.args = {
  label: 'Label',
  placeholder: 'Select an Item',
  name: 'select_name',
  register: () => {
    /* noop */
  },
  validationErrors: {},
  options: FIVE_OPTIONS,
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

export const Select_DefaultValue_ItemEmpty = Template.bind({})
Select_DefaultValue_ItemEmpty.args = {
  label: 'Title',
  name: 'select_defaultValue',
  placeholder: 'Select an Item',
  defaultValue: EMPTY_SELECT_OPTION_VALUE,
  register: () => {
    /* noop */
  },

  validationErrors: {},
  options: FIVE_OPTIONS,
}

export const Select_DefaultValue_Item0 = Template.bind({})
Select_DefaultValue_Item0.args = {
  label: 'Title',
  name: 'select_defaultValue',
  placeholder: 'Select an Item',
  defaultValue: FIVE_OPTIONS[0].value,
  register: () => {
    /* noop */
  },

  validationErrors: {},
  options: FIVE_OPTIONS,
}

export const Select_DefaultValue_Item1 = Template.bind({})
Select_DefaultValue_Item1.args = {
  label: 'Title',
  name: 'select_defaultValue',
  placeholder: 'Select an Item',
  defaultValue: FIVE_OPTIONS[1].value,
  register: () => {
    /* noop */
  },

  validationErrors: {},
  options: FIVE_OPTIONS,
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
  options: FIVE_OPTIONS,
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
  options: FIVE_OPTIONS,
}
