import React, { ReactNode } from 'react'

export interface ButtonProps {
  disabled?: boolean
  children?: ReactNode
}

export const Button: React.FC<
  ButtonProps &
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ disabled, children, ...rest } = { disabled: false }) => {
  return (
    <button {...rest} className={`btn ${rest.className}`} disabled={disabled}>
      {children}
    </button>
  )
}
