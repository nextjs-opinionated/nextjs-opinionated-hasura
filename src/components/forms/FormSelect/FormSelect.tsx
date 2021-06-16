import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'

export interface SelectProps extends FormBaseProps {
  options: { value: string; label: string }[]
  emptyMessage?: string
}

export const FormSelect: React.FC<SelectProps> = ({
  register,
  options,
  name,
  className,
  label,
  labelDescription,
  defaultValue,
  placeholder,
  validationErrors,
  emptyMessage = null,
}) => {
  const [isEmpty, isEmptySet] = useState(true)
  useEffect(() => {
    if (options?.length > 0) {
      isEmptySet(false)
    }
  }, [options])

  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <select
          {...register(name)}
          defaultValue={defaultValue || '__EMPTY_VALUE__'}
          data-testid={name}
          className={classnames(`font-normal select select-bordered w-full ${className}`, {
            'select-error': validationErrors?.[name],
            'text-neutral': isEmpty,
          })}
        >
          {isEmpty ? (
            <>
              <option value='__EMPTY_VALUE__' disabled hidden className='text-base-300'>
                {emptyMessage}
              </option>
            </>
          ) : (
            <>
              <option value='__EMPTY_VALUE__' disabled>{`${placeholder || label || name}`}</option>
              {Object.values(options).map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </>
          )}
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
