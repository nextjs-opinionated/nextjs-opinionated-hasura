import React, { FC } from 'react'

export type ButtonProps = {
  /**
   * Label of the button
   */
  label?: string
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean
  /**
   * Boolean value to define the button style
   */
  disabled?: boolean
  /**
   * Button click action
   */
  onClick?(): void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const BASE_BUTTON = 'px-6 py-3 mb-1 mr-1 text-sm font-bold transition-all duration-150 ease-linear'
const CONTAINED_BUTTON = `${BASE_BUTTON} border text-white rounded shadow outline-none active:bg-indigo-600 hover:shadow-lg focus:outline-none`
const OUTLINED_BUTTON = `${BASE_BUTTON} bg-transparent border text-indigo-700 border-indigo-500 border-solid rounded outline-none hover:bg-indigo-500 hover:text-white active:bg-indigo-600`

export const Button: FC<ButtonProps> = ({
  onClick,
  label = 'empty label',
  outlined,
  children,
  className,
  disabled,
  ...rest
}) => {
  const classNameArray = [className]

  if (outlined) {
    classNameArray.push(OUTLINED_BUTTON)
  } else {
    classNameArray.push(CONTAINED_BUTTON)
    if (disabled) {
      classNameArray.push('bg-gray-500 cursor-not-allowed')
    } else {
      classNameArray.push('bg-indigo-500 cursor-pointer')
    }
  }

  return (
    <button onClick={onClick} className={classNameArray.join(' ')} {...rest}>
      {children || <span>{label}</span>}
    </button>
  )
}
