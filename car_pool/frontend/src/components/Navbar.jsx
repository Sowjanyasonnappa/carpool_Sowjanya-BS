import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="font-bold text-xl">CarPool</Link>
      <div className="space-x-4">
        <Link to="/rides" className="hover:underline">Rides</Link>
        <Link to="/create" className="hover:underline">Create Ride</Link>
        {user ? (
          <>
            <span className="font-semibold">{user.name}</span>
            <button onClick={logout} className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200">Login</Link>
            <Link to="/register" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}
