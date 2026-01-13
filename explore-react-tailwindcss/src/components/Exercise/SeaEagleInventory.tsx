import React, { useState } from 'react';

// Task 1: Create 'InventoryItem' Child Component
// Props: name (string), category (string), qty (number), limit (number)
// Design Hint: If qty < limit, make the quantity text RED.

interface InventoryItemProps {
name: string, category: string, qty: number, limit: number;
}

const InventoryItem = ({name, category, qty, limit}: InventoryItemProps) => {
    const isLowStock = qty < limit;
    return (
      <div className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm mb-3">
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-gray-800">{name}</span>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 w-fit">
          {category}
        </span>
      </div>

      <div className="text-right">
        <div className="text-sm text-gray-500 mb-1">Stock Level</div>
        <div className={`text-2xl font-bold ${isLowStock ? 'text-red-600' : 'text-gray-900'}`}>
          {qty}
          {isLowStock && <span className="ml-2 text-xs uppercase tracking-wider">Low</span>}
        </div>
        <div className="text-xs text-gray-400">Limit: {limit}</div>
      </div>
    </div>
    )
}

export default function SeaEagleInventory() {
  const [items] = useState([
    { id: 1, name: "Bed Sheets", category: "Linens", quantity: 45, minRequired: 20 },
    { id: 2, name: "Toilet Paper", category: "Toiletries", quantity: 8, minRequired: 50 },
    { id: 3, name: "Bath Soap", category: "Toiletries", quantity: 100, minRequired: 30 },
    { id: 4, name: "Bleach", category: "Cleaning", quantity: 2, minRequired: 5 },
    { id: 5, name: "Pillowcases", category: "Linens", quantity: 15, minRequired: 25 },
  ]);
  

  // Task 2: Initialize State Object
  // Keys: 'searchTerm' (string) and 'showCriticalOnly' (boolean)
  const [filters, setFilters] = useState({
    searchTerm: '',
    showCriticalOnly: false
  });

  // Task 3: Handle Change
  // Hint: Checkboxes use e.target.checked instead of e.target.value!
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    // ... logic here
    setFilters((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked: value
    }));

  };

  // Task 4: Multi-Layer Filter Logic
  // 1. Filter by searchTerm (matching the name)
  // 2. IF showCriticalOnly is true, only return items where quantity < minRequired
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesCritical = filters.showCriticalOnly ? (item.quantity < item.minRequired) : true;
    return matchesSearch && matchesCritical;
  });

  return (
    <div className="p-8 max-w-3xl mx-auto bg-slate-50 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-200">
        <h1 className="text-2xl font-black text-slate-800 mb-6">📦 Inventory Manager</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8 items-end">
          <div className="flex-1">
            <label className="text-[10px] font-bold uppercase text-slate-400 mb-2 block">Item Name</label>
            <input 
              type="text"
              name="searchTerm"
              onChange={handleChange}
              value={filters.searchTerm}
              className="w-full p-3 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Search linens, soaps..."
            />
          </div>

          <div className="flex items-center gap-2 pb-3">
            {/* Task 5: Setup the Checkbox */}
            <input 
              type="checkbox" 
              name="showCriticalOnly"
              id="critical"
              // Add onChange and checked props here
              onChange={handleChange}
              
              className="w-5 h-5 accent-red-500"
            />
            <label htmlFor="critical" className="text-sm font-bold text-red-600 cursor-pointer">
              Show Low Stock Only
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {/* Task 6: Map through filteredItems and render InventoryItem */}
          {
          filteredItems.map((item) => (
            <InventoryItem 
            key={item.id}
            name={item.name} 
            category={item.category} 
            qty={item.quantity} 
            limit={item.minRequired}  
            />)
        )
        }
          {/* Task 7: Show "All items in stock!" message if filteredItems is empty */}
           {filteredItems.length === 0 && (
            <div className="text-center py-10">
            <p className="text-slate-400 italic">No item match your criteria "{filters.searchTerm}"</p>
          </div>
           )}
          
        </div>
      </div>
    </div>
  );
}