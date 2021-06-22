import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ChangeThemeDropDown, ChangeThemeDropDownProps } from './ChangeThemeDropDown'

export default {
  title: 'Component/ChangeThemeDropDown',
  component: ChangeThemeDropDown,
} as Meta

const Template: Story<ChangeThemeDropDownProps> = (args) => <ChangeThemeDropDown {...args} />

// Default scenario
export const ChangeTheme_DropDown = Template.bind({})
ChangeTheme_DropDown.args = {
  label: 'select a theme',
}
