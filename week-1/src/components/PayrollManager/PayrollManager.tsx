import React, { useState } from 'react';

export default function PayrollManager() {
  // --- TEST AREA ---
  
  // 1. TODO: Create 'employees' state using these 4 objects:
 const [employees, setEmployees] = useState([
    { id: 1, name: "Alice Guo", position: "Manager", salary: 75000, type: "Full-Time" },
    { id: 2, name: "Bob Ong", position: "Developer", salary: 45000, type: "Contract" },
    { id: 3, name: "Cynthia Villar", position: "Designer", salary: 35000, type: "Full-Time" },
    { id: 4, name: "David Licauco", position: "Intern", salary: 15000, type: "Contract" }
    ])

  // 2. TODO: Create 'showContractorsOnly' state (Boolean - default false)
  const [showContractorsOnly, setShowContractorsOnly] = useState(false)
  // 3. TODO: Create 'searchQuery' state (Universal handler object)
  const [searchQuery, setSearchQuery] = useState({
    employeeName: ''
  })

  //Universal handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {type, name, value} = e.target
        const checked = (e.target as HTMLInputElement).checked
        setSearchQuery((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
  }

  // --- LOGIC AREA ---
  // TODO: Filter logic
  // Gate 1: Match search name
  // Gate 2: If showContractorsOnly is true, only show "Contract" type
  const filterEmployees = employees.filter((item) => {
        const searchName = item.name.toLocaleLowerCase().includes(searchQuery.employeeName.toLocaleLowerCase())
        const checkContractor = showContractorsOnly ? item.type === 'Contract' : true;
        return searchName && checkContractor
  })
  
  // TODO: handleDelete function (Remember: Filter THEN Set!)
  const handleDelete = (id: number) => {
        const newEmployeeList = employees.filter((item) => item.id !== id)
        setEmployees(newEmployeeList)
  }
  
  // TODO: Calculate Total Payout (Sum of salaries of the FILTERED list)
  const totalPayout = filterEmployees.reduce((acc, curr) => acc + curr.salary , 0)

  return (
    <div className="p-8 max-w-5xl mx-auto bg-slate-50 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-slate-800">HR Payroll</h1>
        {/* TASK 1: Toggle Mode */}
        <button 
          className={`px-5 py-2 rounded-lg font-bold transition-all ${
            false ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
          }`}
          onClick={() => setShowContractorsOnly(!showContractorsOnly)} // TODO: Toggle state
        >
          {/* TODO: Text "Show Contractors" vs "Show All" */}
          {showContractorsOnly ? 'Show All' : 'Show Contractors'}
        </button>
      </div>

      {/* TASK 2: Total Payout Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6 flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-xs font-bold uppercase">Monthly Budget</p>
          <h2 className="text-4xl font-black text-indigo-600">₱{totalPayout.toLocaleString()}</h2>
        </div>
        <div className="text-right">
            <p className="text-slate-400 text-xs font-bold uppercase">Staff Count</p>
            <p className="text-2xl font-bold text-slate-700">{filterEmployees.length}</p>
        </div>
      </div>

      {/* TASK 3: Search Input */}
      <input 
        type="text"
        name="employeeName"
        placeholder="Search staff..."
        className="w-full p-4 rounded-xl border border-slate-200 mb-6 outline-none focus:ring-2 focus:ring-indigo-400"
        onChange={handleChange} // TODO: Universal handler
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
            {
            filterEmployees.length > 0 ? (
                 filterEmployees.map((item) => (
             
                <tr key={item.id} className="border-t border-slate-100">
              <td className="p-4">
                <p className="font-bold text-slate-800 italic">{item.name}</p>
                <p className="text-xs text-slate-500">{item.position}</p>
              </td>
              <td className="p-4">
                <span className="px-2 py-1 rounded text-[10px] font-bold bg-slate-100">
                  {item.type}
                </span>
              </td>
              <td className="p-4 text-right font-mono text-slate-600">₱{item.salary}</td>
              <td className="p-4 text-center">
                <button 
                    className="text-rose-500 hover:scale-110 transition-transform"
                    onClick={() => handleDelete(item.id)} // TODO: Delete
                >
                    Terminate
                </button>
              </td>
            </tr>
            ))
            ) : (
              <tr className="border-t border-slate-100">
              <td colSpan={4} className="p-4">
                <p className="font-bold text-slate-800 italic text-center">No employees found matching your criteria. {searchQuery.employeeName}</p>
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