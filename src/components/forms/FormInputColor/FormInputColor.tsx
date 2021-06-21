import classnames from 'classnames'
import React, { InputHTMLAttributes, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
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
  const [opened, openedSet] = useState(false)
  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />

        <div className='border w-60 collapse rounded-box border-base-300'>
          <input type='checkbox' checked={opened} />
          <div className='text-xl font-medium collapse-title'>
            <div className='flex items-center'>
              <input
                type='color'
                defaultValue={defaultValue}
                disabled={disabled}
                {...register(name)}
                placeholder={`${placeholder || label || name}`}
                className={classnames(`w-7 h-7 ${className}`, {
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
                className={classnames(
                  `input input-bordered input-sm ml-1 w-[5.4rem] font-mono ${className}`,
                  {
                    'input-error': validationErrors?.[name],
                  }
                )}
              />
              <button
                type='button'
                onClick={() => openedSet((v) => !v)}
                className='outline-none appearance-none ml-14'
              >
                {opened ? <FaCaretUp /> : <FaCaretDown />}
              </button>
            </div>
          </div>
          <div className='collapse-content'>
            <HexColorPicker color={watch(name)} onChange={(color) => setValue(name, color)} />
          </div>
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
