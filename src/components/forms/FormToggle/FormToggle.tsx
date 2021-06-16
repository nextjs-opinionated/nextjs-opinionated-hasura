import React from 'react'
import { FormBaseProps } from '../FormBaseProps'

export const FormToggle: React.FC<FormBaseProps> = ({
  label,
  name,
  disabled,
  register,
  defaultValue,
}) => {
  return (
    <div className='form-control'>
      <label className='justify-start cursor-pointer label'>
        <span className='font-bold label-text'>{label || name}</span>
        <div>
          <input
            type='checkbox'
            defaultChecked={defaultValue}
            {...register(name)}
            disabled={disabled}
            className='toggle'
          />
          <span className='ml-4 toggle-mark'></span>
        </div>
      </label>
    </div>
  )
}
