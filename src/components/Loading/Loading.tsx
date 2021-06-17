import React from 'react'
import { FaSpinner } from 'react-icons/fa'

function Loading({ title, className }) {
  return (
    <div className='block text-primary'>
      <FaSpinner className={`w-5 h-5 animate-spin ${className}`} title={title} />
    </div>
  )
}

export default Loading
