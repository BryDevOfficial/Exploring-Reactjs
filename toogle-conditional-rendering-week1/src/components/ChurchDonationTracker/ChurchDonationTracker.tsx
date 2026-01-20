import React, { useState } from 'react';

export default function ChurchDonationTracker() {
  // --- MASTER TEST AREA ---
  
  // 1. TODO: Create 'donations' state using these 4 objects:
  const [donations, setDonations] = useState([
    { id: 1, donor: "Brother Eli", amount: 5000, category: "Tithes", date: "2026-01-20" },
    { id: 2, donor: "Sister Sarah", amount: 2500, category: "Mission Fund", date: "2026-01-21" },
    { id: 3, donor: "Deacon John", amount: 10000, category: "Building Fund", date: "2026-01-22" },
    { id: 4, donor: "Brother Mike", amount: 1500, category: "Tithes", date: "2026-01-22" }
        ])

  // 2. TODO: Create 'privacyMode' state (Boolean - default false)
  const [privacyMode, setPrivacyMode] = useState(false)

  // 3. TODO: Create 'searchQuery' state (String or Object)
  const [searchQuery, setSearchQuery] = useState({
    searchDonor: ''
  })
  //Universal onChange handler
  const handleSearchChange = ((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {type, name, value} = e.target
        const checked = (e.target as HTMLInputElement).checked
        setSearchQuery((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        })) })

  // --- LOGIC AREA ---
  // TODO: Filter 'donations' based on donor name
  const filteredDonations = donations.filter((person) => {
    return person.donor.toLocaleLowerCase().includes(searchQuery.searchDonor.toLocaleLowerCase())
  })
  // TODO: Create handleDelete function
  const handleDelete = (id: number) => {
    const updatedDonations = donations.filter((person) => person.id !== id)
    setDonations(updatedDonations)
  }
  // TODO: Create total donation calculation (reduce)
  const totalDonation = donations.reduce((acc, curr) => acc + curr.amount , 0)

  return (
    <div className="p-8 max-w-4xl mx-auto bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-black text-indigo-900">🙏 Church Tithes</h1>
          <p className="text-slate-500">Financial Stewardship Dashboard</p>
        </div>

        {/* TASK 1: Toggle Button (Privacy Mode) */}
        <button 
          className="px-6 py-2 rounded-full font-bold transition-all bg-indigo-600 text-white"
          onClick={() => {setPrivacyMode(!privacyMode)}} // TODO: Toggle privacyMode
        >
           {/* TODO: Change text: "Disable Privacy" : "Enable Privacy" */}
           {privacyMode ? 'Disable Privacy' : 'Enable Privacy'}
        </button>
      </div>

      {/* TASK 2: Conditional Rendering (Total Amount) */}
      {/* TODO: Only show this Card if privacyMode is FALSE */}
      {privacyMode ? null : (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
          <p className="text-slate-400 uppercase text-xs font-bold tracking-widest">Total Collection</p>
          <h2 className="text-4xl font-black text-slate-800">₱ {totalDonation.toLocaleString()}</h2>
      </div>
      )}

      {/* TASK 3: Search Bar */}
      <div className="relative mb-6">
        <input 
          type="text" 
          name='searchDonor'
          placeholder="Search donor name..."
          className="w-full p-4 pl-12 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-indigo-500"
          onChange={handleSearchChange}
        />
        <span className="absolute left-4 top-4 opacity-30">🔍</span>
      </div>

      {/* TASK 4: Table & Conditional Rendering */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-400 text-[10px] uppercase font-black">
              <th className="p-5">Donor</th>
              <th className="p-5">Category</th>
              <th className="p-5 text-right">Amount</th>
              <th className="p-5 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Map through filtered donations */}
            {/* TODO: Inside Amount <td>, IF privacyMode is true, show "****" ELSE show amount */}
            {/* TODO: Add a "No Results Found" row if list is empty */}
           {filteredDonations.length > 0 ?
           
            (
                 filteredDonations.map((item) => (
              <tr key={item.id} className="border-t border-slate-50 hover:bg-slate-50 transition-colors">
              <td className="p-5 font-bold text-slate-700 underline decoration-indigo-200">{item.donor}</td>
              <td className="p-5 text-slate-500 text-sm">{item.category}</td>
              <td className="p-5 text-right font-black text-indigo-600">
                ₱ {
                privacyMode ? '****' :
                item.amount.toLocaleString()
                }
              </td>
              <td className="p-5 text-center">
                <button 
                  className="bg-rose-50 text-rose-600 px-4 py-1 rounded-lg text-xs font-bold hover:bg-rose-600 hover:text-white transition-all"
                  onClick={() => {handleDelete(item.id)}} // TODO: Delete
                >
                  REMOVE
                </button>
              </td>
            </tr>
            ))
            ) : (

                <tr>
         <td colSpan={4} className="p-10 text-center text-slate-400 italic">
           No donations found matching your search.
         </td>
       </tr>
            )
        
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}