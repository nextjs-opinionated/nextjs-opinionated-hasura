import classnames from 'classnames'
import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FormBaseProps } from '../FormBaseProps'
import { FormLabel } from '../FormLabel'
import {FiCamera} from 'react-icons/fi'

export interface FormImageProps extends FormBaseProps {
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  setValue:any

}

export const FormImage: React.FC<FormImageProps> = ({
  label,
  labelDescription,
  type = 'file',
  name,
  placeholder,
  register,
  defaultValue,
  validationErrors,
  className,
  setValue
}) => {
  const[image,imageSet]= useState(null)
  useEffect(()=>{
    if(defaultValue){
      imageSet(defaultValue)
    }
  },[])

  

  const handleImage=(e:ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files.length !== 0){
      imageSet(URL.createObjectURL(e.target.files[0]));
      setValue(name,e.target.files[0])
    }
  }


  return (
    <div className='col-span-6 sm:col-span-4'>
      <div className='w-32 h-32 form-control'>
        <FormLabel name={name} label={label} labelDescription={labelDescription} />
          <div className="relative flex flex-col " >    
              <div className={classnames(` avatar mb-6 ${className}`, {
                      'rounded-btn border-2 border-error': validationErrors?.[name],
                    })}>
                    <div className="w-full h-32 rounded-btn">
                      {image? (
                      <img  src={image} />
                      
                      ) : (
                        <div className="w-32 h-32 bg-gray-300"></div>
                      )}

                    </div>
                  </div>
                <label title={placeholder} htmlFor={name}  className={classnames(`text-black   btn glass w-15 self-center absolute bottom-0`, {
                    'text-error': validationErrors?.[name],
                  })}>
                  <FiCamera size={20} />
                  <input className="hidden" onChangeCapture={handleImage} type={type} accept="image/*" {...register(name)} id={name}name={{name}} ></input>
                </label>
              </div>
 
        {validationErrors?.[name] && (
          <label className='label'>
            <span  className='label-text-alt text-error'>{validationErrors?.[name]?.message}</span>
          </label>
        )}
      </div>
    </div>
  )
}
