import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { Pagination } from '../Pagination/Pagination'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import _ from 'lodash'

export type TableProps<LINE_TYPE> = {
  data: LINE_TYPE[]
  fields: { [key: string]: (item: any) => React.ReactNode }
  className?: string
  pageSize?: number
  currentPage?: number
  totalItems?: number
  onPageSet?: (number) => void
  onDelete?: (id: string) => Promise<void>
  deleteConfirmationMessage?: string
  deleteConfirmationYesLabel?: string
  deleteConfirmationNoLabel?: string
}

export function Table<LINE_TYPE>(props: TableProps<LINE_TYPE & { id?: string }>) {
  const {
    fields,
    data,
    className = '',
    pageSize = 5,
    currentPage = 1,
    totalItems,
    onPageSet,
    onDelete,
    deleteConfirmationMessage = 'Do you really want to delete?',
    deleteConfirmationYesLabel = 'Yes',
    deleteConfirmationNoLabel = 'No',
  } = props

  const [totalPage, totalPageSet] = useState<number>(0)

  useEffect(() => {
    if (totalItems) {
      const totalPages = Math.ceil(totalItems / pageSize)
      totalPageSet(totalPages)
    }
  }, [pageSize, totalItems, totalPage])
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto'>
        <table className={classnames(`table w-full ${className}`)}>
          <thead>
            <tr>
              {_.map(fields, (value, key) => (
                <th key={`${key}-thead`} className=' text-base-content'>
                  {key}
                </th>
              ))}
              {onDelete && <th className=' text-base-content'>&nbsp;</th>}
            </tr>
          </thead>

          <tbody>
            {data?.length > 0 &&
              data?.map((item, index) => (
                <tr key={`${index}-tr`}>
                  {_.map(fields, (value, key) => (
                    <td key={`${key}-tr`} className=' text-base-content'>
                      {value(item)}
                    </td>
                  ))}

                  {onDelete && (
                    <td>
                      <button
                        data-testid={`btn-delete-${item.id}`}
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
                            await onDelete(item.id || '')
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
        <div className='self-center'>
          <Pagination
            className='my-2'
            totalPages={totalPage}
            currentPage={currentPage}
            onPageSet={(newCurrentPage) => {
              onPageSet(newCurrentPage)
            }}
          />
        </div>
      )}
    </div>
  )
}
