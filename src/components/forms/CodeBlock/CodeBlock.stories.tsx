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
  dataPrefix: '>',
  textType: 'text-warning',
}

export const CodeBlock_Without_content = Template.bind({})
CodeBlock_Without_content.args = {
  content: {
    initialFormData: {},
  },
}

export const CodeBlock_With_ClassName = Template.bind({})
CodeBlock_With_ClassName.args = {
  content: {
    initialFormData: {
      email: 'email@hotmail.com',
      color_select: '#000',
      toggle: true,
      image_url: '',
    },
  },
  className: 'bg-primary',
}

export const CodeBlock_With_TextType = Template.bind({})
CodeBlock_With_TextType.args = {
  content: {
    initialFormData: {
      email: 'email@hotmail.com',
      color_select: '#000',
      toggle: true,
      image_url: '',
    },
  },
  textType: 'text-warning',
}

export const CodeBlock_WithDataPrefix = Template.bind({})
CodeBlock_WithDataPrefix.args = {
  content: {
    initialFormData: {
      email: 'email@hotmail.com',
      color_select: '#000',
      toggle: true,
      image_url: '',
    },
  },
  dataPrefix: '>',
}
