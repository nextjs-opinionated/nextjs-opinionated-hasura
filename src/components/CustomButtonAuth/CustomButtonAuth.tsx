import React, { useCallback } from 'react'
import { signIn } from 'next-auth/client'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'

export enum KeyProvider {
  'github' = 'GitHub',
  'email' = 'Email',
}

export type CustomButtonAuthProps = {
  providerId: string
  keyProvider: KeyProvider
  children: React.ReactNode
}

export const CustomButtonAuth = ({ providerId, keyProvider, children }: CustomButtonAuthProps) => {
  console.log(providerId)
  const handleKeyProvider = useCallback(() => {
    switch (keyProvider) {
      case KeyProvider.github: {
        return (
          <button className='w-full btn btn-outline' onClick={() => signIn(providerId)}>
            <AiFillGithub className='mr-2' size={20} />
            {children}
          </button>
        )
      }
      case KeyProvider.email: {
        return (
          <button className='w-full btn btn-primary' type='submit'>
            <AiOutlineMail className='mr-2' size={20} />
            {children}
          </button>
        )
      }

      default:
        null
    }
  }, [keyProvider])

  return <>{handleKeyProvider()}</>
}
