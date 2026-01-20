import React, { useState } from 'react';
import PayrollSystem from './PayRollSystem';

// TODO: Task 1 - Interface
interface Employee {
    name: string, department: string, salary: number, isContractor: boolean
}

function PayrollSystemCard({name, department, salary, isContractor}: Employee){
    return (
        <div className={`p-4 rounded-2xl border-2 transition-all ${isContractor ? 'border-yellow-200 bg-yellow-50' : 'border-slate-100 bg-white'}`}>
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="font-bold text-lg">{name}</h2>
                    <p className="text-slate-600">{department}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${isContractor ? 'bg-yellow-100 text-yellow-800' : 'bg-slate-100 text-slate-800'}`}>
                    {isContractor ? 'Contractor' : 'Employee'}
                </span>
            </div>
            <p className="mt-4 font-semibold">${salary.toLocaleString()}</p>
        </div>
    );
}

export default function PayrollSystemDev() {
  const [employees] = useState([
    { id: 1, name: "Alice", department: "IT", salary: 75000, isContractor: false },
    { id: 2, name: "Bob", department: "HR", salary: 50000, isContractor: true },
    { id: 3, name: "Charlie", department: "IT", salary: 90000, isContractor: false },
    { id: 4, name: "Diana", department: "Sales", salary: 60000, isContractor: true },
  ]);

  // TODO: Task 2 - State Setup
  const [filter, setFilter] = useState({
    search: '',
    byDepartment: 'All',
    contractorOnly: false
  })
  
  // TODO: Task 3 - Universal Handle Change
  const handleSearchEmployee = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {type, name, value} = e.target;
    const checked = (e.target as HTMLInputElement).checked
    setFilter((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }
        
    ))
  }

  // TODO: Task 4 - Filter Logic (The Gatekeepers)
  const filteredEmployees = employees.filter((employee) => {
    const filterName = employee.name.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase())
    const filterDepartment = filter.byDepartment === 'All' ? true : (filter.byDepartment === employee.department)
    const filterContractor = filter.contractorOnly ? employee.isContractor : true;
    return (filterName && filterDepartment && filterContractor)
  })

  // TODO: Task 5 - Total Calculation (Reduce)
  const totalPayroll = filteredEmployees.reduce((acc, curr) => acc + (curr.salary), 0)

  return (
    <div className="p-10 max-w-4xl mx-auto bg-slate-50 min-h-screen font-sans">
      <h1 className="text-3xl font-black mb-8 text-indigo-900">🏦 Payroll Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        {/* TODO: UI - Search Input */}
        <input type='text'  className='border p-3 rounded-xl outline-blue-500' name='search' placeholder='Search Employee' onChange={handleSearchEmployee} />
        {/* TODO: UI - Department Select */}
        <select className='border p-3 rounded-xl bg-white' name='byDepartment' onChange={handleSearchEmployee}>
            <option value='All'>All</option>
            <option value='IT'>IT</option>
            <option value='HR'>HR</option>
            <option value='Sales'>Sales</option>
          </select>
        {/* TODO: UI - Contractor Checkbox */}
        <label className="flex items-center gap-2 font-bold text-slate-700 cursor-pointer">
          <input name="contractorOnly" type="checkbox" onChange={handleSearchEmployee} className="w-5 h-5" /> 
          Contractor Only
        </label>
      </div>

      {/* TODO: UI - Display Count & Total Payroll */}
       <div className="text-center py-10">
            <p className="text-slate-400 italic">Found {filteredEmployees.length} Employees</p>
            <p className='text-green-600 font-bold'>
              Total Salary: { totalPayroll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</p>
          </div>

      <div className="grid gap-4">
        {/* TODO: UI - Map Employees into Cards */}
        {
         filteredEmployees.map((payday) => 
          <PayrollSystemCard key={payday.id} name={payday.name} salary={payday.salary} department={payday.department} isContractor={payday.isContractor} />
        )
        
        }

      </div>
    </div>
  );
}