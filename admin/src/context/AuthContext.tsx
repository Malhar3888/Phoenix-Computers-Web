import React, { createContext, useContext, useEffect, useState } from 'react'
import { login as apiLogin, logout as apiLogout, me as apiMe, refresh as apiRefresh } from '../lib/auth'

type User = { email: string; role: 'admin' | 'staff' } | null

type AuthContextShape = {
  user: User
  login: (email: string, password: string) => Promise<boolean>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextShape>({ user: null, login: async () => false, logout: async () => {} })

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    // try to fetch current user on mount (if backend provides session/refresh cookie)
    (async () => {
      try {
        const data = await apiMe()
        setUser(data?.user ?? null)
      } catch (e) {
        // try to refresh and fetch again
        try {
          await apiRefresh()
          const data2 = await apiMe()
          setUser(data2?.user ?? null)
        } catch (err) {
          setUser(null)
        }
      }
    })()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const res = await apiLogin(email, password)
      if (res?.user) {
        setUser(res.user)
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }

  const logout = async () => {
    await apiLogout()
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

