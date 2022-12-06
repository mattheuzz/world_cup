import { useContext } from 'react'
import { AuthContext, AuthContextProvider } from '../contexts/AuthContext'
import { AuthContextProps } from '../interface/Auth.interface'

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)

  return context
}
