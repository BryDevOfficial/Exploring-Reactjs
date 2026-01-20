import React, { useState } from 'react';

// Task 1: Interface 'Property'
// Keys: id, title, type, price, isAvailable
interface Property {
  id: number;
  title: string;
  type: string;
  price: number;
  isAvailable: boolean;
}

export default function RentalSystem() {
  const [properties] = useState<Property[]>([
    { id: 1, title: "Modern Condo", type: "Apartment", price: 15000, isAvailable: true },
    { id: 2, title: "Budget Bedspace", type: "Room", price: 3000, isAvailable: false },
    { id: 3, title: "Family Townhouse", type: "House", price: 25000, isAvailable: true },
    { id: 4, title: "Studio Unit", type: "Apartment", price: 12000, isAvailable: false },
  ]);

  // Task 2: State Setup
  const [filters, setFilters] = useState({
    search: '',
    propertyType: 'All',
    onlyAvailable: false
  });

  // Task 3: The Universal Handler (The one we just perfected!)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isChecked = (e.target as HTMLInputElement).checked;

    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? isChecked : value
    }));
  };

  // Task 4: Triple Filter Logic
  const filteredProperties = properties.filter(item => {
    // 1. Search Logic
    const matchSearch = item.title.toLowerCase().includes(filters.search.toLowerCase());
    
    // 2. Category Logic (The "All" bypass)
    // HINT: if propertyType is 'All', return true. Else compare item.type
    const matchType = filters.propertyType === 'All' ? true : item.type === filters.propertyType;
    
    // 3. Checkbox Logic
    const matchAvailable = filters.onlyAvailable ? item.isAvailable : true;

    return matchSearch && matchType && matchAvailable;
  });

  return (
    <div className="p-10 max-w-4xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black mb-8 text-blue-900">🏠 Property Finder</h1>

      {/* --- Filter Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 bg-white p-6 rounded-2xl shadow-md">
        
        {/* Task 5: Search Input (name must match state key) */}
        <input 
          name="search" 
          placeholder="Search area or title..." 
          onChange={handleChange}
          className="border p-3 rounded-xl outline-blue-500" 
        />

        {/* Task 6: Property Type Dropdown */}
        <select 
          name="propertyType" 
          onChange={handleChange}
          className="border p-3 rounded-xl bg-white"
        >
          <option value="All">All Types</option>
          <option value="Apartment">Apartment</option>
          <option value="Room">Room</option>
          <option value="House">House</option>
        </select>

        {/* Task 7: Availability Checkbox */}
        <label className="flex items-center gap-2 font-bold text-slate-700 cursor-pointer">
          <input name="onlyAvailable" type="checkbox" onChange={handleChange} className="w-5 h-5" /> 
          Available Now
        </label>
      </div>

      {/* Task 8: The Result Counter */}
      {/* HINT: Use filteredProperties.length */}
      <div className="mb-4 text-slate-500 font-bold uppercase tracking-widest text-sm">
        Found {filteredProperties.length} Properties
      </div>

      {/* Task 9: Mapping */}
      <div className="grid gap-4">
        {filteredProperties.map(prop => (
          <div key={prop.id} className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
             <div>
                <h2 className="font-black text-xl">{prop.title}</h2>
                <p className="text-blue-600 font-bold">{prop.type}</p>
             </div>
             <div className="text-right">
                <p className="text-2xl font-black">₱{prop.price.toLocaleString()}</p>
                <p className={prop.isAvailable ? "text-emerald-500" : "text-red-400"}>
                    {prop.isAvailable ? "● Ready to Move" : "○ Occupied"}
                </p>
             </div>
          </div>
        ))}
      </div>
      
      {/* Task 10: Empty State */}
      {filteredProperties.length === 0 && (
          <div className="text-center py-10 text-slate-400">No properties match your filters.</div>
      )}
    </div>
  );
}