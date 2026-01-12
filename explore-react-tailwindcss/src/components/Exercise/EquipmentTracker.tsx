import React, { useState } from 'react';

// Task 1: Define a Child Component named 'StaffRow'
// It should accept 'name', 'dept', and 'totalPay' as props.
// It should return a <tr> (table row) with three <td> cells.
interface staffRowProps {
  name: string,
  dept: string;
  totalPay: number;
}
const StaffRow = ({name, dept, totalPay}: staffRowProps) => {
return(
  <tr>
    <td className="py-3">{name}</td>
    <td className="py-3">{dept}</td>
    <td className="py-3 text-right">₱ {totalPay.toLocaleString()}</td>
  </tr>
)

}

export default function StaffPayrollManager() {
  // Mock Data
  const staffData = [
    { id: 1, name: "Danilo", dept: "Kitchen", dailyRate: 600, daysWorked: 12 },
    { id: 2, name: "Elena", dept: "Housekeeping", dailyRate: 450, daysWorked: 15 },
    { id: 3, name: "Rico", dept: "Security", dailyRate: 550, daysWorked: 10 },
    { id: 4, name: "Gina", dept: "Kitchen", dailyRate: 600, daysWorked: 8 },
  ];

  // Task 2: Initialize State
  // Create an object state named 'filters' with two keys: 
  // 'deptQuery' (for text search) and 'minSalary' (initialized to 0).
  const [filters, setFilters] = useState({
    // ... complete this
    deptQuery: '',
    minSalary: 0
  });

  // Task 3: Handle Change
  // Create a universal handleChange function that updates the 'filters' object.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ... use the "Triangle of Truth" logic here
    const {name, value} = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }))
  };

  // Task 4: The Logic Filter & Calculation
  // 1. Filter the staffData based on 'filters.deptQuery'.
  // 2. Filter further: only show staff where (dailyRate * daysWorked) >= filters.minSalary.
  const processedStaff = staffData.filter(staff => {
    const totalPay = staff.dailyRate * staff.daysWorked;
    // ... return the condition for the filter
    return true; // placeholder
  });

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl border border-slate-200">
      <h1 className="text-2xl font-black text-indigo-900 mb-6">📊 Sea Eagle Payroll</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase">Search Department</label>
          {/* Task 5: Setup this Input */}
          <input 
            type="text" 
            name="deptQuery"
            className="w-full p-2 border-b-2 border-slate-100 outline-none focus:border-indigo-500"
            placeholder="e.g. Kitchen"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase">Min Salary (₱)</label>
          {/* Task 6: Setup this Input (Type should be number) */}
          <input 
            type="number" 
            name="minSalary"
            className="w-full p-2 border-b-2 border-slate-100 outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-slate-400 text-sm uppercase tracking-tighter">
            <th className="pb-4">Name</th>
            <th className="pb-4">Dept</th>
            <th className="pb-4 text-right">Total Pay</th>
          </tr>
        </thead>
        <tbody>
          {/* Task 7: Map through 'processedStaff' and render 'StaffRow' */}
          {/* Ensure you pass 'key', 'name', 'dept', and the calculated 'totalPay' */}
        </tbody>
      </table>

      {/* Task 8: Conditional Rendering */}
      {/* If processedStaff is empty, show a <div> with a message "No staff matches found" */}
    </div>
  );
}