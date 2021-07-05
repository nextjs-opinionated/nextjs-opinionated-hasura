import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'

export interface TableProps {
  data: any[]
  className?: string
  fieldNames: string[]
  linkPage: string
}

export const Table: React.FC<TableProps> = ({ data, fieldNames, className = '', linkPage }) => {
  return (
    <div className='overflow-x-auto'>
      <table className={classnames(`table w-full ${className}`)}>
        <thead>
          <tr>
            {fieldNames.map((fieldName, index) => (
              <th key={`${index}-thead`} className=' text-base-300'>
                {fieldName}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.length > 0 &&
            data?.map((value, index) => (
              <tr key={`${index}-tr`}>
                {fieldNames.map((fieldName, index) => (
                  <td key={`${index}-td`}>
                    {index === 0 && linkPage ? (
                      <Link href={`${linkPage}/${value.id}`}>
                        <a className='pl-0 btn btn-link btn-xs'>{value[fieldName]} </a>
                      </Link>
                    ) : (
                      value[fieldName]
                    )}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
