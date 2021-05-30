import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from './Button'

export default {
  component: Button,
  title: 'a Button',
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template = (args) => <Button {...args} />

export const Normal = Template.bind({})
Normal.args = {
  label: 'Normal Button',
  outlined: false,
}

export const Outlined = Template.bind({})
Outlined.args = {
  label: 'Outlined Button',
  outlined: true,
}
