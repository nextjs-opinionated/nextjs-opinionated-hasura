import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Loading from './Loading'

export default {
  title: 'Component/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template = (args) => (
  <div>
    <Loading {...args} />
  </div>
)

export const Loading_Small = Template.bind({})
Loading_Small.args = {
  title: 'Loading',
  className: 'w-3 h-3',
}

export const LoadingDefault = Template.bind({})
LoadingDefault.args = {
  title: 'Loading',
  className: 'w-5 h-5',
}

export const Loading_Large = Template.bind({})
Loading_Large.args = {
  title: 'Loading',
  className: 'w-10 h-10',
}
