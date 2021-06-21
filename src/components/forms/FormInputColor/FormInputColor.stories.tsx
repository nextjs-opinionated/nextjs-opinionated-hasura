import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormInputColorProps } from './FormInputColor'
import { FormInputColor_Form } from './FormInputColor_Form'

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
    watch: {
      table: {
        disable: true,
      },
    },
    setValue: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<FormInputColorProps> = (args) => {
  return <FormInputColor_Form {...args} />
}

export const Color_null = Template.bind({})
Color_null.args = {
  label: 'Color:',
  name: 'color_input',
  placeholder: 'color...',
  defaultValue: null,
  className: '',
}

export const Color_Default_Red = Template.bind({})
Color_Default_Red.args = {
  label: 'Color Default Red:',
  name: 'color_input',
  placeholder: 'color...',
  defaultValue: '#ff0000',
  className: '',
}

export const Color_do_not_open_on_focus = Template.bind({})
Color_do_not_open_on_focus.args = {
  label: 'Color:',
  name: 'color_input',
  placeholder: 'color...',
  defaultValue: '#ffff00',
  className: '',
  openOnFocus: false,
}

export const Color_do_not_show_color_picker = Template.bind({})
Color_do_not_show_color_picker.args = {
  label: 'Color:',
  name: 'color_input',
  placeholder: 'color...',
  defaultValue: '#ff00ff',
  className: '',
  openOnFocus: true,
  showHexColorPicker: false,
}

export const Color_always_show_color_picker = Template.bind({})
Color_always_show_color_picker.args = {
  label: 'Color:',
  name: 'color_input',
  placeholder: 'color...',
  defaultValue: '#ffffff',
  className: '',
  showHexColorPicker: true,
  alwaysShowHexColorPicker: true,
}
