import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Users_Form, Users_FormProps } from './Users_Form'

export default {
  title: 'Component/Pages/Users_Form',
  component: Users_Form,
} as Meta

const Template: Story<Users_FormProps> = (args) => <Users_Form {...args} />

export const Users_Form_Empty = Template.bind({})
Users_Form_Empty.args = {}

export const Users_Form_Filled = Template.bind({})
Users_Form_Filled.args = {
  initialFormData: {
    title: 'Some Title',
    body: 'My incredible body',
    url: 'https://altphotos.com/photo/lovely-brunette-covers-her-mouth-behind-the-leaf-1882/',
    imageUrl: 'https://media.altphotos.com/cache/images/2017/07/13/07/752/woman-hat-portrait.jpg',
    publishedAt: '2021-07-08T11:41:00+00:00',
  },
}
