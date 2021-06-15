import React, { InputHTMLAttributes, useState } from 'react'
import { FormBaseProps } from '../FormBaseProps'

export interface FormToggleProps extends FormBaseProps {
  type?: InputHTMLAttributes<HTMLInputElement>['type']
}

export const FormToggle: React.FC<FormToggleProps> = ({
  label,
  type = 'checkbox',
  name,
  disabled,
}) => {
  const [checked, setChecked] = useState(false)

  function toggle() {
    setChecked(checked === false ? true : false)
    console.log(checked)
  }

  return (
    <div className='p-6 card bordered'>
      <div className='form-control'>
        <label className='cursor-pointer label' htmlFor={name}>
          <span className='font-bold label-text'>{label || name}</span>
          <div>
            <input
              type={type}
              id='toggleSwitch'
              defaultChecked={checked}
              disabled={disabled}
              className='toggle'
            />
            <span className='toggle-mark' onClick={toggle}></span>
          </div>
        </label>
      </div>
    </div>
  )
}
