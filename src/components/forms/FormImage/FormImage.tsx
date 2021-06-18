import classnames from 'classnames'
import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'
import { FiCamera } from 'react-icons/fi'

export interface FormImageProps extends FormBaseProps {
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  width?: string
  height?: string
}

export const FormImage: React.FC<FormImageProps> = ({
  label,
  labelDescription,
  type = 'file',
  name,
  width = '8rem',
  height = '8rem',
  placeholder,
  register,
  defaultValue,
  validationErrors,
  className,
}) => {
  const [image, imageSet] = useState(null)
  useEffect(() => {
    if (defaultValue) {
      imageSet(defaultValue)
    }
  }, [])

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length !== 0) {
      imageSet(URL.createObjectURL(e.target.files[0]))
    }
  }

  return (
    <div className='col-span-6 pb-20 sm:col-span-4'>
      <div style={{ width: width, height: height }} className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <div className='relative flex flex-col '>
          <div
            className={classnames(` avatar mb-6 ${className}`, {
              'rounded-btn border-2 border-error': validationErrors?.[name],
            })}
          >
            <div className='w-full h-full rounded-btn'>
              {image ? (
                <img src={image} style={{ width: width, height: height }} className='object-fill' />
              ) : (
                <div style={{ width: width, height: height }} className='bg-gray-300'></div>
              )}
            </div>
          </div>
          <label
            title={placeholder}
            htmlFor={name}
            className={classnames(
              `tracking-wide uppercase bg-white border border-current rounded-lg shadow-lg cursor-pointer hover:bg-primary hover:text-white self-center absolute bottom-0 w-60 px-4 py-2 flex flex-col items-center transition duration-300 ease-in-out`,
              {
                'text-error': validationErrors?.[name],
              }
            )}
          >
            <FiCamera size={20} />
            <span className='mt-1 text-base font-medium'>Select an image</span>
            <input
              className='hidden'
              onChangeCapture={handleImage}
              type={type}
              accept='image/*'
              {...register(name)}
              id={name}
              name={name}
            ></input>
          </label>
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
