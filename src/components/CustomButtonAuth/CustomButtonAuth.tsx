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
  label: string
}

export const CustomButtonAuth = ({ providerId, keyProvider, label }: CustomButtonAuthProps) => {
  const handleKeyProvider = useCallback(() => {
    switch (keyProvider) {
      case KeyProvider.github: {
        return (
          <button className='w-full btn btn-outline' onClick={() => signIn(providerId)}>
            <AiFillGithub className='mr-2' size={20} />
            {label}
          </button>
        )
      }
      case KeyProvider.email: {
        return (
          <button className='w-full btn btn-primary' type='submit'>
            <AiOutlineMail className='mr-2' size={20} />
            {label}
          </button>
        )
      }

      default:
        return null
    }
  }, [keyProvider, label])

  return <>{handleKeyProvider()}</>
}
