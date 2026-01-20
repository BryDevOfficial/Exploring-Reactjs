This is a great mindset. Repetition is exactly how "muscle memory" is built in coding.

For this round, let's use your **Payroll System (#4)** from your project list. This is perfect because it combines **math (salary)**, **filtering (department)**, and **deleting (removing employees)**.

### 🏢 Project: Employee Payroll Dashboard

**The Goal:** Manage a list of employees. You'll need to calculate the total monthly payout and be able to filter by "Contract" vs "Full-Time" status.

```tsx
import React, { useState } from 'react';

export default function PayrollManager() {
  // --- TEST AREA ---
  
  // 1. TODO: Create 'employees' state using these 4 objects:
  /*
    { id: 1, name: "Alice Guo", position: "Manager", salary: 75000, type: "Full-Time" },
    { id: 2, name: "Bob Ong", position: "Developer", salary: 45000, type: "Contract" },
    { id: 3, name: "Cynthia Villar", position: "Designer", salary: 35000, type: "Full-Time" },
    { id: 4, name: "David Licauco", position: "Intern", salary: 15000, type: "Contract" }
  */

  // 2. TODO: Create 'showContractorsOnly' state (Boolean - default false)
  // 3. TODO: Create 'searchQuery' state (Universal handler object)

  // --- LOGIC AREA ---
  // TODO: Filter logic
  // Gate 1: Match search name
  // Gate 2: If showContractorsOnly is true, only show "Contract" type
  
  // TODO: handleDelete function (Remember: Filter THEN Set!)
  
  // TODO: Calculate Total Payout (Sum of salaries of the FILTERED list)

  return (
    <div className="p-8 max-w-5xl mx-auto bg-slate-50 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-slate-800">HR Payroll</h1>
        
        {/* TASK 1: Toggle Mode */}
        <button 
          className={`px-5 py-2 rounded-lg font-bold transition-all ${
            false ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
          }`}
          onClick={() => {}} // TODO: Toggle state
        >
          {/* TODO: Text "Show Contractors" vs "Show All" */}
          Filter Status
        </button>
      </div>

      {/* TASK 2: Total Payout Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6 flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-xs font-bold uppercase">Monthly Budget</p>
          <h2 className="text-4xl font-black text-indigo-600">₱ 0.00</h2>
        </div>
        <div className="text-right">
            <p className="text-slate-400 text-xs font-bold uppercase">Staff Count</p>
            <p className="text-2xl font-bold text-slate-700">0</p>
        </div>
      </div>

      {/* TASK 3: Search Input */}
      <input 
        type="text"
        name="employeeName"
        placeholder="Search staff..."
        className="w-full p-4 rounded-xl border border-slate-200 mb-6 outline-none focus:ring-2 focus:ring-indigo-400"
        onChange={() => {}} // TODO: Universal handler
      />

      {/* TASK 4: Employee Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold">
            <tr>
              <th className="p-4">Employee</th>
              <th className="p-4">Type</th>
              <th className="p-4 text-right">Monthly Salary</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Map filtered employees */}
            {/* TODO: Empty state if no one found */}
            
            <tr className="border-t border-slate-100">
              <td className="p-4">
                <p className="font-bold text-slate-800 italic">Name</p>
                <p className="text-xs text-slate-500">Position</p>
              </td>
              <td className="p-4">
                <span className="px-2 py-1 rounded text-[10px] font-bold bg-slate-100">
                  TYPE
                </span>
              </td>
              <td className="p-4 text-right font-mono text-slate-600">₱ 0.00</td>
              <td className="p-4 text-center">
                <button 
                    className="text-rose-500 hover:scale-110 transition-transform"
                    onClick={() => {}} // TODO: Delete
                >
                    Terminate
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

### 🧠 Your Challenge Checklist:

1. **Immutability Test:** In `handleDelete`, make sure you use `setEmployees` after your filter.
2. **Logic Chaining:** Make sure searching for "Alice" while the "Contractors" toggle is **ON** results in an empty list (since Alice is Full-Time).
3. **Math Check:** Use `.reduce()` on the **filtered** list so the "Monthly Budget" card changes when you filter the names.
