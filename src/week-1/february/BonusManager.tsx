import { useState } from 'react'

export default function BonusManager() {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice', dept: 'Dev', salary: 5000 },
    { id: 2, name: 'Bob', dept: 'Design', salary: 4000 },
    { id: 3, name: 'Charlie', dept: 'Dev', salary: 5500 },
    { id: 4, name: 'Diana', dept: 'HR', salary: 3500 },
  ])

  const [filterDept, setFilterDept] = useState('All')

  // 1. Derived State: The visible list (You've mastered this!)
  const visibleEmployees =
    filterDept === 'All' ? employees : employees.filter((e) => e.dept === filterDept)

  // 2. TODO: Create 'applyBonus' function
  // Logic:
  // - Map through the ORIGINAL 'employees' state.
  // - If the employee's ID is found in the 'visibleEmployees' list,
  //   return a new object with salary + 500.
  // - Otherwise, return the employee unchanged.
  const applyBonus = () => {
    // Write the bulk update logic here...
    setEmployees((prevEmployees) => {
      return prevEmployees.map((bonus) => {
        const found = visibleEmployees.find((emp) => emp.id === bonus.id)
        return found ? { ...bonus, salary: bonus.salary + 500 } : bonus
      })
    })
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-black text-slate-800 uppercase tracking-tighter">
          Bonus Processor
        </h1>

        <select
          onChange={(e) => setFilterDept(e.target.value)}
          className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-bold"
        >
          <option value="All">All Departments</option>
          <option value="Dev">Dev</option>
          <option value="Design">Design</option>
          <option value="HR">HR</option>
        </select>
      </div>

      <div className="space-y-2 mb-6">
        {visibleEmployees.map((emp) => (
          <div
            key={emp.id}
            className="flex justify-between p-3 bg-slate-50 rounded-xl border border-slate-100"
          >
            <span className="font-bold text-slate-700">
              {emp.name} <span className="text-[10px] text-slate-400">({emp.dept})</span>
            </span>
            <span className="font-mono font-bold text-emerald-600">
              ${emp.salary.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* 3. The Action Button */}
      <button
        onClick={applyBonus}
        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
      >
        APPLY $500 BONUS TO {filterDept.toUpperCase()} ({visibleEmployees.length})
      </button>

      <p className="mt-4 text-[10px] text-center text-slate-400 uppercase font-bold tracking-widest">
        This will only affect the {visibleEmployees.length} employees shown above.
      </p>
    </div>
  )
}
