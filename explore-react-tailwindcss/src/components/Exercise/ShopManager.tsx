import React, { useState } from 'react';

// Task 1: Create the Interface 'ProductProps'
// (Look at the object in the state below to see what keys you need)
interface ProductProps {
  id: number;
  name: string;
  category: string;
  price: number;
  onSale: boolean;
}

// Task 2: Create the Child Component 'ProductCard'
// Note: Do NOT add variables yet, just use the props I pass.
const ProductCard = ({name, category, price, onSale }: ProductProps) => {
  return (
    <div className={`p-4 rounded-2xl border-2 transition-all ${onSale ? 'border-orange-200 bg-orange-50' : 'border-slate-100 bg-white'}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-slate-800">{name}</h3>
          <p className="text-xs text-slate-500">{category}</p>
        </div>
        {/* Task 3: Show "PROMO" badge ONLY if onSale is true */}
        {onSale && (
          <span className="bg-orange-500 text-white text-[10px] px-2 py-1 rounded-md font-black">PROMO</span>
        )}
      </div>
      <div className="mt-4">
        <span className={`text-xl font-black ${onSale ? 'text-red-600' : 'text-slate-900'}`}>
          ₱{price.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default function ShopManager() {
  const [products] = useState([
    { id: 1, name: "Sea Eagle T-Shirt", category: "Apparel", price: 450, onSale: true },
    { id: 2, name: "Shell Necklace", category: "Accessories", price: 150, onSale: false },
    { id: 3, name: "Island Mug", category: "Home", price: 300, onSale: true },
    { id: 4, name: "Keyring", category: "Accessories", price: 50, onSale: false },
    { id: 5, name: "Beach Towel", category: "Apparel", price: 800, onSale: false },
  ]);

  // Task 4: Initialize State for filters (search and promoOnly)
  const [filters, setFilters] = useState({
    // Add keys here
  });

  // Task 5: Write the Universal Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remember the logic for checkboxes vs text!
  };

  // Task 6: Write the Filter Logic
  // Filter by name AND if promoOnly is true, show only items where onSale is true.
  const filteredProducts = []; // Replace this with your .filter() logic

  return (
    <div className="p-8 max-w-4xl mx-auto bg-slate-50 min-h-screen">
      <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200">
        <h1 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">🛍️ Shop Manager</h1>

        <div className="flex flex-col md:flex-row gap-6 mb-10 items-center bg-slate-50 p-4 rounded-2xl">
          <div className="flex-1 w-full">
            <input 
              type="text"
              name="search"
              placeholder="Search products..."
              className="w-full bg-transparent border-b-2 border-slate-200 focus:border-orange-500 outline-none p-2 transition-all"
              // Add props here
            />
          </div>

          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              name="promoOnly"
              id="promo"
              className="w-6 h-6 accent-orange-500 cursor-pointer"
              // Add props here
            />
            <label htmlFor="promo" className="font-bold text-slate-700 cursor-pointer select-none">
              On Sale Only
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Task 7: Map the filteredProducts here */}
        </div>

        {/* Task 8: Empty State UI */}
        {/* If filteredProducts is empty, show this div */}
        <div className="text-center py-20 bg-slate-50 rounded-3xl border-4 border-dashed border-slate-100 mt-6">
           <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">No items found</p>
        </div>
      </div>
    </div>
  );
}