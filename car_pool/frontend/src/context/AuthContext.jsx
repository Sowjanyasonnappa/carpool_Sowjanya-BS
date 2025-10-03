import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = async (email, password) => {
    setLoading(true)
    // MOCK LOGIN
    if (email === 'test@test.com' && password === '123456') {
      const data = { name: 'Test User', email }
      setUser(data)
      setLoading(false)
      return { ok: true }
    }
    setLoading(false)
    return { ok: false, error: 'Invalid credentials' }
  }

  const register = async (payload) => {
    setLoading(true)
    const data = { name: payload.name, email: payload.email }
    setUser(data)
    setLoading(false)
    return { ok: true }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
