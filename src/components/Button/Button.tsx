import React, { FC } from 'react'

export interface ButtonProps {
  /**
   * Label of the button
   */
  label?: string
  /**
   * Boolean value to define the button style
   */
  outlined?: boolean
  /**
   * Button click action
   */
  onClick(): void
}

const BASE_BUTTON =
  'px-6 py-3 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear'
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-purple-500 border text-white rounded shadow outline-none active:bg-purple-600 hover:shadow-lg focus:outline-none`
const OUTLINED_BUTTON = `${BASE_BUTTON} bg-transparent border text-purple-700 border-purple-500 border-solid rounded outline-none hover:bg-purple-500 hover:text-white active:bg-purple-600`

export const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  label = 'empty label',
  outlined,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}`}
      {...rest}
    >
      {children || <span>{label}</span>}
    </button>
  )
}
