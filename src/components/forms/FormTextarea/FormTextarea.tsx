import classnames from 'classnames'
import React from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'

export const FormTextarea: React.FC<FormBaseProps> = ({
  label: label,
  name,
  register,
  defaultValue,
  validationErrors,
  className,
  labelDescription,
}) => {
  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
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
