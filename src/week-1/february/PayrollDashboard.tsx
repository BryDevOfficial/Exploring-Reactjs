import { useState } from 'react'

export default function PayrollDashboard() {
  const [employees] = useState([
    { id: 1, name: 'Alice', dept: 'Dev', salary: 5000 },
    { id: 2, name: 'Bob', dept: 'Design', salary: 4000 },
    { id: 3, name: 'Charlie', dept: 'Dev', salary: 5500 },
    { id: 4, name: 'Diana', dept: 'HR', salary: 3500 },
  ])

  // 1. State for filter (e.g., 'All', 'Dev', 'Design', 'HR')
  const [filterDept, setFilterDept] = useState('All')

  // 2. TODO: Create 'filteredEmployees' (Derived State)
  // Logic: If filterDept is 'All', show everyone. Otherwise, .filter() by dept.
  const filteredEmployees =
    filterDept === 'All' ? employees : employees.filter((s) => s.dept === filterDept)

  // 3. TODO: Calculate 'totalPayout' (Derived State)
  // Logic: .reduce() the salaries of ONLY the 'filteredEmployees'
  const totalPayout = filteredEmployees.reduce((acc, curr) => acc + curr.salary, 0)

  return (
    <div className="p-8 max-w-2xl mx-auto bg-slate-50 rounded-[2rem] shadow-2xl border border-slate-200">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight text-indigo-900">
            PAYROLL OVERVIEW
          </h1>
          <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">
            Phase 7: Financials
          </p>
        </div>

        {/* Department Switcher */}
        <select
          onChange={(e) => setFilterDept(e.target.value)}
          className="p-3 rounded-xl bg-white border border-slate-200 font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
        >
          <option value="All">All Departments</option>
          <option value="Dev">Developers</option>
          <option value="Design">Designers</option>
          <option value="HR">Human Resources</option>
        </select>
      </div>

      <div className="space-y-3">
        {/* 4. TODO: Map through filteredEmployees */}
        {filteredEmployees.map((emp) => (
          <div
            key={emp.id}
            className="p-4 bg-white rounded-2xl flex justify-between items-center shadow-sm border border-slate-100 transition-all hover:scale-[1.01]"
          >
            <div>
              <p className="font-bold text-slate-800">{emp.name}</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {emp.dept}
              </p>
            </div>
            <p className="font-mono font-black text-lg text-slate-900">
              ${emp.salary.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="mt-8 p-6 bg-indigo-600 rounded-[2rem] text-white flex justify-between items-center shadow-lg shadow-indigo-200">
        <span className="font-bold opacity-80 uppercase text-xs tracking-widest">
          Budget for {filterDept}
        </span>
        <span className="text-3xl font-black">${totalPayout.toLocaleString()}</span>
      </div>
    </div>
  )
}
