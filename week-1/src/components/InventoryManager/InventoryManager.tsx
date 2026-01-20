import React, { useState } from 'react';

export default function InventoryManager() {
  // --- TEST AREA ---
  
  // 1. TODO: Create 'inventory' state using these 4 objects:
const [inventory, setInventory] = useState([
    { id: 101, name: "Industrial Motor", stock: 5, category: "Parts", price: 4500 },
    { id: 102, name: "Hydraulic Fluid", stock: 25, category: "Liquids", price: 800 },
    { id: 103, name: "Steel Bolts", stock: 8, category: "Hardware", price: 15 },
    { id: 104, name: "Rubber Gaskets", stock: 50, category: "Hardware", price: 120 },
    { id: 105, name: "Zoren Garcia", stock: 58, category: "Hardware", price: 160 }
    ])

  // 2. TODO: Create 'showLowStockOnly' state (Boolean - default false)
  const [showLowStockOnly, setShowLowStockOnly] = useState(false)
  // 3. TODO: Create 'searchQuery' state (Object for universal handler)
  const [searchQuery, setSearchQuery] = useState({
    search: ''
  })
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {type, name, value} = e.target
        const checked = (e.target as HTMLInputElement).checked
        setSearchQuery((prev) => ({...prev,
            [name]: type === 'checkbox' ? checked : value
        }))  
  }

  // --- LOGIC AREA ---
  // TODO: Create a filtered list that handles BOTH:
  //    a) The text search (by name)
  //    b) The toggle (If showLowStockOnly is true, only show items with stock < 10)
  const filteredInventory = inventory.filter((item) => {
    const searchName = item.name.toLocaleLowerCase().includes(searchQuery.search.toLocaleLowerCase())
    const searchStocks = showLowStockOnly ? true : (item.stock < 10)
    return searchName && searchStocks
  })

  // TODO: Create handleDelete function
  const handleDelete = (id: number) => {
    const updatedInventory = inventory.filter((item) => (item.id !== id))
    setInventory(updatedInventory)
  }
  // TODO: Calculate "Total Inventory Value" (stock * price for all filtered items)
  const totalInventory = filteredInventory.reduce((acc, curr) => acc + (curr.stock * curr.price), 0)

  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 min-h-screen font-sans text-slate-900">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight">Warehouse v2.1</h1>
          {/*filteredInventory.length*/}
          <p className="text-slate-500 font-medium">Inventory & Stock Control</p>
        </div>

        {/* TASK 1: Toggle Button */}
        <button 
          className={`px-6 py-3 rounded-xl font-bold transition-all shadow-lg ${
            false ? 'bg-orange-500 text-white' : 'bg-white text-slate-700'
          }`} // TODO: Replace 'false' with state
          onClick={() => setShowLowStockOnly(!showLowStockOnly)} // TODO: Toggle showLowStockOnly
        >
           {/* TODO: Change text: "Showing All" : "Showing Low Stock" */}
           {showLowStockOnly ? 'Showing Low Stock' : 'Showing All'}
        </button>
      </div>

      {/* TASK 2: Value Card */}
      <div className="bg-slate-900 p-8 rounded-3xl text-white mb-8 flex justify-between items-center">
          <div>
            <p className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-1">Total Asset Value</p>
            <h2 className="text-5xl font-light">₱{totalInventory.toLocaleString()}</h2> 
          </div>
          {/* TASK 3: Conditional Alert Badge */}
          {/* TODO: ONLY show this div if any filtered item has stock < 10 */}
          {
            filteredInventory.some(item => item.stock < 10) && (
            <div className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full border border-orange-500/50 animate-pulse text-sm font-bold">
                ⚠️ Low Stock Detected
            </div>
            )
          }
          
         
      </div>

      {/* TASK 4: Search Bar */}
      <div className="mb-6">
        <input 
          type="text" 
          name="search"
          placeholder="Search by part name..."
          className="w-full p-5 rounded-2xl border-2 border-transparent bg-white shadow-sm focus:border-slate-900 outline-none transition-all"
          onChange={handleSearch} // TODO: Use Universal Handler
        />
      </div>

      {/* TASK 5: Inventory Table */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100 text-slate-400 text-[11px] uppercase font-black">
            <tr>
              <th className="p-6">Product Info</th>
              <th className="p-6">Category</th>
              <th className="p-6 text-center">In Stock</th>
              <th className="p-6 text-right">Unit Price</th>
              <th className="p-6 text-center">Manage</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Map through filtered inventory */}
            {/* TODO: Add "No Items Found" row for empty results */}
            
            {
            filteredInventory.length > 0 ? (
               filteredInventory.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors border-b border-slate-50">
              <td className="p-6 font-bold text-slate-800">{item.name}</td>
              <td className="p-6 text-slate-500">{item.category}</td>
              <td className="p-6 text-center">
                {/* TODO: If stock < 10, text color should be RED, else SLATE */}
                <span className={`font-mono font-bold px-3 ${item.stock < 10 ? 'bg-red-500/20' : 'bg-slate-100'} py-1 rounded-md`}>
                  {item.stock}
                </span>
              </td>
              <td className="p-6 text-right font-semibold">₱ {item.price}</td>
              <td className="p-6 text-center">
                <button 
                  className="p-2 hover:bg-rose-50 rounded-lg group transition-all"
                  onClick={() => handleDelete(item.id)} // TODO: Delete
                >
                  🗑️
                </button>
              </td>
            </tr>
            ))
            ) : (

            <tr className="hover:bg-slate-50/50 transition-colors border-b border-slate-50">
              <td colSpan={5} className="p-6 font-bold text-slate-800">No Items Found</td>
            </tr>
            )
            }


          </tbody>
        </table>
      </div>
    </div>
  );
}