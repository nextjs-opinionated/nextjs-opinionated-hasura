import React from 'react'
import { Transition, Menu } from '@headlessui/react'
import { ThemeList } from '../../model/site/ThemeList'
import { useTheme } from 'next-themes'
import classnames from 'classnames'

export interface ChangeThemeDropDownProps {
  className?: string
  title?: string
}

export const ChangeThemeDropDown: React.FC<ChangeThemeDropDownProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()
  return (
    <Menu as='div' className={`dropdown ${className}`}>
      {({ open }) => (
        <>
          <div>
            <Menu.Button className='btn btn-secondary'>change theme</Menu.Button>
          </div>
          <Transition
            show={open}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items static className='shadow menu dropdown-content rounded-box'>
              {Object.values(ThemeList).map((t) => (
                <Menu.Item key={t.id}>
                  <button
                    className={classnames('btn btn-sm', {
                      'btn-primary': theme === t.id,
                    })}
                    onClick={() => {
                      setTheme(t.id)
                    }}
                  >
                    {t.name}
                  </button>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
