import React, { useState } from 'react'
import RideCard from '../components/RideCard'
import SearchBar from '../components/SearchBar'
import EmptyState from '../components/EmptyState'

export default function Rides() {
  const [rides, setRides] = useState([
    { id: 1, from: 'Tower A', to: 'Gate 3', date: '2025-08-18', time: '09:15', seats: 3, driver: 'Alice' },
    { id: 2, from: 'Building B', to: 'Cafeteria', date: '2025-08-18', time: '10:00', seats: 2, driver: 'Bob' }
  ])
  const [search, setSearch] = useState('')

  const filteredRides = rides.filter(
    r => r.from.toLowerCase().includes(search.toLowerCase()) || r.to.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Rides</h1>
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by From or To" />
      {filteredRides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRides.map(ride => <RideCard key={ride.id} ride={ride} />)}
        </div>
      ) : (
        <EmptyState message="No rides found." />
      )}
    </div>
  )
}
