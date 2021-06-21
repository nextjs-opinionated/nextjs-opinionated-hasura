import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CodeBlock, CodeBlockProps } from './CodeBlock'

export default {
  title: 'Component/Forms/CodeBlock',
  component: CodeBlock,
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

const Template: Story<CodeBlockProps> = (args) => <CodeBlock {...args} />

export const CodeBlock_OK = Template.bind({})
CodeBlock_OK.args = {
  content: {
    initialFormData: {
      email: 'email@hotmail.com',
      color_select: '#000',
      toggle: true,
      image_url: '',
    },
  },
}

export const CodeBlock_Without_content = Template.bind({})
CodeBlock_Without_content.args = {
  content: {
    initialFormData: {},
  },
}
