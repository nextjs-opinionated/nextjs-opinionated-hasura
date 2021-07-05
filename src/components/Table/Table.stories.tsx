import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Table, TableProps } from './Table'

export default {
  title: 'Component/Table',
  component: Table,
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
  parameters: {
    layout: 'centered',
  },
} as Meta

const Template: Story<TableProps> = (args) => <Table {...args} />

export const Table_OK = Template.bind({})
Table_OK.args = {
  content: {
    companies: [
      {
        id: 'cd89d348-5832-44d2-9ef7-829c26b11974',
        name: 'Cia Marítima',
        created_at: '2021-04-06T21:32:11.33154+00:00',
        customers: [
          {
            id: 'f02f1b25-a62b-4de3-8463-f3a9b75c0960',
            name: 'Cliente teste',
            email: 'julio.saito@semantix.com.br',
            cpfCnpj: '22159151882',
          },
          {
            id: '628e63f0-4224-4007-b8d6-876a95e5560f',
            name: 'Bruno Maia',
            email: 'brunomaia@hotmail.com',
            cpfCnpj: '22389263801',
          },
          {
            id: '430228ba-621c-45cc-859d-833b1e00228b',
            name: 'Bruno Maia',
            email: 'brunomaia@hotmail.com',
            cpfCnpj: '22389263801',
          },
        ],
      },
      {
        id: 'bc2f52ae-4fe3-4744-b9d8-f0262d798d95',
        name: 'Semantix',
        created_at: '2021-06-30T20:22:57.057824+00:00',
        customers: [],
      },
    ],
  },
  selectedItems: ['name', 'created_at'],
  buttonSelectedItemName: 'name',
  linkPage: '/',
}
