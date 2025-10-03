import React, { useState } from 'react'
import RideForm from '../components/RideForm'

export default function CreateRide() {
  const [rides, setRides] = useState([])

  const handleCreate = (ride) => {
    const newRide = { ...ride, id: Date.now(), driver: 'You' }
    setRides(prev => [newRide, ...prev])
    alert('Ride created successfully!')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create a New Ride</h1>
      <RideForm onSubmit={handleCreate} />

      {rides.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Your Rides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rides.map(ride => (
              <div key={ride.id} className="card border-2 border-blue-500 rounded-xl">
                <h3 className="font-bold">{ride.from} → {ride.to}</h3>
                <p>Date: {ride.date} | Time: {ride.time}</p>
                <p>Available Seats: {ride.seats}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
