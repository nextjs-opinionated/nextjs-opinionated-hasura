import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Pagination, PaginationProps } from './Pagination'

export default {
  title: 'Component/Pagination',
  component: Pagination,
  argTypes: {
    onClick: { action: 'clicked' },
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
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />

export const Pagination_OK = Template.bind({})
Pagination_OK.args = {
  totalPages: 1,
  currentPage: 1,
}

export const Pagination_Without_content = Template.bind({})
Pagination_Without_content.args = {
  totalPages: 5,
  currentPage: 3,
}

export const Pagination_With_ClassName = Template.bind({})
Pagination_With_ClassName.args = {
  totalPages: 5,
  currentPage: 3,
  className: 'btn-xs',
}

export const Pagination_With_Custom_Button_Tiltle = Template.bind({})
Pagination_With_ClassName.args = {
  totalPages: 5,
  currentPage: 3,
  className: 'btn-xs',
  previousButtonTitle: '<<',
  nextButtonTitle: '>>',
}
