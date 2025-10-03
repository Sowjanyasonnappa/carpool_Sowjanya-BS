import React, { useState } from 'react'

export default function RideForm({ onSubmit }) {
  const [form, setForm] = useState({ from: '', to: '', date: '', time: '', seats: 1 })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); onSubmit(form) }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4 border-2 border-blue-500 rounded-xl">
      <input className="input border-2 border-blue-500 focus:ring-2 focus:ring-blue-400" name="from" placeholder="From" value={form.from} onChange={handleChange} required />
      <input className="input border-2 border-blue-500 focus:ring-2 focus:ring-blue-400" name="to" placeholder="To" value={form.to} onChange={handleChange} required />
      <input className="input border-2 border-blue-500 focus:ring-2 focus:ring-blue-400" type="date" name="date" value={form.date} onChange={handleChange} required />
      <input className="input border-2 border-blue-500 focus:ring-2 focus:ring-blue-400" type="time" name="time" value={form.time} onChange={handleChange} required />
      <input className="input border-2 border-blue-500 focus:ring-2 focus:ring-blue-400" type="number" name="seats" value={form.seats} min={1} onChange={handleChange} required />
      <button className="btn btn-primary w-full">Create Ride</button>
    </form>
  )
}
