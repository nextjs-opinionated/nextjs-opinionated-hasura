import React, { InputHTMLAttributes, useState } from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'
import { HexColorPicker } from 'react-colorful'
import styles from './FormInputColor.module.css'

export interface FormInputColorProps extends FormBaseProps {
  type?: InputHTMLAttributes<HTMLInputElement>['type']
}

export const FormInputColor: React.FC<FormInputColorProps> = ({
  label,
  labelDescription,
  name,
  register,
  defaultValue,
}) => {
  const [color, setColor] = useState('#000000')
  const [hexColor, setHexColorPicker] = useState('#aabbcc')

  return (
    <div className='col-span-6 sm:col-span-4'>
      <p className='my-3 text-base font-bold'>First color picker:</p>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <div className='flex'>
          <input
            type='color'
            defaultValue={defaultValue}
            {...register(name)}
            onChange={(e) => setColor(e.target.value)}
            id={styles.colorInput}
          />
          <span className='pl-1 text-sm font-bold'>{color}</span>
        </div>
      </div>

      <div className='mt-5'>
        <div className='form-control'>
          <p className='my-3 text-base font-bold'>Another color picker:</p>
          <FormLabel name={name} label={label} labelDescription={labelDescription} />
          <div className='flex items-center my-2'>
            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: hexColor }}></div>
            <p className='pl-1 text-sm font-bold'>{hexColor}</p>
          </div>
          <HexColorPicker color={hexColor} onChange={setHexColorPicker} />
        </div>
      </div>
    </div>
  )
}
