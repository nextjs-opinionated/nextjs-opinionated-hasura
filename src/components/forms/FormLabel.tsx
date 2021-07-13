import classnames from 'classnames'
import React from 'react'
import { FormBaseProps } from './FormBaseProps'

export const FormLabel: React.FC<Pick<FormBaseProps, 'name' | 'label' | 'labelDescription'>> = ({
  label,
  name,
  labelDescription,
}) => {
  return (
    <>
      <label
        className={classnames('label', {
          'py-0': labelDescription,
        })}
        htmlFor={name}
      >
        <span className='font-bold label-text'>{label || name}</span>
      </label>
      {labelDescription && (
        <span className='pb-2 pl-1 label-text-alt text-neutral'>{labelDescription}</span>
      )}
    </>
  )
}
