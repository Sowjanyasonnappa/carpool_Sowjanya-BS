import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import Rides from './pages/Rides'
import CreateRide from './pages/CreateRide'
import { useState } from 'react'

export default function App() {
  // Simple frontend-only auth state
  const [user, setUser] = useState(null)

  const handleLogin = (email) => {
    setUser({ name: email })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} onLogout={handleLogout} />
      <main className="flex-1 container-app py-6">
        <Routes>
          <Route path="/" element={<Navigate to="/rides" replace />} />

          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={<Register onRegister={handleLogin} />}
          />

          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/rides" element={<Rides />} />
            <Route path="/create" element={<CreateRide />} />
          </Route>

          <Route path="*" element={<Navigate to="/rides" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
