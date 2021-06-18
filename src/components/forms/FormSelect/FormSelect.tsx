import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'

export const EMPTY_SELECT_OPTION_VALUE = '__EMPTY_SELECT_OPTION_VALUE__'

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
  disabled,
}) => {
  const [isEmpty, isEmptySet] = useState(true)
  useEffect(() => {
    if (options?.length > 0) {
      isEmptySet(false)
    }
  }, [options?.length])

  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <select
          {...register(name)}
          defaultValue={defaultValue || EMPTY_SELECT_OPTION_VALUE}
          data-testid={name}
          disabled={disabled}
          className={classnames(`font-normal select select-bordered w-full ${className}`, {
            'select-error': validationErrors?.[name],
            'text-neutral': isEmpty,
          })}
        >
          <option value={EMPTY_SELECT_OPTION_VALUE} disabled>{`${
            isEmpty ? emptyMessage || '' : placeholder || label || name
          }`}</option>
          {Object.values(options).map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
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
