import React from 'react'

export default function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input w-full max-w-md mb-4 border-2 border-blue-600 focus:ring-2 focus:ring-blue-400"
    />
  )
}
