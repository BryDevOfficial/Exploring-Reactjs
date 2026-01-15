import React, { useState } from 'react';

// Task 1: Interface 'ProductProps'
// Keys: name, category, price, stock


// Task 2: Child Component 'ProductCard'
// HINT: If stock === 0, add 'opacity-50' to the main div.
const ProductCard = ({ name, price, stock }: ProductProps) => {
  return (
    <div className={`p-4 rounded-xl border-2 ${stock === 0 ? 'bg-slate-100 border-slate-200' : 'bg-white border-indigo-100'}`}>
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{name}</h3>
        <span className="font-black text-indigo-600">₱{price.toLocaleString()}</span>
      </div>
      
      {/* Task 3: Stock Warning */}
      {/* HINT: If stock is 0, show "OUT OF STOCK" in red, else show "Qty: [number]" */}
      <div className="mt-2">
        {
        stock === 0 ? (
        <span className="text-red-500 font-bold">OUT OF STOCK</span>
      ) : (<span className="text-green-700 font-bold">Qty: {stock}</span>)
        }
        
        </div>
    </div>
  );
};

export default function GadgetShop() {
  const [products] = useState([
    { id: 1, name: "Mechanical Keyboard", price: 2500, stock: 15 },
    { id: 2, name: "Gaming Mouse", price: 1200, stock: 0 },
    { id: 3, name: "27-inch Monitor", price: 8500, stock: 4 },
    { id: 4, name: "USB-C Hub", price: 800, stock: 0 },
  ]);

  // Task 4: State Setup
  // Keys: 'query' (string) and 'onlyAvailable' (boolean)
  const [filters, setFilters] = useState({
    query: '',
    onlyAvailable: false
  });

  // Task 5: Handle Change (Muscle Memory Check!)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Write your universal handler here
  };

  // Task 6: Filter Logic
  const filteredProducts = products.filter(p => {
    const matchName = false; // Replace
    // HINT: If onlyAvailable is true, stock must be > 0.
    const matchStock = false; // Replace
    return matchName && matchStock;
  });

  // Task 7: Total Calculation
  // HINT: Use .reduce() on the filteredProducts
  const totalValue = 0; // Replace

  return (
    <div className="p-8 max-w-2xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-black text-slate-900 mb-6">🛒 Gadget Inventory</h1>

      <div className="flex gap-4 mb-8">
        {/* Task 8: Search Input */}
        <input 
          type="text" 
          placeholder="Search products..."
          className="flex-1 p-2 border-b-2 outline-none"
          // name and onChange here
        />

        {/* Task 9: Checkbox Input */}
        <label className="flex items-center gap-2">
          <input type="checkbox" /* name and onChange here */ />
          Available Only
        </label>
      </div>

      <div className="grid gap-3">
        {/* Task 10: Mapping and Total Display */}
      </div>
      
      {/* Display totalValue here */}
    </div>
  );
}