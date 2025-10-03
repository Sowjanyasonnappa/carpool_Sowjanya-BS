import React from 'react'

export default function EmptyState({ message = 'Nothing to show here.' }) {
  return (
    <div className="text-center py-20 text-gray-400">
      <p className="text-xl font-bold">{message}</p>
    </div>
  )
}
