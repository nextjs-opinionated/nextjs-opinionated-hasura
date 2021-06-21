import classnames from 'classnames'
import React, { InputHTMLAttributes } from 'react'
import { HexColorPicker } from 'react-colorful'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'

export interface FormInputColorProps extends FormBaseProps {
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  setValue: any
  watch: any
}

export const FormInputColor: React.FC<FormInputColorProps> = ({
  label,
  labelDescription,
  name,
  placeholder,
  register,
  watch,
  setValue,
  defaultValue,
  validationErrors,
  className = '',
  disabled,
}) => {
  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <div className='flex items-center'>
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
          <input
            type='text'
            disabled={disabled}
            value={watch(name)}
            maxLength={7}
            onChange={(ev) => setValue(name, ev.target.value)}
            placeholder={`${placeholder || label || name}`}
            className={classnames(`input input-bordered ${className}`, {
              'input-error': validationErrors?.[name],
            })}
          />
        </div>
        <div className='flex items-center'>
          <HexColorPicker color={watch(name)} onChange={(color) => setValue(name, color)} />
        </div>
        {validationErrors?.[name] && (
          <label className='label'>
            <span className='label-text-alt text-error'>{validationErrors?.[name]?.message}</span>
          </label>
        )}
      </div>
    </div>
  )
}
