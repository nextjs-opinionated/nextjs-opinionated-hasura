import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from './Button'

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

export const NormalButton: Story<ButtonProps> = ({ outlined, label, ...rest }) => {
  return <Button outlined={outlined} label={label} {...rest} onClick={action('clicked')} />
}
