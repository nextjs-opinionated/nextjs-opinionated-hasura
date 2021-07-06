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
  data: [
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
  ],
  pageSize: 5,
  currentPage: 35,
  totalItems: 600,
  fieldNames: ['name', 'created_at', 'email'],
  linkPage: '/companies',
}

// export const Table_Without_ID = Template.bind({})
// Table_Without_ID.args = {
//   data: [
//     {
//       name: 'Empresa 1',
//       email: 'empresa1@hotmail.com',
//       created_at: '2021-04-06T21:32:11.33154+00:00',
//       customers: [],
//     },
//     {
//       name: 'Empresa 2',
//       email: 'empresa2@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       name: 'Empresa 3',
//       email: 'empresa3@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       name: 'Empresa 4',
//       email: 'empresa4@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       name: 'Empresa 5',
//       email: 'empresa5@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//   ],
//   fieldNames: ['name', 'created_at', 'email'],
//   linkPage: '/companies',
// }

// export const Table_WithClassName = Template.bind({})
// Table_WithClassName.args = {
//   data: [
//     {
//       id: 'cd89d348-5832-44d2-9ef7-829c26b11974',
//       name: 'Empresa 1',
//       email: 'empresa1@hotmail.com',
//       created_at: '2021-04-06T21:32:11.33154+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 2',
//       email: 'empresa2@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2asd2ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 3',
//       email: 'empresa3@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bcasd4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 4',
//       email: 'empresa4@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-474450262d798d95',
//       name: 'Empresa 5',
//       email: 'empresa5@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//   ],
//   fieldNames: ['name', 'created_at', 'email'],
//   className: ' table-compact table-zebra',
//   linkPage: '/',
// }

// export const Table_WithSelectedItems = Template.bind({})
// Table_WithSelectedItems.args = {
//   data: [
//     {
//       id: 'cd89d348-5832-44d2-9ef7-829c26b11974',
//       name: 'Empresa 1',
//       email: 'empresa1@hotmail.com',
//       created_at: '2021-04-06T21:32:11.33154+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 2',
//       email: 'empresa2@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2asd2ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 3',
//       email: 'empresa3@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bcasd4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 4',
//       email: 'empresa4@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-474450262d798d95',
//       name: 'Empresa 5',
//       email: 'empresa5@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//   ],
//   fieldNames: ['name', 'email'],
//   linkPage: '/',
// }

// export const Table_WithoutLink = Template.bind({})
// Table_WithoutLink.args = {
//   data: [
//     {
//       id: 'cd89d348-5832-44d2-9ef7-829c26b11974',
//       name: 'Empresa 1',
//       email: 'empresa1@hotmail.com',
//       created_at: '2021-04-06T21:32:11.33154+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 2',
//       email: 'empresa2@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2asd2ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 3',
//       email: 'empresa3@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bcasd4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 4',
//       email: 'empresa4@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-474450262d798d95',
//       name: 'Empresa 5',
//       email: 'empresa5@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//   ],
//   fieldNames: ['name', 'email'],
// }

// export const Table_WithoOnDelete = Template.bind({})
// Table_WithoOnDelete.args = {
//   data: [
//     {
//       id: 'cd89d348-5832-44d2-9ef7-829c26b11974',
//       name: 'Empresa 1',
//       email: 'empresa1@hotmail.com',
//       created_at: '2021-04-06T21:32:11.33154+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 2',
//       email: 'empresa2@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2asd2ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 3',
//       email: 'empresa3@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bcasd4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 4',
//       email: 'empresa4@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-474450262d798d95',
//       name: 'Empresa 5',
//       email: 'empresa5@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//   ],
//   fieldNames: ['name', 'email'],
//   OnDelete: () => {
//     /* noop */
//   },
// }

// export const Table_WithImageAsFirstInFieldList = Template.bind({})
// Table_WithImageAsFirstInFieldList.args = {
//   data: [
//     {
//       image:
//         'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80',

//       id: 'cd89d348-5832-44d2-9ef7-829c26b11974',
//       name: 'Empresa 1',
//       email: 'empresa1@hotmail.com',
//       created_at: '2021-04-06T21:32:11.33154+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 2',
//       email: 'empresa2@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2asd2ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 3',
//       email: 'empresa3@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bcasd4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 4',
//       email: 'empresa4@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-474450262d798d95',
//       name: 'Empresa 5',
//       email: 'empresa5@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//   ],
//   fieldNames: ['image', 'name', 'created_at', 'email'],
//   linkPage: '/companies',
// }

// export const Table_WithImage = Template.bind({})
// Table_WithImage.args = {
//   data: [
//     {
//       image:
//         'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80',

//       id: 'cd89d348-5832-44d2-9ef7-829c26b11974',
//       name: 'Empresa 1',
//       email: 'empresa1@hotmail.com',
//       created_at: '2021-04-06T21:32:11.33154+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 2',
//       email: 'empresa2@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2asd2ae-4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 3',
//       email: 'empresa3@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bcasd4fe3-4744-b9d8-f0262d798d95',
//       name: 'Empresa 4',
//       email: 'empresa4@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//     {
//       id: 'bc2f52ae-4fe3-474450262d798d95',
//       name: 'Empresa 5',
//       email: 'empresa5@hotmail.com',
//       created_at: '2021-06-30T20:22:57.057824+00:00',
//       customers: [],
//     },
//   ],
//   fieldNames: ['name', 'image', 'created_at', 'email'],
//   linkPage: '/companies',
// }
