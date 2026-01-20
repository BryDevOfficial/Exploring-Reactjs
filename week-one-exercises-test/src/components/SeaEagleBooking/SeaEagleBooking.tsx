import React, { useState } from 'react';

// TODO: Task 1 - Interface & BookingRow (tr)
interface SeaEagleBookingProps {
  name: string,
  boat: string,
  bookingDate: string,
  price: number,
  days: number
  status: string
}

function BookingRow({name, boat, bookingDate, price, days, status}: SeaEagleBookingProps) {
       <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="p-4">
        <div className="font-bold text-slate-800">
          Total Cost: ₱{(price*days).toLocaleString()}
          </div>
        <div className="text-xs text-slate-500 uppercase tracking-wider">{boat}</div>
      </td>
      <td className="p-4 text-right font-bold text-slate-900">₱{status}</td>
    </tr>
}

export default function SeaEagleBooking() {
  const [bookings] = useState([
    { id: 1, customerName: "John Doe", boatType: "Yacht", bookingDate: "2026-02-10", pricePerDay: 15000, durationDays: 2, status: "Confirmed" },
    { id: 2, customerName: "Jane Smith", boatType: "Speedboat", bookingDate: "2026-02-12", pricePerDay: 5000, durationDays: 1, status: "Pending" },
    { id: 3, customerName: "Mike Ross", boatType: "Catamaran", bookingDate: "2026-02-15", pricePerDay: 8000, durationDays: 3, status: "Confirmed" },
    { id: 4, customerName: "Harvey Specter", boatType: "Yacht", bookingDate: "2026-02-20", pricePerDay: 15000, durationDays: 5, status: "Cancelled" },
  ]);

  // TODO: Task 2 - State
  const [filter, setFilter] = useState({
    search: '',
    boatType: 'All',
    Status: 'All'
  })

  // TODO: Task 3 - HandleChange & Filter Logic

  // TODO: Task 3 - Revenue Calculations (Reduce)

  return (
    <div className="p-10 max-w-7xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-4xl font-black mb-2 text-blue-900">🦅 Sea Eagle Reservations</h1>
      <p className="text-slate-500 mb-8">Week 1 Final Mastery Quest</p>

      {/* --- Filters --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          {/* TODO: Search, Boat Type Select, Status Select */}
      </div>

      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-600 p-6 rounded-2xl text-white shadow-lg">
              <p className="text-emerald-100 uppercase text-xs font-bold tracking-widest">Confirmed Revenue</p>
              <h2 className="text-3xl font-black">₱ {/* Total Confirmed */}</h2>
          </div>
          <div className="bg-amber-500 p-6 rounded-2xl text-white shadow-lg">
              <p className="text-amber-100 uppercase text-xs font-bold tracking-widest">Pending Value</p>
              <h2 className="text-3xl font-black">₱ {/* Total Pending */}</h2>
          </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-xs font-bold">
            <tr>
              <th className="p-4">Customer / Boat</th>
              <th className="p-4">Date</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Total Cost</th>
            </tr>
          </thead>
          <tbody>
              {/* TODO: Task 4 - Map Bookings */}
          </tbody>
        </table>
      </div>
    </div>
  );
}