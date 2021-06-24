import classnames from 'classnames'
import React from 'react'
import { ValidationErrorType } from './ValidationErrorType'
import { VscError } from 'react-icons/vsc'

export interface ValidationErrorProps {
  content: ValidationErrorType[]
  title?: string
  className?: string
  ShowModal: (shows: boolean) => void
}

export const ValidationError: React.FC<ValidationErrorProps> = ({
  content = [],
  className = '',
  ShowModal,
  title = 'Ocorreu um erro de validação',
}) => {
  return (
    <div
      data-testid='validation-validation'
      className={classnames(
        `shadow-2xl  lg:card-side bordered bg-base-200 rounded-lg card  ${className}`
      )}
    >
      <div className='flex flex-col items-center card-body'>
        <VscError size={50} color='red' />

        <h2 className='card-title'>{title}</h2>
        {content.map((error, index) => {
          return <p key={index}>{`${error?.path} : ${error?.message} `}</p>
        })}
        <div className='card-actions'>
          <button className='btn btn-primary' onClick={() => ShowModal(false)}>
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}
