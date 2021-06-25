import classnames from 'classnames'
import React from 'react'
import { ValidationErrorType } from './ValidationErrorType'
import { VscError } from 'react-icons/vsc'
import Swal from 'sweetalert2'

export interface ValidationErrorProps {
  content: ValidationErrorType[]
  title?: string
  className?: string
}

export const ValidationError: React.FC<ValidationErrorProps> = ({
  content = [],
  className = '',
  title = 'Ocorreu um erro de validação',
}) => {
  return (
    <div
      data-testid='validation-validation'
      className={classnames(`s lg:card-side  rounded-lg card  ${className}`)}
    >
      <div className='flex flex-col items-center card-body '>
        <VscError size={50} color='red' />

        <h2 className='card-title'>{title}</h2>
        {content.map((error, index) => {
          return <p key={index}>{`${error?.path} : ${error?.message} `}</p>
        })}
        <div className='card-actions'>
          <button
            className='swal2-confirm btn btn-primary'
            onClick={() => {
              Swal.close()
            }}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}
