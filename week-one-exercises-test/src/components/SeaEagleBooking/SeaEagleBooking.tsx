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
  // Define badge colors based on status
  const statusStyles: Record<string, string> = {
    Confirmed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Pending: "bg-amber-100 text-amber-700 border-amber-200",
    Cancelled: "bg-rose-100 text-rose-700 border-rose-200",
  };

  return ( 
    <tr className="border-b border-slate-100 hover:bg-slate-50/80 transition-all group">
      {/* Customer & Boat Info */}
      <td className="p-4">
        <div className="flex flex-col">
          <span className="font-bold text-slate-800 text-sm">{name}</span>
          <span className="text-xs text-slate-400 group-hover:text-blue-500 transition-colors">{boat}</span>
        </div>
      </td>

      {/* Date */}
      <td className="p-4 text-sm text-slate-600 font-medium">
        {new Date(bookingDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </td>

      {/* Duration */}
      <td className="p-4">
        <span className="text-sm text-slate-700 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
          {days} {days > 1 ? 'days' : 'day'}
        </span>
      </td>

      {/* Status Badge */}
      <td className="p-4">
        <span className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full border ${statusStyles[status] || "bg-slate-100 text-slate-600"}`}>
          {status}
        </span>
      </td>

      {/* Pricing */}
      <td className="p-4 text-right">
        <div className="flex flex-col items-end">
          <span className="font-black text-slate-900">₱{(price * days).toLocaleString()}</span>
          <span className="text-[10px] text-slate-400">₱{price.toLocaleString()} / day</span>
        </div>
      </td>
    </tr>
  )
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
    status: 'All'
  })

  // TODO: Task 3 - HandleChange & Filter Logic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const {name, value, type} = e.target;
      const checked = (e.target as HTMLInputElement).checked
      setFilter((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
  }

  //filter
  const filteredBookings = bookings.filter((book) => {
    const searchName = book.customerName.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase())
    const checkBoatType = filter.boatType === 'All' ? true : book.boatType === filter.boatType
    const checkStatus = filter.status === 'All' ? true : book.status === filter.status
    
    return (searchName && checkBoatType && checkStatus)
  })

  // TODO: Task 3 - Revenue Calculations (Reduce)
  const confirmRevenue = filteredBookings.reduce((acc, curr) => acc + (curr.status === 'Confirmed' ? (curr.pricePerDay * curr.durationDays) : 0), 0)
  const pendingRevenue = filteredBookings.reduce((acc, curr) => acc + (curr.status === 'Pending' ? (curr.pricePerDay * curr.durationDays) : 0), 0)


  return (
    <div className="p-10 max-w-7xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-4xl font-black mb-2 text-blue-900">🦅 Sea Eagle Reservations</h1>
     
      <p className="text-slate-500 mb-8">Week 1 Final Mastery Quest</p>

      {/* --- Filters --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          {/* TODO: Search, Boat Type Select, Status Select */}
        <input type='text' className='border border-slate-300 rounded-lg p-2 w-full' name='search' onChange={handleChange} placeholder='Search customer...' />
          {/**Kind of Boats Select */}
          <select className='border border-slate-300 rounded-lg p-2 w-full' name='boatType' onChange={handleChange}>
          <option value="All">All Type</option>
          <option value="Speedboat">Speedboat</option>
          <option value="Yacht">Yacht</option>
          <option value="Catamaran">Catamaran</option>
        </select>
        {/**Select option for booking status */}
         <select className='border border-slate-300 rounded-lg p-2 w-full' name='status' onChange={handleChange}>
          <option value="All">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-600 p-6 rounded-2xl text-white shadow-lg">
              <p className="text-emerald-100 uppercase text-xs font-bold tracking-widest">Confirmed Revenue</p>
              <h2 className="text-3xl font-black">₱ {confirmRevenue.toLocaleString()}</h2>
          </div>
          <div className="bg-amber-500 p-6 rounded-2xl text-white shadow-lg">
              <p className="text-amber-100 uppercase text-xs font-bold tracking-widest">Pending Value</p>
              <h2 className="text-3xl font-black">₱ {pendingRevenue.toLocaleString()}</h2>
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
              {filteredBookings.map((guest) => (<BookingRow key={guest.id} name={guest.customerName} boat={guest.boatType} bookingDate={guest.bookingDate} price={guest.pricePerDay} days={guest.durationDays} status={guest.status} />))
            }
          </tbody>
        </table>
      </div>
      
    </div>
  );
}