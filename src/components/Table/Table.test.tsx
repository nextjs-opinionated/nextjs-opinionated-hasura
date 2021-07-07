import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Table } from './Table'
import { act, fireEvent, waitFor } from '@testing-library/react'
import Link from 'next/link'
import dayjs from 'dayjs'
import { FaUserAlt } from 'react-icons/fa'

const TABLE_DATA = [
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

const FIELDS = {
  Name: (item) => (
    <Link href={`companies/${item.id}`}>
      <a className='pl-0 underline btn btn-link btn-xs'> {item.name}</a>
    </Link>
  ),
  'E-mail': (item) => item.email,
  'Created At': (item) => dayjs(item.created_at).format('YYYY-MM-DD'),
}

describe('Table Component', () => {
  it('should render a component', async () => {
    const render = TestingLib.render(<Table data={TABLE_DATA} fields={FIELDS} />)
    expect(render.getByText('Empresa 4')).toBeInTheDocument()
  })

  it('fieldNames: will change columns', async () => {
    const render = TestingLib.render(<Table data={TABLE_DATA} fields={FIELDS} />)
    expect(render.getByText('Empresa 4')).toBeInTheDocument()
    expect(render.getByText('empresa4@hotmail.com')).toBeInTheDocument()
    expect(render.queryByText('2021-06-30T20:22:57.057824+00:00')).toBeNull()
  })

  it('should render a component with different button className ', async () => {
    const render = TestingLib.render(
      <Table data={TABLE_DATA} fields={FIELDS} className='table-compact' />
    )
    expect(render.getByRole('table')).toHaveClass('table-compact')
  })

  it('urlPrefix will be on id column', async () => {
    const render = TestingLib.render(<Table data={TABLE_DATA} fields={FIELDS} />)
    expect(render.getByText('Empresa 1')).toHaveProperty(
      'href',
      'http://localhost/companies/cd89d348-5832-44d2-9ef7-829c26b11974'
    )
  })

  it('without urlPrefix do not renders a Link', async () => {
    const render = TestingLib.render(<Table data={TABLE_DATA} fields={FIELDS} />)
    expect(render.getByText('Empresa 1')).not.toHaveProperty(
      'href',
      'http://localhost/cd89d348-5832-44d2-9ef7-829c26b11974'
    )
  })

  it("shouldn't render a component when id does not exist", async () => {
    const render = TestingLib.render(
      <Table
        data={[
          {
            name: 'Empresa 1',
            email: 'empresa1@hotmail.com',
            created_at: '2021-04-06T21:32:11.33154+00:00',
            customers: [],
          },
        ]}
        fields={FIELDS}
      />
    )
    expect(render.getByText('Empresa 1')).not.toHaveProperty(
      'href',
      'http://localhost/companies/cd89d348-5832-44d2-9ef7-829c26b11974'
    )
  })

  it("should call a function 'OnDelete' when click on delete button ", async () => {
    global.window.scrollTo = () => {
      //
    }
    const mockCallback = jest.fn()
    const render = TestingLib.render(
      <Table data={TABLE_DATA} fields={FIELDS} onDelete={mockCallback} />
    )

    // show confirmation
    const button = await waitFor(() =>
      render.getByTestId('btn-delete-cd89d348-5832-44d2-9ef7-829c26b11974')
    )
    act(() => {
      fireEvent.click(button)
    })

    // click on Yes
    const buttonConfirm = await waitFor(() => render.getByText('Yes'))
    act(() => {
      fireEvent.click(buttonConfirm)
    })

    expect(render.queryByText('Yes')).toBeNull()
  })

  it('should render a component with image  ', async () => {
    const render = TestingLib.render(
      <Table
        data={TABLE_DATA}
        fields={{
          ...FIELDS,
          Imagem: (item) => (
            <div className='flex items-center space-x-3'>
              {item.image ? (
                <div className='avatar'>
                  <div className='w-12 h-12 mask mask-squircle'>
                    <img src={item.image} />
                    <img src={item.image} />
                  </div>
                </div>
              ) : (
                <div className='flex flex-row items-center justify-center w-12 h-12 mask mask-squircle bg-base-300'>
                  <FaUserAlt size={25} />
                </div>
              )}
            </div>
          ),
        }}
      />
    )
    expect(render.getByText('Imagem')).toBeInTheDocument()
  })
})
