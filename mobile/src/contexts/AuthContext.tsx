import { createContext } from 'react'
import { IAuthContextProps, IAuthContextProviderProps } from '../interface/Auth.interface'
import * as AuthSession from 'expo-auth-session'

export const AuthContext = createContext({}as IAuthContextProps)

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  console.log(AuthSession.makeRedirectUri({ useProxy: true }))
  const signIn = async () => {
    console.log('Entrou')
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'matheus',
        avatarUrl: 'https://github.com/mattheuzz.png',
        email: 'matheus@email.com',
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}