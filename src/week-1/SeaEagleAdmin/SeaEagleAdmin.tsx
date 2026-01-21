import React, { useState } from 'react';

export default function SeaEagleAdmin() {
  // --- STATE AREA ---
  // 1. Create a state for 'bookings' (Use the same 4 objects from before)
  // 2. Create a state for 'showStats' (Boolean - default to true)
  // 3. Create a state for 'searchQuery' (String)

  //const bookings = []; // TODO: Change this to useState
    const [bookings, setBooking] = useState([
    { id: 1, customerName: "John Doe", boatType: "Yacht", bookingDate: "2026-02-10", pricePerDay: 15000, durationDays: 2, status: "Confirmed" },
    { id: 2, customerName: "Jane Smith", boatType: "Speedboat", bookingDate: "2026-02-12", pricePerDay: 5000, durationDays: 1, status: "Pending" },
    { id: 3, customerName: "Mike Ross", boatType: "Catamaran", bookingDate: "2026-02-15", pricePerDay: 8000, durationDays: 3, status: "Confirmed" },
    { id: 4, customerName: "Harvey Specter", boatType: "Yacht", bookingDate: "2026-02-20", pricePerDay: 15000, durationDays: 5, status: "Cancelled" },
  ]);

  const [showStats, setShowStats] = useState(true)

  //const [searchQuery, setSearchQuery] = useState('')
  const [searchQuery, setSearchQuery] = useState({
    searchName: ''
  })
  const handleChangeSearch = ((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {type, name, value} = e.target
        const checked = (e.target as HTMLInputElement).checked
        setSearchQuery((prev) => 
            ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }))
  })

  // --- LOGIC AREA ---
  // TODO: Filter bookings based on searchQuery
  const filtered = bookings.filter(((search) => {
        const searchCustomer =  search.customerName.toLocaleLowerCase().includes(searchQuery.searchName.toLocaleLowerCase())
        return searchCustomer
  }))

  // TODO: Create a delete handler function
  const handleDelete = (id: number) => {
    // Logic: filter out the id
    const updatedList = bookings.filter((deletename) => deletename.id !== id)
    setBooking(updatedList)
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-black">Admin Console</h1>
        
        {/* TASK 1: Toggle Button */}
        <button 
          className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm"
          onClick={() => {setShowStats(!showStats)}} // TODO: Toggle showStats
        >
          {/* TODO: Change text based on showStats */}
          {showStats ? 'Close Revenue View' : 'Toggle Revenue View'}
        </button>
      </div>

      {/* TASK 2: Conditional Rendering (Stats) */}
      {/* TODO: Wrap this in a condition (Only show if showStats is true) */}
      {showStats && (
         <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-6 bg-emerald-500 text-white rounded-2xl">
          <p className="text-xs opacity-80 uppercase font-bold">Total Bookings</p>
          <h2 className="text-3xl font-black">{bookings.length}</h2>
        </div>
      </div>
      )}
     

      {/* TASK 3: Search Input */}
      <div className="mb-6">
        <input 
          type="text" 
          name='searchName'
          placeholder="Filter by customer name..."
          className="w-full p-3 border border-slate-200 rounded-xl"
          //onChange={(e) => setSearchQuery(e.target.value)} // TODO: Handle search input
          onChange={handleChangeSearch}
        />
      </div>

      {/* TASK 4: Table & Empty State */}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Map through 'filtered' bookings */}
            {/* IF filtered is empty, show a <tr> with "No results found" */}
            {filtered.map((customer) => 
                (<tr key={customer.id} className="border-t border-slate-50">
                <td className="p-4 font-medium text-slate-700">{customer.customerName}</td>
                <td className="p-4">
                  <button 
                    className="text-rose-500 hover:text-rose-700 font-bold text-xs"
                    onClick={() => {handleDelete(customer.id)}} // TODO: Call handleDelete
                  >
                    DELETE
                  </button>
                </td>
            </tr>)
            )}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}