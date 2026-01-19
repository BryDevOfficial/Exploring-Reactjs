import React, { useState } from 'react';

// TODO: Task 1 - Interface & ContributionRow Component (Must return <tr>)

interface Contribution {
  donorName: string;
  type: string;
  amount: number;
  isAnonymous: boolean;
}

function ContributionRowCard({ donorName, type, amount, isAnonymous }: Contribution) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="p-4">
        <div className="font-bold text-slate-800">{isAnonymous ? "Anonymous" : donorName}</div>
        <div className="text-xs text-slate-500 uppercase tracking-wider">{type}</div>
      </td>
      <td className="p-4 text-right font-bold text-slate-900">₱{amount.toLocaleString()}</td>
    </tr>
  );
}

export default function ChurchFinancialSystem() {
  const [contributions] = useState([
    { id: 1, donorName: "Brother Eli", type: "Tithe", amount: 5000, isAnonymous: false },
    { id: 2, donorName: "Sister Luz", type: "Offering", amount: 1200, isAnonymous: false },
    { id: 3, donorName: "Secret Donor", type: "Building Fund", amount: 10000, isAnonymous: true },
    { id: 4, donorName: "Brother Daniel", type: "Tithe", amount: 7500, isAnonymous: false },
    { id: 5, donorName: "Anonymous", type: "Offering", amount: 500, isAnonymous: true },
  ]);

  // TODO: Task 2 - State Setup (searchName, contributionType, showAnonymousOnly)
  const [filter, setFilter] = useState({
    searchName: '', 
    contributionType: 'All', 
    showAnonymousOnly: false
  })
  
  // TODO: Task 3 - Universal Handler (handleChange)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {type, name, value} = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFilter((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    })
    )
  }

  // TODO: Task 4 - Filter Logic (The 3 Gatekeepers)
  const contributors = contributions.filter((donator) => {
      const searchName = donator.donorName.toLocaleLowerCase().includes(filter.searchName)
      const searchType = filter.contributionType === 'All' ? true : donator.type === filter.contributionType
      const isAnonymous = filter.showAnonymousOnly ? donator.isAnonymous : true
      
      return (searchName && searchType && isAnonymous)
  })

  // TODO: Task 5 - Calculations (Gross, 10% Deduction, Net)
  const grossTotal = contributors.reduce((acc, curr) => acc + curr.amount ,0)
  const missionaryFund = grossTotal * 0.1;
  const netCollection = grossTotal - missionaryFund;

  return (
    <div className="p-10 max-w-6xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black mb-8 text-emerald-900">⛪ Church Financial Tracker</h1>

      {/* --- Filter Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        {/* TODO: UI - Search Input */}
        <input type='text' className='border border-slate-300 rounded-lg p-2 w-full' name='searchName' onChange={handleChange} placeholder='Search Products...' />
        {/* TODO: UI - Type Select (Tithe, Offering, Building Fund) */}
          <select className='border border-slate-300 rounded-lg p-2 w-full' name='contributionType' onChange={handleChange}>
          <option value="All">All Type</option>
          <option value="Tithe">Tithe</option>
          <option value="Offering">Offering</option>
          <option value="Building Fund">Building Fund</option>
        </select>
        {/* TODO: UI - Anonymous Checkbox */}
         <label className='flex items-center space-x-2'>
          <input type='checkbox' name='showAnonymousOnly' onChange={handleChange} />
          <span className='text-slate-700'>Anonymous Checkbox</span>
        </label>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-emerald-800 text-white">
            <tr>
              <th className="p-4">Donor</th>
              <th className="p-4">Type</th>
              <th className="p-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Task 6 - Map filtered items into ContributionRow */}
            {contributors.map((cont) => (
              <ContributionRowCard key={cont.id} donorName={cont.donorName} type={cont.type} amount={cont.amount} isAnonymous={cont.isAnonymous}  />
            ))}
          </tbody>
        </table>

        <div className="p-8 bg-emerald-50 border-t-2 border-emerald-100">
           {/* TODO: UI - Display Gross, 10% Deduction, and Net Collection with ₱ and Commas */}
           <div className="p-6 bg-slate-50 border-t-2 border-slate-200 text-right space-y-2">
  <p className="text-slate-600 text-sm">
    Gross: <span className="font-bold text-slate-900">₱{grossTotal.toLocaleString()}</span>
  </p>
  <p className="text-slate-600 text-sm">
    10% Deduction: <span className="font-bold text-slate-900">₱{missionaryFund.toLocaleString()}</span>
  </p>
  <div className="pt-2 border-t border-slate-200">
    <h2 className="text-2xl font-black text-indigo-700">
      Net Collection: ₱{netCollection.toLocaleString()}
    </h2>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}