import React, { useState } from 'react';

// Task 1: Interface 'DonationProps'
// Keys: donor, amount, fundType (e.g., 'Youth', 'Building'), isAnonymous
interface DonationProps {
    donor: string, amount: number, fundType: string, isAnonymous: boolean
}

// Task 2: Child Component 'DonationCard'
// HINT: Use { } for logic and ( ) for the JSX return.
// STYLING HINT: If amount >= 1000, use 'bg-yellow-50 border-yellow-200'.
const DonationCard = ({donor, amount, fundType, isAnonymous}: DonationProps) => {
  return (
    <div className={`p-4 rounded-xl border-2 transition-all ${ /* logic here */ "" }`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-slate-800">{isAnonymous ? "Anonymous" : donor}</h3>
          <p className="text-xs text-slate-500 uppercase tracking-widest">{fundType}</p>
        </div>
        <span className="text-lg font-black text-emerald-600">
          ₱{amount.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default function ChurchFinancialSystem() {
  const [donations] = useState([
    { id: 1, donor: "Brother Eli", amount: 5000, fundType: "Building", isAnonymous: false },
    { id: 2, donor: "Sister Joy", amount: 500, fundType: "Youth", isAnonymous: false },
    { id: 3, donor: "Anon", amount: 1200, fundType: "Mission", isAnonymous: true },
    { id: 4, donor: "Brother Mike", amount: 200, fundType: "General", isAnonymous: false },
  ]);

  // Task 3: State Setup
  // HINT: Use keys 'searchName' and 'showHighValue'
  const [filters, setFilters] = useState({
    searchName: '',
    showHighValue: false
  });

  // Task 4: Universal Handle Change
  // HINT: This is the most important part for muscle memory. 
  // Remember 'type' vs 'checked'.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 1. Destructure
    const {name, type, checked, value} = e.target;
    // 2. setFilters using prev state
    setFilters((prev) =>({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }))
  };

  // Task 5: Filtering Logic
  // HINT: For matchAmount, if showHighValue is true, 
  // only return items where donation.amount >= 1000.
  const filteredDonations = donations.filter(donation => {
    const matchName = donation.donor.toLocaleLowerCase().includes(filters.searchName.toLocaleLowerCase());
    const matchAmount = filters.showHighValue ? donation.amount >= 1000 : true;
    return matchName && matchAmount;
  });

  return (
    <div className="p-8 max-w-2xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-black text-slate-900 mb-6">⛪ Financial Records</h1>

      <div className="flex flex-col gap-4 mb-8 bg-white p-6 rounded-2xl shadow-sm">
        {/* Task 6: Search Input */}
        <input 
          type="text" 
          placeholder="Search donor..."
          className="p-3 border-b-2 border-slate-100 outline-none focus:border-emerald-500 transition-all"
          // Props here
          onChange={handleChange}
          name='searchName'
        />

        {/* Task 7: Checkbox Input */}
        <div className="flex items-center gap-3 mt-2">
          <input 
            type="checkbox" 
            id="highValue"
            className="w-5 h-5 accent-emerald-600"
            // Props here
          onChange={handleChange}
          name='showHighValue'
          />
          <label htmlFor="highValue" className="text-sm font-bold text-slate-600 cursor-pointer">
            Show High Value (₱1,000+)
          </label>
        </div>
      </div>

      <div className="grid gap-4">
        {/* Task 8: Mapping */}
        {/* HINT: Use ( ) for the implicit return! */}
        {
            filteredDonations.map((donate) => 
                (
<DonationCard key={donate.id} donor={donate.donor} amount={donate.amount} fundType={donate.fundType} isAnonymous={donate.isAnonymous} />)
            )
        
    }
      </div>

      {/* Task 9: Empty State */}
      {
        filteredDonations.length === 0 && 
        (
        <span>no match found {filters.searchName}</span>
        )
      }
      {/* Task 10: Total Calculation (Optional Bonus) */}
      {/* HINT: filteredDonations.reduce((acc, curr) => acc + curr.amount, 0) */}
    </div>
  );
}