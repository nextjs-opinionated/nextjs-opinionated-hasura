import classnames from 'classnames'
import React from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'

export interface SelectProps extends FormBaseProps {
  options: { id: string; value: string }[]
}

  

export const FormSelect: React.FC<SelectProps > = ({
   register, options, name,className,label,labelDescription,   defaultValue,placeholder,
   validationErrors,
}) => {
 
  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <select title="select" {...register(name)}    defaultValue={defaultValue}
          className={classnames(`select select-bordered w-full ${className}`, {
            'input-error': validationErrors?.[name],
          })}>
        <option>
         {`${placeholder || label || name}`}
       </option>
      {Object.values(options).map((value) => (
       
        <option selected={defaultValue && defaultValue==value.id} key={value.id} value={value.value}>
          {value.value}
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
