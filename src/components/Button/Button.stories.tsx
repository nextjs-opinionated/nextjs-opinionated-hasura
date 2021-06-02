import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Component/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

// Default scenario
export const DaisyButton = Template.bind({})
DaisyButton.args = {
  children: 'Simple Button',
}
