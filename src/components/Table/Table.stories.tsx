import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Table, TableProps } from './Table'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FaUserAlt } from 'react-icons/fa'

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
    actions: { argTypesRegex: null },
  },
} as Meta

type CURRENT_LINE_TYPE = {
  id: string
  name: string
  email: string
  created_at: string
  customers: []
}

const FIELDS_TYPES: TableProps<CURRENT_LINE_TYPE>['fields'] = {
  name: {
    label: 'Name',
    getNode: (item) => (
      <Link href={`companies/${item.id}`}>
        <a className='pl-0 underline btn btn-link btn-xs'> {item.name}</a>
      </Link>
    ),
  },
  email: {
    label: 'E-mail',
    getNode: (item) => item.email,
  },
  created_at: {
    label: 'Created At',
    getNode: (item) => dayjs(item.created_at).format('YYYY-MM-DD'),
  },
}

const Template: Story<TableProps<CURRENT_LINE_TYPE>> = (args) => <Table {...args} />

const TABLE_DATA: CURRENT_LINE_TYPE[] = [
  {
    id: 'cd89d348-5832-44d2-9ef7-829c26b11974',
    name: 'Empresa 1',
    email: 'empresa1@hotmail.com',
    created_at: '2021-04-06T21:32:11.33154+00:00',
    customers: [],
  },
  {
    id: 'bc2f52ae-4fe3-4744-b9d8-f0262d798d95',
    name: 'Empresa 2',
    email: 'empresa2@hotmail.com',
    created_at: '2021-06-30T20:22:57.057824+00:00',
    customers: [],
  },
  {
    id: 'bc2asd2ae-4fe3-4744-b9d8-f0262d798d95',
    name: 'Empresa 3',
    email: 'empresa3@hotmail.com',
    created_at: '2021-06-30T20:22:57.057824+00:00',
    customers: [],
  },
  {
    id: 'bcasd4fe3-4744-b9d8-f0262d798d95',
    name: 'Empresa 4',
    email: 'empresa4@hotmail.com',
    created_at: '2021-06-30T20:22:57.057824+00:00',
    customers: [],
  },
  {
    id: 'bc2f52ae-4fe3-474450262d798d95',
    name: 'Empresa 5',
    email: 'empresa5@hotmail.com',
    created_at: '2021-06-30T20:22:57.057824+00:00',
    customers: [],
  },
]

export const Table_Simple = Template.bind({})
Table_Simple.args = {
  data: TABLE_DATA,
  fields: FIELDS_TYPES,
}

export const Table_With_Pagination = Template.bind({})
Table_With_Pagination.args = {
  data: TABLE_DATA,
  fields: FIELDS_TYPES,
  pageSize: 5,
  currentPage: 2,
  totalItems: 20,
  onPageSet: (currentPage) => {
    // eslint-disable-next-line no-console
    console.log('--  currentPage: ', currentPage)
  },
}

export const Table_WithClassName = Template.bind({})
Table_WithClassName.args = {
  data: TABLE_DATA,
  fields: FIELDS_TYPES,
  className: ' table-compact table-zebra',
}

export const Table_WithoutLink = Template.bind({})
Table_WithoutLink.args = {
  data: TABLE_DATA,
  fields: {
    ...FIELDS_TYPES,
    name: {
      label: 'Name',
      getNode: (item) => item.name,
    },
  },
}

export const Table_With_Delete_Button = Template.bind({})

Table_With_Delete_Button.args = {
  data: TABLE_DATA,
  fieldNames: ['name', 'email'],
  fields: FIELDS_TYPES,
  onDelete: (id) => {
    // eslint-disable-next-line no-console
    console.log('--  id: ', id)
  },
}

export const Table_WithImage = Template.bind({})
Table_WithImage.args = {
  data: [
    {
      image:
        'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80',

      id: 'cd89d348-5832-44d2-9ef7-829c26b11974',
      name: 'Empresa 1',
      email: 'empresa1@hotmail.com',
      created_at: '2021-04-06T21:32:11.33154+00:00',
      customers: [],
    },
    {
      id: 'bc2f52ae-4fe3-4744-b9d8-f0262d798d95',
      name: 'Empresa 2',
      email: 'empresa2@hotmail.com',
      created_at: '2021-06-30T20:22:57.057824+00:00',
      customers: [],
    },
    {
      id: 'bc2asd2ae-4fe3-4744-b9d8-f0262d798d95',
      name: 'Empresa 3',
      email: 'empresa3@hotmail.com',
      created_at: '2021-06-30T20:22:57.057824+00:00',
      customers: [],
    },
    {
      id: 'bcasd4fe3-4744-b9d8-f0262d798d95',
      name: 'Empresa 4',
      email: 'empresa4@hotmail.com',
      created_at: '2021-06-30T20:22:57.057824+00:00',
      customers: [],
    },
    {
      id: 'bc2f52ae-4fe3-474450262d798d95',
      name: 'Empresa 5',
      email: 'empresa5@hotmail.com',
      created_at: '2021-06-30T20:22:57.057824+00:00',
      customers: [],
    },
  ],
  fields: {
    ...FIELDS_TYPES,
    image: {
      label: 'Image',
      getNode: (item) => (
        <div className='flex items-center space-x-3'>
          {item.image ? (
            <div className='avatar'>
              <div className='w-12 h-12 mask mask-squircle'>
                <img alt={item.name || undefined} src={item.image} />
              </div>
            </div>
          ) : (
            <div className='flex flex-row items-center justify-center w-12 h-12 mask mask-squircle bg-base-300'>
              <FaUserAlt size={25} />
            </div>
          )}
        </div>
      ),
    },
  },
}
