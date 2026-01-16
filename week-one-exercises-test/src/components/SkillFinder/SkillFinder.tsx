import React, { useState } from 'react';

// TODO: Task 1 - Interface
 interface Worker {
    name: string, skill: string, yearsOfExperience: number, isAvailableNow: boolean
}

function SkillFinderCard({name, skill, yearsOfExperience, isAvailableNow}: Worker) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">{name}</h2>
            <p className="text-slate-700">{skill}</p>
            <p className="text-slate-600">Years of Experience: {yearsOfExperience}</p>
            <p className={`font-medium ${isAvailableNow ? 'text-green-600' : 'text-red-600'}`}>
                {isAvailableNow ? 'Available Now' : 'Not Available'}
            </p>
        </div>
    );
}

export default function SkillFinder() {
  const [workers] = useState([
    { id: 1, name: "Mang Tomas", skill: "Plumber", yearsOfExperience: 12, isAvailableNow: true },
    { id: 2, name: "Aling Nena", skill: "Electrician", yearsOfExperience: 5, isAvailableNow: false },
    { id: 3, name: "Boy Carpintero", skill: "Carpenter", yearsOfExperience: 20, isAvailableNow: true },
    { id: 4, name: "Rico Flush", skill: "Plumber", yearsOfExperience: 2, isAvailableNow: true },
  ]);

  // TODO: Task 2 - State Setup
  const [filters, setFilters] = useState({
    search: '',
    skillCategory: 'All',
    minExperience: 0,
    onlyAvailable: false
  })
  
  // TODO: Task 3 - Universal Handle Change (With Number conversion for minExperience)

  // TODO: Task 4 - Filter Logic (The 4 Gatekeepers)

  // TODO: Task 5 - Average Calculation (Reduce)

  return (
    <div className="p-10 max-w-5xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black mb-8 text-slate-900">🛠️ Local Skill Finder</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        {/* TODO: UI - Search */}
        
        {/* TODO: UI - Skill Select */}
        
        {/* TODO: UI - Min Experience Number Input */}
        
        {/* TODO: UI - Available Checkbox */}
      </div>

      {/* TODO: UI - Display Stats (Count and Average) */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* TODO: UI - Map Workers into Cards */}
      </div>
    </div>
  );
}