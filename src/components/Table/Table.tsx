import classnames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'

export interface TableProps {
  data: any[]
  className?: string
  fieldNames: string[]
  linkPage?: string
  OnDelete?: (id: string) => void
}

export const Table: React.FC<TableProps> = ({
  data,
  fieldNames,
  className = '',
  linkPage,
  OnDelete,
}) => {
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
                    {/* the first field is mandatory for the detail's link and should have 'id' field */}
                    {index === 0 && linkPage && value.id ? (
                      <Link href={`${linkPage}/${value.id}`}>
                        <a className='pl-0 underline btn btn-link btn-xs'>
                          {fieldName === 'image' ? (
                            <div className='flex items-center space-x-3'>
                              {value[fieldName] ? (
                                <div className='avatar'>
                                  <div className='w-12 h-12 mask mask-squircle'>
                                    <img src={value[fieldName]} />
                                  </div>
                                </div>
                              ) : (
                                <div className='flex flex-row items-center justify-center w-12 h-12 mask mask-squircle bg-base-300'>
                                  <FaUserAlt size={25} />
                                </div>
                              )}
                            </div>
                          ) : (
                            value[fieldName]
                          )}
                        </a>
                      </Link>
                    ) : fieldName === 'image' ? (
                      <div className='flex items-center space-x-3'>
                        {value[fieldName] ? (
                          <div className='avatar'>
                            <div className='w-12 h-12 mask mask-squircle'>
                              <img src={value[fieldName]} alt={fieldName} />
                            </div>
                          </div>
                        ) : (
                          <div className='flex flex-row items-center justify-center w-12 h-12 mask mask-squircle bg-base-300'>
                            <FaUserAlt size={25} />
                          </div>
                        )}
                      </div>
                    ) : (
                      value[fieldName]
                    )}
                  </td>
                ))}
                {OnDelete && (
                  <td
                    key={`${index}-del`}
                    onClick={() => {
                      OnDelete(value.id)
                    }}
                  >
                    <button>
                      <MdDelete size={25} />
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
