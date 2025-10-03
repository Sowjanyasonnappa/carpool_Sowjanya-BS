import React from 'react'

export default function RideCard({ ride }) {
  return (
    <div className="card p-4 border-2 border-blue-500 rounded-xl hover:shadow-lg transition">
      <h3 className="font-bold text-lg">{ride.from} → {ride.to}</h3>
      <p className="text-gray-700">Driver: <span className="font-semibold">{ride.driver}</span></p>
      <p className="text-gray-700">Date: {ride.date} | Time: {ride.time}</p>
      <p className="text-gray-700">Available Seats: {ride.seats}</p>
      <button className="btn btn-primary mt-2 w-full">Join Ride</button>
    </div>
  )
}
