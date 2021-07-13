import classnames from 'classnames'
import React from 'react'

export interface FormTextareaProps {
  label?: string
  name: string
  register: any
  defaultValue: any
  validationErrors: any
  className?: string
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  name,
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
        <textarea
          defaultValue={defaultValue}
          {...register(name)}
          placeholder={`${name}...`}
          className={classnames(`textarea textarea-bordered h-24 ${className}`, {
            'textarea-error': validationErrors?.[name],
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
