import { Story, Meta } from '@storybook/react/types-6-0'
import { CustomButtonAuth, CustomButtonAuthProps, KeyProvider } from './CustomButtonAuth'

export default {
  title: 'Component/CustomButtonAuth',
  component: CustomButtonAuth,
} as Meta

const Template: Story<CustomButtonAuthProps> = (args) => (
  <div>
    <CustomButtonAuth {...args} />
  </div>
)

// Default scenario
export const CustomButtonAuthDefault = Template.bind({})
CustomButtonAuthDefault.args = {
  keyProvider: KeyProvider.github,
  label: 'auth button',
  providerId: 'authProvider',
}
