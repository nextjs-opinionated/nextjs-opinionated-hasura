import classnames from 'classnames'
import React from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'

export interface SelectProps extends FormBaseProps {
  options:string[]
}

  

export const FormSelect: React.FC<SelectProps > = ({
   register, options, name,className,label,labelDescription,   defaultValue,
   validationErrors,
}) => {
 
  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <select {...register(name)}    defaultValue={defaultValue}
          className={classnames(`select select-bordered w-full ${className}`, {
            'input-error': validationErrors?.[name],
          })}>
      {options.map((value,index) => (
        <option selected={defaultValue && defaultValue==index} key={index} value={index}>
          {value}
        </option>
      ))}
    </select>
        {validationErrors?.[name] && (
          <label className='label'>
            <span className='label-text-alt text-error'>{validationErrors?.[name]?.message}</span>
          </label>
        )}
      </div>
      </div>
  )
}
