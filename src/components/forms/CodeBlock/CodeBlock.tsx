import React from 'react'

export interface CodeBlockProps {
  content: any
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ content }) => {
  return (
    <div data-testid='code-block' className='mockup-code'>
      {JSON.stringify(content, null, 2)
        .split('\n')
        .map((line, i) => (
          <pre key={`line_${i}`} className='text-left'>
            <code>{line}</code>
          </pre>
        ))}
    </div>
  )
}
