import React from 'react'
import { FaSpinner } from 'react-icons/fa'

function Loading({ title = 'Loading', className = '' }) {
  return (
    <div className='absolute top-0 left-0 z-[1000] flex w-full h-screen'>
      <div className='flex items-center justify-center m-auto text-primary'>
        <FaSpinner className={`animate-spin ${className}`} title={title} />
      </div>
    </div>
  )
}

export default Loading
