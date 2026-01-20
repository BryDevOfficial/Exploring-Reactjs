This is your **Week 1 Final Mastery Quest**. This component is designed as an "Admin Dashboard" for your Sea Eagle system.

I have provided the **UI structure (The Shell)**, but it currently does nothing. Your mission is to inject the logic to make it a fully functional "live" dashboard.

### 🦅 The Mastery Exercise: Sea Eagle Admin Console

```tsx
import React, { useState } from 'react';

export default function SeaEagleAdmin() {
  // --- STATE AREA ---
  // 1. Create a state for 'bookings' (Use the same 4 objects from before)
  // 2. Create a state for 'showStats' (Boolean - default to true)
  // 3. Create a state for 'searchQuery' (String)

  const bookings = []; // TODO: Change this to useState

  // --- LOGIC AREA ---
  // TODO: Filter bookings based on searchQuery
  const filtered = []; 

  // TODO: Create a delete handler function
  const handleDelete = (id: number) => {
    // Logic: filter out the id
  };

  return (
    <div className="p-8 max-w-4xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-black">Admin Console</h1>
        
        {/* TASK 1: Toggle Button */}
        <button 
          className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm"
          onClick={() => {}} // TODO: Toggle showStats
        >
          {/* TODO: Change text based on showStats */}
          Toggle Revenue View
        </button>
      </div>

      {/* TASK 2: Conditional Rendering (Stats) */}
      {/* TODO: Wrap this in a condition (Only show if showStats is true) */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-6 bg-emerald-500 text-white rounded-2xl">
          <p className="text-xs opacity-80 uppercase font-bold">Total Bookings</p>
          <h2 className="text-3xl font-black">{bookings.length}</h2>
        </div>
      </div>

      {/* TASK 3: Search Input */}
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Filter by customer name..."
          className="w-full p-3 border border-slate-200 rounded-xl"
          onChange={() => {}} // TODO: Handle search input
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
            
            <tr className="border-t border-slate-50">
                <td className="p-4 font-medium text-slate-700">Example Name</td>
                <td className="p-4">
                  <button 
                    className="text-rose-500 hover:text-rose-700 font-bold text-xs"
                    onClick={() => {}} // TODO: Call handleDelete
                  >
                    DELETE
                  </button>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

```

---

### 🛠️ Your 4 Objectives:

1. **The Toggle:** Make the "Toggle Revenue View" button hide/show the green stats card.
2. **The Delete:** Make the "DELETE" button remove that specific row from the list permanently.
3. **The Live Search:** As you type in the input, the table rows should disappear/reappear based on the name.
4. **The Empty State:** If you search for a name that isn't there, the table should display: *"No results match your search."*

**Tip:** For the Delete logic, remember that `useState` is immutable. You must use `setBookings(bookings.filter(...))` to "remove" an item.
