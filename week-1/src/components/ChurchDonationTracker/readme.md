This is your **Mastery Challenge**. Since your project plan includes a **Church Financial System**, let’s build a **"Church Tithes & Donations"** tracker.

This exercise will test your ability to handle **toggles, search, deletion, and conditional rendering** from scratch. I have provided the UI "Shell" and the data objects.

### ⛪ Project: Church Donation Tracker

**Mission:** Create a dashboard that allows the Church Secretary to filter donors, delete records, and toggle a "Privacy Mode" that hides the donation amounts.

```tsx
import React, { useState } from 'react';

export default function ChurchDonationTracker() {
  // --- MASTER TEST AREA ---
  
  // 1. TODO: Create 'donations' state using these 4 objects:
  /*
    { id: 1, donor: "Brother Eli", amount: 5000, category: "Tithes", date: "2026-01-20" },
    { id: 2, donor: "Sister Sarah", amount: 2500, category: "Mission Fund", date: "2026-01-21" },
    { id: 3, donor: "Deacon John", amount: 10000, category: "Building Fund", date: "2026-01-22" },
    { id: 4, donor: "Brother Mike", amount: 1500, category: "Tithes", date: "2026-01-22" }
  */

  // 2. TODO: Create 'privacyMode' state (Boolean - default false)
  // 3. TODO: Create 'searchQuery' state (String or Object)

  // --- LOGIC AREA ---
  // TODO: Filter 'donations' based on donor name
  // TODO: Create handleDelete function
  // TODO: Create total donation calculation (reduce)

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
          onClick={() => {}} // TODO: Toggle privacyMode
        >
           {/* TODO: Change text: "Disable Privacy" : "Enable Privacy" */}
           Privacy Mode
        </button>
      </div>

      {/* TASK 2: Conditional Rendering (Total Amount) */}
      {/* TODO: Only show this Card if privacyMode is FALSE */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
          <p className="text-slate-400 uppercase text-xs font-bold tracking-widest">Total Collection</p>
          <h2 className="text-4xl font-black text-slate-800">₱ 0.00</h2> {/* TODO: Show Sum */}
      </div>

      {/* TASK 3: Search Bar */}
      <div className="relative mb-6">
        <input 
          type="text" 
          placeholder="Search donor name..."
          className="w-full p-4 pl-12 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-indigo-500"
          onChange={() => {}} // TODO: Handle search
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
            
            <tr className="border-t border-slate-50 hover:bg-slate-50 transition-colors">
              <td className="p-5 font-bold text-slate-700 underline decoration-indigo-200">Donor Name</td>
              <td className="p-5 text-slate-500 text-sm">Category</td>
              <td className="p-5 text-right font-black text-indigo-600">
                ₱ 0.00 
              </td>
              <td className="p-5 text-center">
                <button 
                  className="bg-rose-50 text-rose-600 px-4 py-1 rounded-lg text-xs font-bold hover:bg-rose-600 hover:text-white transition-all"
                  onClick={() => {}} // TODO: Delete
                >
                  REMOVE
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

```

### 🚨 Challenge Requirements:

1. **Privacy Toggle:** When Privacy Mode is ON, the big "Total Collection" card must **disappear**, and the individual amounts in the table must change to `"₱ ****"`.
2. **Deletion:** Clicking REMOVE must update the `Total Collection` sum immediately.
3. **Search:** Table should update in real-time as you type.
4. **Empty State:** If no names match, show a message across the whole row.