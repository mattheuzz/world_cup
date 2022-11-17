import { createContext } from 'react'
import { IAuthContextProps, IAuthContextProviderProps } from '../interface/Auth.interface'

export const AuthContext = createContext({}as IAuthContextProps)

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
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