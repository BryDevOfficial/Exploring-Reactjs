import React, { useState } from 'react';

export default function ProductSelector() {
  // 1. Create state: 'quantity' (starts at 1)
  const [quantity, setQuantity] = useState(1)
  // 2. Create state: 'maxStock' (constant at 20)
  const [maxStock, setMaxStock] = useState(20)
  // 3. Create handleIncrement (don't go past maxStock)
  const handleIncrement = (value: number) => {
      quantity + value
  }
  // 4. Create handleDecrement (don't go below 1)
  // 5. Create handleReset

  return (
    <div className="p-12 max-w-sm mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 text-center">
      <div className="mb-6">
        <img 
          src="https://images.unsplash.com/photo-1599583002252-62427ba56e9c?auto=format&fit=crop&w=300&q=80" 
          alt="Paddle" 
          className="w-full h-48 object-cover rounded-3xl mb-4"
        />
        <h1 className="text-xl font-black text-slate-800">Sea Eagle Pro Paddle</h1>
        <p className="text-emerald-500 font-bold">₱ 2,500.00</p>
      </div>

      {/* Main Counter Display */}
      <div className="flex items-center justify-between bg-slate-50 p-2 rounded-2xl mb-6">
        <button 
          className="w-12 h-12 bg-white rounded-xl shadow-sm text-2xl font-black text-slate-300 hover:text-rose-500 transition-all active:scale-95"
          onClick={() => {}}
        >
          -
        </button>
        
        <div className="text-3xl font-black text-slate-700">
           0 {/* Display Quantity Here */}
        </div>

        <button 
          className="w-12 h-12 bg-white rounded-xl shadow-sm text-2xl font-black text-slate-300 hover:text-emerald-500 transition-all active:scale-95"
          onClick={() => {}}
        >
          +
        </button>
      </div>

      {/* Bulk Step Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          className="py-3 bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-700"
          onClick={() => {}}
        >
          Add 5
        </button>
        <button 
          className="py-3 bg-slate-100 text-slate-500 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200"
          onClick={() => {}}
        >
          Reset
        </button>
      </div>

      {/* Dynamic Messaging */}
      {/* 1. If quantity reaches maxStock, show: "Maximum stock reached!" (Orange text) */}
      {/* 2. Show: "Total: ₱ [price * quantity]" */}
      
      <div className="pt-4 border-t border-slate-100">
         <p className="text-slate-400 text-xs font-medium">In Stock: 20 units</p>
      </div>
    </div>
  );
}