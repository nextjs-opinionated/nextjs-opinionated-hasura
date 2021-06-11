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
        <div className='dropdown'>
          <Menu.Button className='btn btn-primary'>change theme</Menu.Button>
          <Transition
            show={open}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              static
              className='shadow menu dropdown-content w-52 rounded-box bg-base-100'
            >
              {Object.values(ThemeList).map((t) => (
                <Menu.Item key={t.id}>
                  <li>
                    <a
                      className={classnames({
                        'hover:bg-primary': theme === t.id,
                      })}
                      onClick={() => {
                        setTheme(t.id)
                      }}
                    >
                      {t.name}
                    </a>
                  </li>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}
