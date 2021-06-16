import React, { InputHTMLAttributes, useState } from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'
import { HexColorPicker } from 'react-colorful'

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
  const [color, setColor] = useState('#ffffff')
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
            className='border-0 outline-none appearance-none h-30 w-30'
          />
          <span className='ml-5 text-sm font-bold'>{color}</span>
        </div>

        <div className='mt-5'>
          <p className='my-3 text-base font-bold'>Another color picker:</p>
          <FormLabel name={name} label={label} labelDescription={labelDescription} />
          <div className='flex items-center my-2'>
            <div className='w-5 h-5 rounded-full' style={{ backgroundColor: hexColor }}></div>
            <span className='pl-1 text-sm font-bold'>{hexColor}</span>
          </div>
          <HexColorPicker color={hexColor} onChange={setHexColorPicker} />
        </div>
      </div>
    </div>
  )
}
