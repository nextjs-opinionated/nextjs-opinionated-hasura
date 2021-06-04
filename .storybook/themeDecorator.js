import React from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

const ThemeDecorator = (storyFn) => {
  const { theme } = useTheme()
  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
}

export default ThemeDecorator
