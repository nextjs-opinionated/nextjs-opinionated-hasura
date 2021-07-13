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
    <div data-testid='validation-validation' className={`my-2 ${className}`}>
      {content.map((error, index) => {
        return (
          <p
            className='my-1 text-base-content'
            key={`val_${index}`}
          >{`${error?.path} : ${error?.message}`}</p>
        )
      })}
    </div>
  )
}
