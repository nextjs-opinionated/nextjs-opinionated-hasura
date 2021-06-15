import classnames from 'classnames'
import React from 'react'
import { FormBaseProps } from './FormBaseProps'

export const FormLabel: React.FC<Pick<FormBaseProps, 'name' | 'label' | 'labelDescription'>> = ({
  label: label,
  name,
  labelDescription,
}) => {
  return (
    <>
      <label
        className={classnames('label', {
          'p-0': labelDescription,
        })}
        htmlFor={name}
      >
        <span className='font-bold label-text'>{label || name}</span>
      </label>
      {labelDescription && (
        <span className='pb-2 label-text-alt text-neutral'>{labelDescription}</span>
      )}
    </>
  )
}
