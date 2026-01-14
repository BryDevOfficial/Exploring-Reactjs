import React, { useState } from 'react';

// Task 1: Interface 'BoatProps'
// (Keys: name, type, capacity, isOut)
interface BoatProps {
    name: string, type: string, capacity: number, isOut: boolean
}

// Task 2: Child Component 'BoatCard'
// HINT on Brackets: Use { } for logic/variables, use ( ) for returning JSX.
const BoatCard = ({name, type, capacity, isOut}: BoatProps) => {
  return (
    <div className={`p-6 rounded-2xl border-2 transition-all ${isOut ? 'border-blue-400 bg-blue-50 shadow-lg shadow-blue-100' : 'border-slate-200 bg-white'}`}>
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-black text-slate-800">{name}</h3>
        {/* Task 3: Status Badge */}
        {/* HINT: If isOut is true, show "🌊 AT SEA", else show "⚓ DOCKED" */}
        {
        isOut ? "🌊": "⚓"
        }
      </div>
      <p className="text-slate-500 font-medium">{type} • {capacity} Pax</p>
    </div>
  );
};

export default function RentingSystem() {
  const [boats] = useState([
    { id: 1, name: "Sea Eagle I", type: "Speedboat", capacity: 6, isOut: true },
    { id: 2, name: "Island Hopper", type: "Catamaran", capacity: 12, isOut: false },
    { id: 3, name: "Blue Marlin", type: "Yacht", capacity: 20, isOut: true },
    { id: 4, name: "Sunset Cruiser", type: "Speedboat", capacity: 8, isOut: false },
  ]);

  // Task 4: State with 2 keys
  const [filters, setFilters] = useState({
    boatSearch: '',
    onlyOutAtSea: false
  });

  // Task 5: Handle Change (The Muscle Memory Part!)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. Destructure
    // 2. Logic: Check if 'type' is EXACTLY 'checkbox'
    // 3. Update State using [name]: ...
    const {type, name, checked, value} = e.target;
    setFilters((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked: value
    }))
  };

  // Task 6: Filtering Logic
  // HINT: Gatekeeper Pattern - If onlyOutAtSea is true, isOut must be true.
  const filteredBoats = boats.filter(boat => {
    const matchName = boat.name.toLocaleLowerCase().includes(filters.boatSearch)
    const matchStatus = filters.onlyOutAtSea ? boat.isOut: true;
    return matchName && matchStatus;
  });

  return (
    <div className="p-10 max-w-4xl mx-auto min-h-screen bg-slate-50">
      <h1 className="text-3xl font-black text-slate-900 mb-8">🚢 Fleet Operations</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Task 7: Text Input */}
        {/* IMPORTANT: 'name' must match your state key! */}
        <input 
          type="text" 
          placeholder="Search by boat name..."
          className="flex-1 p-4 rounded-xl border-2 border-slate-200 outline-none focus:border-blue-500"
          // Props here
          name="boatSearch"
          onChange={handleChange}
        />

        {/* Task 8: Checkbox Input */}
        <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border-2 border-slate-200">
          <input 
            type="checkbox" 
            id="outCheck"
            className="w-6 h-6 accent-blue-600"
            // Props here
            name="onlyOutAtSea"
            onChange={handleChange}
          />
          <label htmlFor="outCheck" className="font-bold text-slate-700 cursor-pointer">Show Only Out at Sea</label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Task 9: Mapping */}
        {/* HINT: .map( (item) => ( <JSX /> ) ) */}
        {
            filteredBoats.map((boat) => (
                <BoatCard key={boat.id} name={boat.name} type={boat.type} capacity={boat.capacity} isOut={boat.isOut} />
            ))
        }
      </div>

      {/* Task 10: Empty State */}
      {
        filteredBoats.length === 0 &&
        (
        <span className='text-gray-400'>Sorry no match found {filters.boatSearch}</span>
        )
      }
    </div>
  );
}