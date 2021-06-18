import classnames from 'classnames'
import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'
import { FiCamera } from 'react-icons/fi'

export interface FormImageProps extends FormBaseProps {
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  width?: number
  height?: number
}

export const FormImage: React.FC<FormImageProps> = ({
  label,
  labelDescription,
  type = 'file',
  name,
  width = 296,
  height = 420,
  placeholder,
  register,
  defaultValue,
  validationErrors,
  className,
}) => {
  const [image, imageSet] = useState({ url: null, name: null })
  useEffect(() => {
    if (defaultValue) {
      imageSet({ url: defaultValue, name: null })
    }
  }, [])

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files.length !== 0) {
      imageSet({ url: URL.createObjectURL(e.target.files[0]), name: e.target.files[0].name })
    }
  }

  return (
    <div className='col-span-6 pb-20 sm:col-span-4'>
      <div style={{ width: width, height: height }} className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <div className='relative flex flex-col'>
          <div className='text-xs text-gray-400'>{image.name}</div>
          <div
            className={classnames(`avatar mb-6 ${className}`, {
              'rounded-btn border-2 border-error': validationErrors?.[name],
            })}
          >
            <div className='w-full h-full rounded-btn'>
              {image?.url ? (
                <img src={image.url} style={{ width: width, height: height }} />
              ) : (
                <div style={{ width: width, height: height }} className='bg-gray-300'></div>
              )}
            </div>
          </div>
          <label
            title={placeholder}
            htmlFor={name}
            style={{ width: width / 2 }}
            className={classnames(
              `tracking-wide uppercase bg-white border border-current rounded-lg shadow-lg cursor-pointer hover:bg-primary hover:text-white self-center absolute bottom-0 px-4 py-2 flex flex-col items-center transition duration-300 ease-in-out text-primary`,
              {
                'text-error': validationErrors?.[name],
              }
            )}
          >
            <FiCamera size={20} />
            <span className='mt-1 text-sm font-medium text-center'>{placeholder}</span>
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
