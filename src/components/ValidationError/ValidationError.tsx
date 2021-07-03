import React from 'react'
import { ValidationErrorType } from './ValidationErrorType'

export interface ValidationErrorProps {
  content: ValidationErrorType[]
  className?: string
}

export const ValidationError: React.FC<ValidationErrorProps> = ({
  content = [],
  className = '',
}) => {
  return (
    <div className={`my-2 ${className}`}>
      {content.map((error, index) => {
        return (
          <p
            className='my-1 text-base-content'
            key={index}
          >{`${error?.path} : ${error?.message}`}</p>
        )
      })}
    </div>
  )
}
