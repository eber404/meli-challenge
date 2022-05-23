import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { TOKEN_COLLECTION } from '@/data/localStorage'
import { apiService } from '@/services/ApiService'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate()

  async function signIn(email, password) {
    setIsLoading(true)

    const { token } = await apiService.signIn(email, password)

    if (token) {
      localStorage.setItem(TOKEN_COLLECTION, JSON.stringify(token))
      apiService.http.defaults.headers.Authorization = `Bearer ${token}`

      setIsLoggedIn(true)
      navigate('/reviews')
    }

    setIsLoading(false)
  }

  function signOut() {
    setIsLoading(true)

    localStorage.removeItem(TOKEN_COLLECTION)

    apiService.http.defaults.headers.Authorization = undefined

    setIsLoggedIn(false)
    setIsLoading(false)

    navigate('/')
  }

  useEffect(() => {
    ;(async function () {
      const storage = localStorage.getItem(TOKEN_COLLECTION)

      if (storage) {
        const token = JSON.parse(storage)

        apiService.http.defaults.headers.Authorization = `Bearer ${token}`

        setIsLoggedIn(true)
        navigate('/reviews')
      }

      setIsLoading(false)
    })()
  }, [''])

  return (
    <AuthContext.Provider value={{ signIn, isLoading, isLoggedIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
