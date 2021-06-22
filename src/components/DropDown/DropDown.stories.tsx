import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { DropDown, DropDownProps } from './DropDown'

export default {
  title: 'Component/DropDown',
  component: DropDown,
} as Meta

const Template: Story<DropDownProps> = (args) => <DropDown {...args} />

export const DropDown_Two_Items = Template.bind({})
DropDown_Two_Items.args = {
  label: 'select a number',
  items: [
    { id: 'a1', value: '100' },
    { id: 'a2', value: '200' },
  ],
}

export const DropDown_Default_Second = Template.bind({})
DropDown_Default_Second.args = {
  label: 'select a number',
  items: [
    { id: 'a1', value: '100' },
    { id: 'a2', value: '200' },
  ],
  selectedId: 'a2',
}

export const DropDown_100 = Template.bind({})
DropDown_100.args = {
  label: 'select a number',
  items: [
    { id: 'a1', value: 'item 1' },
    { id: 'a2', value: 'item 2' },
  ],
  width: 100,
}

export const DropDown_200 = Template.bind({})
DropDown_200.args = {
  label: 'select an item',
  items: [
    { id: 'a1', value: 'item 1' },
    { id: 'a2', value: 'item 2' },
  ],
  width: 200,
}
