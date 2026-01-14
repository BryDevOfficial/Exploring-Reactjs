import React, { useState } from 'react';

// Task 1: Create Interface
interface EmployeeProps {
    name: string,
    dept: string,
    salary: number,
    hasBonus: boolean
}
// Task 2: Create Child Component 'EmployeeRow'
const EmployeeRow = ({name, dept, salary, hasBonus }: EmployeeProps) => {
    return (
      <div className={`p-4 rounded-2xl border-2 transition-all ${hasBonus ? 'border-orange-200 bg-orange-50' : 'border-slate-100 bg-white'}`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-slate-800">{name}</h3>
            <p className="text-xs text-slate-500">{dept}</p>
          </div>
          {/* Task 3: Show "PROMO" badge ONLY if hasBonus is true */}
          {hasBonus && (
            <span className="bg-orange-500 text-white text-[10px] px-2 py-1 rounded-md font-black">BONUS</span>
          )}
        </div>
        <div className="mt-4">
          <span className={`text-xl font-black ${hasBonus ? 'text-red-600' : 'text-slate-900'}`}>
            ₱{salary.toLocaleString()}
          </span>
        </div>
      </div>
    );
  };

export default function PayrollSystem() {
  const [employees] = useState([
    { id: 1, name: "Maria Santos", dept: "Housekeeping", salary: 15000, hasBonus: true },
    { id: 2, name: "Juan Dela Cruz", dept: "Front Desk", salary: 18000, hasBonus: false },
    { id: 3, name: "Liza Soberano", dept: "Kitchen", salary: 22000, hasBonus: true },
    { id: 4, name: "Coco Martin", dept: "Security", salary: 17000, hasBonus: false },
  ]);

  // Task 3: Setup State (Choose your keys carefully!)
  const [filters, setFilters] = useState({
      // Your keys here
      searchEmployee: '',
      hasBonusEmployee: false
  });

  // Task 4: Universal Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Write the logic here
    const {name, value, checked, type} = e.target;
    setFilters((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }))
  };

  // Task 5: The Filter Logic
  const filteredEmployees = 
        employees.filter((employee) => {
            const nameMatch = employee.name.toLowerCase().includes(filters.searchEmployee.toLowerCase());
            const BonusMatch = employee.hasBonus ? filters.hasBonusEmployee : true;
            return (nameMatch && BonusMatch);
        })

  return (
    <div className="p-8 max-w-4xl mx-auto bg-slate-50 min-h-screen">
      <div className="bg-white p-8 rounded-3xl shadow-xl">
        <h1 className="text-2xl font-black text-slate-800 mb-6">💰 Payroll Manager</h1>

        <div className="flex gap-4 mb-8 bg-slate-50 p-4 rounded-xl">
          {/* Task 6: Search Input (Ensure name matches state!) */}
          <input 
            type="text"
            name="searchEmployee"
            placeholder="Search Employee..."
            className="w-full p-2 border-b-2 border-slate-100 outline-none focus:border-indigo-500"
            onChange={handleChange}
            value={filters.searchEmployee}
          />
          {/* Task 7: Checkbox Input (Ensure name matches state!) */}
          <input 
            type="checkbox"
            name="hasBonusEmployee"
            id="hasBonusEmployee"
            className="w-5 h-5 accent-indigo-500"
            onChange={handleChange}
            checked={filters.hasBonusEmployee}
          />
          <label htmlFor="hasBonusEmployee" className="text-sm font-bold text-indigo-600 cursor-pointer"></label>
        </div>

        <div className="space-y-3">
          {/* Task 8: Map the filteredEmployees */}
        {  filteredEmployees.map((employee) => (
            <EmployeeRow key={employee.id} name={employee.name} dept={employee.dept} salary={employee.salary} hasBonus={employee.hasBonus} />
          ))}
        </div>

        {/* Task 9: Empty state logic */}
        {filteredEmployees.length === 0 && (
          <div className="text-center py-10">
            <p className="text-slate-400 italic">No employee matches your criteria "{filters.searchEmployee}"</p>
          </div>
        )}
      </div>
    </div>
  );
}