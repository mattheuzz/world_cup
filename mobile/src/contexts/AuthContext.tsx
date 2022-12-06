import { createContext, useState, useEffect } from 'react'
import { AuthContextProps, AuthContextProviderProps } from '../interface/Auth.interface'
import { UserProps } from '../interface/Users.interface'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

WebBrowser.maybeCompleteAuthSession()

export const AuthContext = createContext({}as AuthContextProps)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [isUserLoading, setUserLoading] = useState(false)

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '941819807741-g2c5h47sll8bl5cm7qnia4e2cprj08h1.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email']
  })

  const signIn = async () => {
    try {
      setUserLoading(true)
      await promptAsync()
    } catch (error) {
      console.error(error)

      throw new Error(error)
    } finally {
      setUserLoading(false)
    }
  }

  const signInWithGoogle = async (accessToken: string) => {
    console.log('token de autenticação => ', accessToken)
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken)
    }
  }, [response])

  return (
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}