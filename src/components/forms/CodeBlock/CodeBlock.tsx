import classnames from 'classnames'
import React from 'react'

export interface CodeBlockProps {
  content: any
  className?: string
  textType?: string
  dataPrefix?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  content,
  className = '',
  dataPrefix = '$',
  textType = '',
}) => {
  return (
    <div data-testid='code-block' className={classnames(`mockup-code ${className}`)}>
      {JSON.stringify(content, null, 2)
        .split('\n')
        .map((line, i) => (
          <pre
            key={`line_${i}`}
            data-prefix={dataPrefix}
            className={classnames(`text-left ${textType}`)}
          >
            <code>{line}</code>
          </pre>
        ))}
    </div>
  )
}
