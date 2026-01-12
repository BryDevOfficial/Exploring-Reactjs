import React, { useState } from 'react';

// 1. CHILD COMPONENT: Receives 'name' and 'room' via Props
const GuestCard = ({ name, room }: { name: string; room: string }) => {
  return (
    <div className="p-3 border-l-4 border-indigo-500 rounded-lg mb-2 bg-slate-50 shadow-sm">
      <p className="font-bold text-slate-800">{name}</p>
      <p className="text-sm text-slate-500">{room}</p>
    </div>
  );
};

export default function TheGuestFinder() {
  // 2. MOCK DATA: The "Database" for testing
  const bookings = [
    { id: 1, name: 'Juan Dela Cruz', room: 'Sea Eagle 01' },
    { id: 2, name: 'Maria Santos', room: 'Deluxe 05' },
    { id: 3, name: 'Alice Smith', room: 'Standard 02' },
  ];

  // 3. STATE: Initializing the search query object
  const [filter, setFilter] = useState({ 
    query: '' 
  });

  // 4. HANDLER: The dynamic "Triangle of Truth" engine
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFilter((prev) => ({
      ...prev,
      [name]: value // Computed property name matches 'name="query"'
    }));
  };

  // 5. FILTER LOGIC: Calculated on every render
  const filteredGuests = bookings.filter(guest => 
    guest.name.toLowerCase().includes(filter.query.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-slate-100">
      <h2 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
        🔍 Guest Finder
      </h2>
      
      {/* 6. CONTROLLED INPUT: The physical connection */}
      <div className="mb-6">
        <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">
          Search by Name
        </label>
        <input 
          type="text"
          name="query"                // MATCHES state key
          value={filter.query}        // READS from state
          onChange={handleChange}     // UPDATES state
          placeholder="Who are you looking for?"
          className="w-full p-2 border-b-2 border-slate-200 focus:border-indigo-500 outline-none transition-colors"
        />
      </div>

      {/* 7. THE DATA LOOP: Mapping filtered results */}
      <div className="results-container">
        {filteredGuests.length > 0 ? (
          filteredGuests.map(guest => (
            <GuestCard 
              key={guest.id} 
              name={guest.name} 
              room={guest.room} 
            />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-slate-400 italic">No guests match "{filter.query}"</p>
          </div>
        )}
      </div>
    </div>
  );
}