import classnames from 'classnames'
import React, { InputHTMLAttributes } from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'

export interface FormInputProps extends FormBaseProps {
  type?: InputHTMLAttributes<HTMLInputElement>['type']
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  labelDescription,
  type = 'text',
  name,
  placeholder,
  register,
  defaultValue,
  validationErrors,
  className,
  disabled,
}) => {
  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <input
          type={type}
          defaultValue={defaultValue}
          disabled={disabled}
          {...register(name)}
          placeholder={`${placeholder || label || name}`}
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
