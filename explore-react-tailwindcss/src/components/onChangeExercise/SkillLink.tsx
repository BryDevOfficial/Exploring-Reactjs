import React, { useState } from 'react';

// Task 1: Interface 'ProviderProps'
// Hint: Look at the data in the state. You need 5 keys. 
// Do you need 'id' in the Interface if you only use it for the 'key' in map? 
interface ProviderProps {
  name: string,
  skill: string,
  location: string,
  isVerified: boolean
}

// Task 2: Child Component 'ProviderCard'
// Hint: Use the "Conditional Class" pattern for the gold border.
// Gold border should only appear if 'isVerified' is true.
const ProviderCard = ({name, skill, location, isVerified}: ProviderProps) => {
  return (
    <div className={`p-5 rounded-3xl border-4 transition-all ${isVerified ? "border-b-emerald-600" : "border-b-gray-200" }`}>
       <div className="flex justify-between items-center">
          <h3 className="text-xl font-black text-slate-800">{name}</h3>
          {/* Task 3: Badge UI */}
          {/* Hint: Use logical && to show a "Verified" span ONLY if isVerified is true */}
          {isVerified &&
          (<span className="bg-green-500 text-white text-[10px] px-2 py-1 rounded-md font-black">VERIFIED</span>)}
       </div>
       <p className="text-indigo-600 font-bold uppercase text-xs tracking-widest">{skill}</p>
       <div className="mt-4 flex justify-between items-center text-sm text-slate-500">
          <span>{location}</span>
          <span className="bg-slate-100 px-2 py-1 rounded-lg">⭐ 4.9</span>
       </div>
    </div>
  );
};

export default function SkillLink() {
  const [providers] = useState([
    { id: 1, name: "Alex Rivera", skill: "Plumbing", location: "Manila", isVerified: true },
    { id: 2, name: "Sarah G.", skill: "Electrical", location: "Quezon City", isVerified: false },
    { id: 3, name: "Mike Concepcion", skill: "Plumbing", location: "Makati", isVerified: true },
    { id: 4, name: "Luzviminda K.", skill: "Carpentry", location: "Pasig", isVerified: false },
  ]);

  // Task 4: Setup State
  // Hint: Make sure your keys here (e.g. 'searchSkill') 
  // match the 'name' attribute in your inputs later!
  const [filters, setFilters] = useState({
     // Add keys here
     searchSkill: '',
     verifiedSkill: false
  });

  // Task 5: The Universal Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Hint: Destructure 'type', 'name', 'checked', and 'value'
    // Logic: type === 'checkbox' ? checked : value
    const {type, name, checked, value} = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === 'checked' ? checked: value
    }))
  };

  // Task 6: The Logic (The Filter)
  const filteredProviders = providers.filter(worker => {
    // Hint A: Compare worker.skill to filters.yourKey (use toLowerCase)
    const matchSkill = worker.skill.toLocaleLowerCase().includes(filters.searchSkill);
    
    // Hint B: Use the "Gatekeeper" pattern: 
    // "Is the filter ON? If yes, check worker status. If no, let everyone pass."
    const matchVerified = filters.verifiedSkill ? worker.isVerified : true;

    return matchSkill && matchVerified;
  });

  return (
    <div className="p-8 max-w-5xl mx-auto bg-slate-50 min-h-screen font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-4xl font-black text-slate-900 italic">SkillLink.</h1>
        
        <div className="flex items-center gap-6 bg-white p-3 rounded-2xl shadow-sm border border-slate-200">
           {/* Task 7: The Search Input */}
           {/* Hint: name must match your state key! */}
           <input 
              type="text" 
              placeholder="Search by skill..."
              className="outline-none px-2 border-r border-slate-100"
              // Add props here
              name="searchSkill"
              onChange={handleChange}
           />

           {/* Task 8: The Checkbox Input */}
           <div className="flex items-center gap-2 pr-2">
             <input 
                type="checkbox" 
                id="verifyCheck"
                className="w-5 h-5 accent-indigo-600"
                // Add props here
              name="verifiedSkill"
              onChange={handleChange}
             />
             <label htmlFor="verifyCheck" className="text-sm font-bold text-slate-600">Verified Only</label>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Task 9: Map the filteredProviders */}
      </div>

      {/* Task 10: The Empty State Guard */}
      {/* Hint: Check the length of filteredProviders */}
    </div>
  );
}