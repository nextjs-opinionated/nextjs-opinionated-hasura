import React from 'react'
import Button, { ButtonProps } from './Button'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react'

export default {
  component: Button,
  title: 'a Button',
  argTypes: {
    // outlined: {
    //   control: {
    //     type: 'boolean',
    //   },
    // },
    // label: {
    //   control: {
    //     type: 'text',
    //   },
    // },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

export const Template: Story<ButtonProps> = ({ outlined, label, ...rest }) => {
  return <Button outlined={outlined} label={label} {...rest} onClick={action('clicked')} />
}
