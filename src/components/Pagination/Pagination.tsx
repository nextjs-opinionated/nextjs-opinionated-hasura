import classnames from 'classnames'
import React, { useCallback, useEffect, useState } from 'react'

export interface PaginationProps {
  totalPage?: number
  currentPage?: number
  className?: string
  previousButtonTitle?: string
  nextButtonTitle?: string
  OnPageSet: (number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  className = '',
  totalPage = 1,
  currentPage = 1,
  OnPageSet,
  previousButtonTitle = 'Previous',
  nextButtonTitle = 'Next',
}) => {
  const [listNumberOfPages, listNumberOfPagesSet] = useState<number[]>([])

  const handlePagination = useCallback(() => {
    let startOfPageOnList = 0
    let endOfPageOnList = 0

    if (currentPage === 1) {
      startOfPageOnList = currentPage
    } else if (currentPage === 2) {
      startOfPageOnList = currentPage - 1
    } else {
      startOfPageOnList = currentPage - 2
    }

    if (totalPage === currentPage) {
      endOfPageOnList = totalPage
    } else if (totalPage === currentPage + 1) {
      endOfPageOnList = currentPage + 1
    } else {
      endOfPageOnList = currentPage + 2
    }
    const listOfNumbers: number[] = []
    for (let i = startOfPageOnList; i <= endOfPageOnList; i++) {
      listOfNumbers.push(i)
    }

    listNumberOfPagesSet(listOfNumbers)
  }, [currentPage, totalPage])

  const handlePreviusPage = () => {
    OnPageSet(currentPage - 1)
  }

  const handleNextPage = () => {
    OnPageSet(currentPage + 1)
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
          handlePreviusPage()
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
