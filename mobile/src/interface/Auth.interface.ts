import { ReactNode } from 'react'
import { UserProps } from './Users.interface'

export interface AuthContextProps {
  user: UserProps
  isUserLoading: boolean
  signIn: () => Promise<void> 
}

export interface AuthContextProviderProps {
  children: ReactNode
}
