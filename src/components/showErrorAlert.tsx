import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const showErrorAlert = ({
  title,
  text,
  error,
}: {
  title?: string
  text?: string
  footerText?: string
  error?: any
}) => {
  const Alerta = withReactContent(Swal)

  let textFinal = text
  if (!textFinal) {
    textFinal = error?.message
    textFinal = textFinal.replace(/\\n/g, '\n')
  }

  return Alerta.fire({
    title: <p>{title || 'erro'}</p>,
    html: (
      <div
        className='relative py-3 pl-4 pr-8 text-left border rounded bg-red-lightest border-red-light text-red-dark'
        role='alert'
      >
        <span className='text-sm whitespace-pre-wrap'>{text || (error?.message && textFinal)}</span>
      </div>
    ),
    showCloseButton: true,
  })
}
