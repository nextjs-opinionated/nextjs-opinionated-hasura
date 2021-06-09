import React, { useCallback } from 'react'
import { signIn } from 'next-auth/client'
import { AiFillGithub } from 'react-icons/ai'

export type KeyProvider = 'GitHub'

export type CustomButtonAuthProps = {
  providerId: string
  keyProvider: KeyProvider
  children: React.ReactNode
}

export const CustomButtonAuth = ({ providerId, keyProvider, children }: CustomButtonAuthProps) => {
  const handleKeyProvider = useCallback(() => {
    switch (keyProvider) {
      case 'GitHub': {
        return (
          <button className='btn btn-outline' onClick={() => signIn(providerId)}>
            <AiFillGithub className='mr-2' size={20} />
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
