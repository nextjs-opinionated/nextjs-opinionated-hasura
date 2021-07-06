import React from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Table } from './Table'
import { act, fireEvent, waitFor } from '@testing-library/react'

describe('Table Component', () => {
  it('should render a component', async () => {
    const render = TestingLib.render(
      <Table
        data={[
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
        ]}
        fieldNames={['name', 'email']}
      />
    )
    expect(render.getByText('name')).toHaveClass('text-base-300')
  })
  it('should render a component with different button className ', async () => {
    const render = TestingLib.render(
      <Table
        data={[
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
        ]}
        fieldNames={['name', 'email']}
        className='table-compact'
      />
    )
    expect(render.getByRole('table')).toHaveClass('table-compact')
  })
  it('should render a component with different LinkPage ', async () => {
    const render = TestingLib.render(
      <Table
        data={[
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
        ]}
        fieldNames={['name', 'email']}
        linkPage='/companies'
      />
    )
    expect(render.getByText('Empresa 1')).toHaveClass('pl-0 underline btn btn-link btn-xs')
  })
  it("shouldn't render a component without PageLink ", async () => {
    const render = TestingLib.render(
      <Table
        data={[
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
        ]}
        fieldNames={['name', 'email']}
      />
    )
    expect(render.getByText('Empresa 1')).not.toHaveClass('pl-0 underline btn btn-link btn-xs')
  })
  it("shouldn't render a component when id does not exist ", async () => {
    const render = TestingLib.render(
      <Table
        data={[
          {
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
        ]}
        fieldNames={['name', 'email']}
        linkPage='/companies'
      />
    )
    expect(render.getByText('Empresa 1')).not.toHaveClass('pl-0 underline btn btn-link btn-xs')
    expect(render.getByText('Empresa 2')).toHaveClass('pl-0 underline btn btn-link btn-xs')
  })
  it("should call a function 'OnDelete' when click on delete button ", async () => {
    const mockCallback = jest.fn()
    const render = TestingLib.render(
      <Table
        data={[
          {
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
        ]}
        fieldNames={['name', 'email']}
        linkPage='/companies'
        OnDelete={mockCallback}
      />
    )
    const button = await waitFor(() => render.getAllByRole('button'))
    act(() => {
      fireEvent.click(button[0])
    })
    expect(mockCallback).toHaveBeenCalled()
  })
  it('should render a component with image  ', async () => {
    const render = TestingLib.render(
      <Table
        data={[
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
        ]}
        fieldNames={['image', 'name', 'email']}
        linkPage='/companies'
      />
    )
    expect(render.getByText('image')).toBeInTheDocument()
  })
})
