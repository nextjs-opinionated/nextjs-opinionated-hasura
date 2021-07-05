import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'

export interface TableProps {
  content: any
  className?: string
  selectedItems: string[]
  buttonSelectedItemName: string
  linkPage: string
}

export const Table: React.FC<TableProps> = ({
  content,
  selectedItems,
  buttonSelectedItemName,
  className = '',
  linkPage,
}) => {
  return (
    <div className='overflow-x-auto'>
      <table className={classnames(`table  w-full ${className}`)}>
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
