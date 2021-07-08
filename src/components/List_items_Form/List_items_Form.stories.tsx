import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { List_items_Form, List_items_FormProps } from './List_items_Form'

export default {
  title: 'Component/Pages/List_items_Form',
  component: List_items_Form,
} as Meta

const Template: Story<List_items_FormProps> = (args) => <List_items_Form {...args} />

export const List_items_Form_Empty = Template.bind({})
List_items_Form_Empty.args = {}

export const List_items_Form_Filled = Template.bind({})
List_items_Form_Filled.args = {
  initialFormData: {
    title: 'Some Title',
    body: 'My incredible body',
    url: 'https://altphotos.com/photo/lovely-brunette-covers-her-mouth-behind-the-leaf-1882/',
    imageUrl: 'https://media.altphotos.com/cache/images/2017/07/13/07/752/woman-hat-portrait.jpg',
    publishedAt: '2021-07-08T11:41:00+00:00',
  },
}
