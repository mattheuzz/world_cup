import { useContext } from 'react'
import { AuthContext, AuthContextProvider } from '../contexts/AuthContext'
import { IAuthContextProps } from '../interface/Auth.interface'

export const useAuth = (): IAuthContextProps => {
  const context = useContext(AuthContext)

  return context
}
