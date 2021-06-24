import React from 'react'
import { FaSpinner } from 'react-icons/fa'

function Loading({ title = 'Loading', className = '' }) {
  return (
    <div className='block text-primary'>
      <FaSpinner className={`animate-spin ${className}`} title={title} />
    </div>
  )
}

export default Loading
