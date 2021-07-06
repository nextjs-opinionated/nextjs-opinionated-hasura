import classnames from 'classnames'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { Pagination } from '../Pagination/Pagination'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export interface TableProps {
  data: any[]
  className?: string
  fieldNames: string[]
  urlPrefix?: string
  pageSize?: number
  currentPage?: number
  totalItems?: number
  onPageSet?: (number) => void
  onDelete?: (id: string) => Promise<void>
  deleteConfirmationMessage?: string
  deleteConfirmationYesLabel?: string
  deleteConfirmationNoLabel?: string
}

export const Table: React.FC<TableProps> = ({
  data,
  fieldNames,
  className = '',
  urlPrefix,
  pageSize = 5,
  currentPage = 1,
  totalItems,
  onPageSet,
  onDelete,
  deleteConfirmationMessage = 'Do you really want to delete?',
  deleteConfirmationYesLabel = 'Yes',
  deleteConfirmationNoLabel = 'No',
}) => {
  const [totalPage, totalPageSet] = useState<number>(0)

  useEffect(() => {
    if (totalItems) {
      const totalPages = Math.ceil(totalItems / pageSize)
      totalPageSet(totalPages)
    }
  }, [pageSize, totalItems, totalPage])

  return (
    <div className='flex flex-col items-center'>
      <div className='overflow-x-auto'>
        <table className={classnames(`table w-full ${className}`)}>
          <thead>
            <tr>
              {fieldNames.map((fieldName, index) => (
                <th key={`${index}-thead`} className=' text-base-content'>
                  {fieldName}
                </th>
              ))}
              {onDelete && <th className=' text-base-content'>&nbsp;</th>}
            </tr>
          </thead>

          <tbody>
            {data?.length > 0 &&
              data?.map((value, index) => (
                <tr key={`${index}-tr`}>
                  {fieldNames.map((fieldName, index) => (
                    <td key={`${index}-td`}>
                      {/* the first field is mandatory for the detail's link and should have 'id' field */}
                      {index === 0 && urlPrefix && value.id ? (
                        <Link href={`${urlPrefix}/${value.id}`}>
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

                  {onDelete && (
                    <td>
                      <button
                        data-testid={`btn-delete-${value?.id}`}
                        onClick={async () => {
                          const SwalReactAlert = withReactContent(Swal)
                          const swalConfirmDelete = await SwalReactAlert.fire({
                            html: <p>{deleteConfirmationMessage}</p>,
                            showCloseButton: true,
                            showDenyButton: true,
                            denyButtonText: deleteConfirmationNoLabel,
                            confirmButtonText: deleteConfirmationYesLabel,
                            icon: 'question',
                          })

                          if (swalConfirmDelete.isConfirmed) {
                            await onDelete(value.id)
                          }
                        }}
                      >
                        <MdDelete size={25} />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {onPageSet && (
        <Pagination
          className='my-2'
          totalPages={totalPage}
          currentPage={currentPage}
          onPageSet={(newCurrentPage) => {
            onPageSet(newCurrentPage)
          }}
        />
      )}
    </div>
  )
}
