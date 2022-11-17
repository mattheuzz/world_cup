import { ReactNode } from 'react'
import { IUserProps } from './Users.interface'

export interface IAuthContextProps {
  user: IUserProps
  signIn: () => Promise<void> 
}

export interface IAuthContextProviderProps {
  children: ReactNode
}
