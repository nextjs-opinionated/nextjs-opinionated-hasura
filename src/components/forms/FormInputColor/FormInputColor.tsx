import classnames from 'classnames'
import React, { InputHTMLAttributes } from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'

export interface FormInputColorProps extends FormBaseProps {
  type?: InputHTMLAttributes<HTMLInputElement>['type']
}

export const FormInputColor: React.FC<FormInputColorProps> = ({
  label,
  labelDescription,
  name,
  placeholder,
  register,
  defaultValue,
  validationErrors,
  className = '',
  disabled,
}) => {
  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <input
          type='color'
          defaultValue={defaultValue}
          disabled={disabled}
          {...register(name)}
          placeholder={`${placeholder || label || name}`}
          className={classnames(`w-5 h-5 ${className}`, {
            'input-error': validationErrors?.[name],
          })}
        />
        {/* <span className='pl-1 text-sm font-bold'>{color}</span> */}
        {validationErrors?.[name] && (
          <label className='label'>
            <span className='label-text-alt text-error'>{validationErrors?.[name]?.message}</span>
          </label>
        )}
      </div>
    </div>
  )
}
