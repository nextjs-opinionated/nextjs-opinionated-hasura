import classnames from 'classnames'
import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'

export interface FormInputColorProps extends FormBaseProps {
  openOnFocus?: boolean
  showHexColorPicker?: boolean
  alwaysShowHexColorPicker?: boolean
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
  openOnFocus = true,
  showHexColorPicker = true,
  alwaysShowHexColorPicker = false,
}) => {
  const [opened, openedSet] = useState(false)
  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />

        <div>
          <div className='font-medium'>
            <div className='flex items-center'>
              {/* input color */}
              <input
                type='color'
                disabled={disabled}
                value={watch(name) || defaultValue}
                onChange={(ev) => setValue(name, ev.target.value)}
                placeholder={`${placeholder || label || name}`}
                className={classnames(`cursor-pointer w-7 h-7 ${className}`, {
                  'input-error': validationErrors?.[name],
                })}
              />

              {/* main input (REGISTER) */}
              <input
                type='text'
                disabled={disabled}
                defaultValue={defaultValue}
                maxLength={7}
                {...register(name)}
                onFocus={() => {
                  if (openOnFocus === true) {
                    openedSet(true)
                  }
                }}
                onBlur={() => {
                  if (openOnFocus === true) {
                    openedSet(false)
                  }
                }}
                placeholder={`${placeholder || label || name}`}
                className={classnames(
                  `input input-bordered input-sm mx-2 w-[7.6rem] font-mono ${className}`,
                  {
                    'input-error': validationErrors?.[name],
                    'w-[5.6rem]': alwaysShowHexColorPicker,
                  }
                )}
              />

              {/* toggle HexColorPicker */}
              {showHexColorPicker && !alwaysShowHexColorPicker && (
                <button
                  className={classnames('btn btn-sm', {
                    'btn-ghost': !opened,
                  })}
                  type='button'
                  onClick={() => openedSet((v) => !v)}
                >
                  {opened ? <FaCaretUp /> : <FaCaretDown />}
                </button>
              )}
            </div>
          </div>

          {/* HexColorPicker */}
          {showHexColorPicker && (
            <div
              className={classnames('mt-2 ml-1', {
                hidden: !alwaysShowHexColorPicker && !opened,
              })}
            >
              <HexColorPicker color={watch(name)} onChange={(color) => setValue(name, color)} />
            </div>
          )}
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
