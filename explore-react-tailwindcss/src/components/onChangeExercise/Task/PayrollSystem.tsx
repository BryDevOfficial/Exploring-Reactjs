import React, { useState } from 'react';

// TODO: Task 1 - Interface

export default function PayrollSystem() {
  const [employees] = useState([
    { id: 1, name: "Alice", department: "IT", salary: 75000, isContractor: false },
    { id: 2, name: "Bob", department: "HR", salary: 50000, isContractor: true },
    { id: 3, name: "Charlie", department: "IT", salary: 90000, isContractor: false },
    { id: 4, name: "Diana", department: "Sales", salary: 60000, isContractor: true },
  ]);

  // TODO: Task 2 - State Setup
  
  // TODO: Task 3 - Universal Handle Change

  // TODO: Task 4 - Filter Logic (The Gatekeepers)

  // TODO: Task 5 - Total Calculation (Reduce)

  return (
    <div className="p-10 max-w-4xl mx-auto bg-slate-50 min-h-screen font-sans">
      <h1 className="text-3xl font-black mb-8 text-indigo-900">🏦 Payroll Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        {/* TODO: UI - Search Input */}
        
        {/* TODO: UI - Department Select */}
        
        {/* TODO: UI - Contractor Checkbox */}
      </div>

      {/* TODO: UI - Display Count & Total Payroll */}

      <div className="grid gap-4">
        {/* TODO: UI - Map Employees into Cards */}
      </div>
    </div>
  );
}