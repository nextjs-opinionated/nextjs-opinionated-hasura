import classnames from 'classnames'
import React, { ChangeEvent } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'
import { FiCamera } from 'react-icons/fi'

export interface FormLocalImageProps extends FormBaseProps {
  width?: string | number
  height?: string | number
}

export const FormLocalImage: React.FC<FormLocalImageProps> = ({
  label,
  labelDescription,
  name,
  width = '100%',
  height = 200,
  placeholder,
  register,
  defaultValue = null,
  validationErrors,
  className = '',
}) => {
  const [image, imageSet] = useState<{ url: string | null; name: string | null }>({
    url: null,
    name: null,
  })
  useEffect(() => {
    if (defaultValue) {
      imageSet({ url: defaultValue, name: null })
    }
  }, [defaultValue])

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.length !== 0) {
      const imageObj = {
        url: URL.createObjectURL(e.target.files?.[0]) || null,
        name: e.target.files?.[0]?.name || null,
      }
      imageSet(imageObj)
    }
  }

  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
        <div style={{ width }} className='relative flex flex-col'>
          <div className='text-xs text-neutral'>{image.name}</div>
          <div
            style={{ width }}
            className={classnames(`border-2 rounded-btn ${className}`, {
              'border-error': validationErrors?.[name],
            })}
          >
            <div className='flex justify-center'>
              {image?.url ? (
                <img src={image.url} style={{ height }} className='object-scale-down rounded-btn' />
              ) : (
                <div style={{ height }} className='w-full bg-base-300 rounded-btn'></div>
              )}
            </div>
          </div>
          <label
            title={placeholder}
            htmlFor={name}
            className={classnames(
              `mt-2 tracking-wide uppercase bg-base border border-current rounded-lg shadow-lg cursor-pointer hover:bg-primary hover:text-primary-content self-center px-4 py-2 flex flex-col items-center transition duration-300 ease-in-out text-primary`,
              {
                'text-error': validationErrors?.[name],
              }
            )}
          >
            <FiCamera size={20} />
            <span className='mt-1 text-xs font-medium text-center'>{placeholder}</span>
            <input
              className='hidden'
              onChangeCapture={handleImage}
              type='file'
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
