import classnames from 'classnames'
import React, { InputHTMLAttributes } from 'react'

export interface FormInputProps {
  label?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  name: string
  register: any
  defaultValue?: any
  validationErrors: any
  className?: string
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  name,
  placeholder,
  register,
  defaultValue,
  validationErrors,
  className,
}) => {
  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <label className='label' htmlFor={name}>
          <span className='font-bold label-text'>{label || name}</span>
        </label>
        <input
          type={type}
          defaultValue={defaultValue}
          {...register(name)}
          placeholder={`${placeholder || label || name}...`}
          className={classnames(`input input-bordered ${className}`, {
            'input-error': validationErrors?.[name],
          })}
        />
        {validationErrors?.[name] && (
          <label className='label'>
            <span className='label-text-alt text-error'>{validationErrors?.[name]?.message}</span>
          </label>
        )}
      </div>
    </div>
  )
}
