import _ from 'lodash'
import { useTheme } from 'next-themes'
import React, { ReactNode } from 'react'
import { ThemeList } from '../../model/site/ThemeList'

interface ChangeThemeLayoutProps {
  children: ReactNode
}

export function ChangeThemeLayout({ children }: ChangeThemeLayoutProps) {
  const { theme, setTheme } = useTheme()
  return (
    <div data-theme={theme}>
      <div className='flex justify-end w-full'>
        <div className='z-30 m-1'>
          <select
            className='w-full max-w-xs select select-bordered bg-base-100 text-base-content'
            onChange={(ev) => {
              setTheme(ev.target.value)
            }}
            value={theme}
          >
            <option disabled>theme</option>
            {_.map(ThemeList, (t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {children}
    </div>
  )
}
