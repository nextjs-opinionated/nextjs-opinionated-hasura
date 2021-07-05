import classnames from 'classnames'
import React, { useCallback, useEffect, useState } from 'react'

export interface PaginationProps {
  totalPages: number
  currentPage: number
  className?: string
  previousButtonTitle?: string
  nextButtonTitle?: string
  OnPageSet?: (string) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  className = '',
  totalPages = 1,
  currentPage = 1,
  OnPageSet,
  previousButtonTitle = 'Previous',
  nextButtonTitle = 'Next',
}) => {
  const [listNumberOfPages, listNumberOfPagesSet] = useState([])

  const handlePagination = useCallback(() => {
    let startOfPageOnList
    let endOfPageOnList

    if (currentPage === 1) {
      startOfPageOnList = currentPage
    } else if (currentPage === 2) {
      startOfPageOnList = currentPage - 1
    } else {
      startOfPageOnList = currentPage - 2
    }

    if (totalPages === currentPage) {
      endOfPageOnList = totalPages
    } else if (totalPages === currentPage + 1) {
      endOfPageOnList = currentPage + 1
    } else {
      endOfPageOnList = currentPage + 2
    }
    const listOfNumbers = []
    for (let i = startOfPageOnList; i <= endOfPageOnList; i++) {
      listOfNumbers.push(i)
    }

    listNumberOfPagesSet(listOfNumbers)
  }, [currentPage, totalPages])

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      OnPageSet(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      OnPageSet(currentPage + 1)
    }
  }

  const handlePage = (page) => {
    OnPageSet(page)
  }

  useEffect(() => {
    handlePagination()
  }, [currentPage, handlePagination])
  return (
    <div data-testid='button' className='btn-group '>
      <button
        onClick={() => {
          handlePreviousPage()
        }}
        className={classnames(`btn ${className}`)}
      >
        {previousButtonTitle}
      </button>
      {listNumberOfPages.map((item) => (
        <button
          key={item}
          onClick={() => {
            handlePage(item)
          }}
          className={classnames(`btn ${className}`, {
            'btn-active': item === currentPage,
          })}
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => {
          handleNextPage()
        }}
        className={classnames(`btn ${className}`)}
      >
        {nextButtonTitle}
      </button>
    </div>
  )
}
