import React, { useState } from 'react';

/**
 * 
 👑 Week 1: The Final Boss Challenge
Project: Local Job Skills Social Platform (#9) This combines everything you've learned + the new Dropdown skill.

The Goal:

Search: By worker name.

Dropdown: Filter by Skill Category (Plumber, Electrician, Painter).

Toggle: "Verified Only" checkbox.

Logic: Total count of workers found.
 */
// Task 1: Interface 'Worker' 
// (id, name, skill, isVerified)

export default function JobSkillsPlatform() {
  const [workers] = useState([
    { id: 1, name: "Juan Dela Cruz", skill: "Plumber", isVerified: true },
    { id: 2, name: "Maria Clara", skill: "Electrician", isVerified: false },
    { id: 3, name: "Siso Batumbakal", skill: "Plumber", isVerified: false },
    { id: 4, name: "Pedro Penduko", skill: "Painter", isVerified: true },
  ]);

  // Task 2: State Setup
  // HINT: 'search', 'category' (default "All"), and 'verifiedOnly'
  const [filters, setFilters] = useState({
    search: '',
    category: 'All',
    verifiedOnly: false
  });

  // Task 3: The Universal Handler
  // HINT: Your existing logic works! <select> uses 'value' just like <input type="text">.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Task 4: The Triple Filter Logic
  const filteredWorkers = workers.filter(w => {
    const matchName = w.name.toLowerCase().includes(filters.search.toLowerCase());
    
    // HINT: If filters.category is "All", return true. Else compare.
    const matchCategory = false; // Replace this
    
    const matchVerified = filters.verifiedOnly ? w.isVerified : true;

    return matchName && matchCategory && matchVerified;
  });

  return (
    <div className="p-10 max-w-4xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black mb-8">🛠️ Local Skill Finder</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 bg-white p-6 rounded-2xl shadow-sm">
        {/* Task 5: Text Search */}
        <input name="search" placeholder="Name..." onChange={handleChange} className="border p-2 rounded" />

        {/* Task 6: THE DROPDOWN */}
        {/* HINT: name must be "category" */}
        <select name="category" onChange={handleChange} className="border p-2 rounded bg-white">
          <option value="All">All Skills</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Painter">Painter</option>
        </select>

        {/* Task 7: Checkbox */}
        <label className="flex items-center gap-2 font-bold">
          <input name="verifiedOnly" type="checkbox" onChange={handleChange} /> Verified
        </label>
      </div>

      {/* Task 8: Display Results Count */}
      {/* Task 9: Map Workers into Cards */}
    </div>
  );
}