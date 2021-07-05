import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'

export interface TableProps {
  content?: any
  className?: string
  selectedItems: string[]
  buttonSelectedItemName: string
  linkPage: string
}

export const Table: React.FC<TableProps> = ({
  content = {
    companies: {
      id: 'cd89d348-5832-44d2-9ef7-829c26b11974',
      name: 'Cia Marítima',
      toggle: true,
      image_url: '',
    },
  },
  selectedItems = ['name'],
  buttonSelectedItemName = 'name',
  className = '',
  linkPage,
}) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full table-compact'>
        <thead>
          <tr>
            {selectedItems.map((item, index) => (
              <th key={`${index}-thead`} className=' text-base-300'>
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {content?.companies.length > 0 &&
            content?.companies.map((company, companyIndex) => (
              <tr key={`${companyIndex}-tbody`}>
                {selectedItems.map((item, index) => {
                  {
                    return buttonSelectedItemName == item ? (
                      <Link href={linkPage}>
                        <td>
                          <button className='pl-0 btn btn-link btn-xs'>{company[item]} </button>
                        </td>
                      </Link>
                    ) : (
                      <td key={`${index}-content`}>{company[item]}</td>
                    )
                  }
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
