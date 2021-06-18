import React from 'react'
import { FormExampleProps } from '../../FormExample/FormExample'

export interface FormAlertProps {
  content: FormExampleProps
  type: 'erro' | 'success' | 'warn' | 'code'
}

export const FormAlert: React.FC<FormAlertProps> = ({ content, type }) => {
  const handleMessage = (line, i) => {
    switch (type) {
      case 'code':
        return (
          <pre key={`line_${i}`} className='text-left'>
            <code>{line}</code>
          </pre>
        )
        return
        break

      default:
        break
    }
  }
  return (
    <div className='mockup-code'>
      {JSON.stringify(content.initialFormData, null, 2)
        .split('\n')
        .map((line, i) => handleMessage(line, i))}
    </div>
  )
}
