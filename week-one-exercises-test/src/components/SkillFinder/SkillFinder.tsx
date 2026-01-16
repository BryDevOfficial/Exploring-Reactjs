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
  const handleChange = ((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {type, value, name} = e.target;
    const checked = (e.target as HTMLInputElement).checked
    setFilters((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : (name === 'minExperience' ? Number(value) : value)
    }))
  })
  // TODO: Task 4 - Filter Logic (The 4 Gatekeepers)
  const filteredWorkers = workers.filter((person) => {
    const searchName = person.name.toLocaleLowerCase().includes(filters.search.toLocaleLowerCase())
    const searchSkills = filters.skillCategory === 'All' ? true : (person.skill === filters.skillCategory)
    const searchWorkersOnly = person.yearsOfExperience >= filters.minExperience
    const searchAvailableWorkers = filters.onlyAvailable ? person.isAvailableNow : true
    return(searchName && searchSkills && searchWorkersOnly && searchAvailableWorkers)
  })

  // TODO: Task 5 - Average Calculation (Reduce)
 const sumOfExperience = filteredWorkers.reduce((acc, curr) => acc + curr.yearsOfExperience ,0)
 const avgOfExperience = filteredWorkers.length > 0 ? sumOfExperience / filteredWorkers.length : 0

  return (
    <div className="p-10 max-w-5xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black mb-8 text-slate-900">🛠️ Local Skill Finder</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        {/* TODO: UI - Search */}
        <input type='text' className='border border-slate-300 rounded-lg p-2 w-full' name='search' onChange={handleChange} placeholder='Search...' />
        {/* TODO: UI - Skill Select */}
        <select className='border border-slate-300 rounded-lg p-2 w-full' name='skillCategory' onChange={handleChange}>
          <option value="All">All Skills</option>
          <option value="Plumber">Plumber</option>
          <option value="Electrician">Electrician</option>
          <option value="Carpenter">Carpenter</option>
        </select>

        {/* TODO: UI - Min Experience Number Input */}
        <input type='number' className='border border-slate-300 rounded-lg p-2 w-full' name='minExperience' onChange={handleChange} placeholder='Min Experience' />

        {/* TODO: UI - Available Checkbox */}
        <div className="flex items-center">
          <input type='checkbox' className='mr-2' name='onlyAvailable' onChange={handleChange} />
          <label htmlFor='onlyAvailable' className='text-slate-700'>Only Show Available</label>
        </div>
      </div>

      {/* TODO: UI - Display Stats (Count and Average) */}
      <div className="mb-6">
        <p className="text-slate-700">Total Workers: {filteredWorkers.length}</p>
        <p className="text-slate-700">Average Years of Experience: {avgOfExperience.toFixed(2)}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* TODO: UI - Map Workers into Cards */}
        {filteredWorkers.map((worker) => (
            <SkillFinderCard 
                key={worker.id}
                name={worker.name}
                skill={worker.skill}
                yearsOfExperience={worker.yearsOfExperience}
                isAvailableNow={worker.isAvailableNow}  
            />
        ))}
      </div>
    </div>
  );
}