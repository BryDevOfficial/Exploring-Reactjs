import React, { useState } from 'react';

export default function EquipmentCounter() {
  // 1. STATE: Primitive number (not an object or array)
  const [count, setCount] = useState(0);

  // 2. LOGIC: Helper functions to update state
  const increment = (step: number) => {
    // We take the current count and add the 'step' value
    setCount(prev => prev + step);
  };

  const decrement = (step: number) => {
    // Prevents the counter from going below zero (Validation)
    if (count - step < 0) {
        setCount(0);
    } else {
        setCount(prev => prev - step);
    }
  };

  const reset = () => setCount(0);

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 text-center">
      <h2 className="text-slate-400 uppercase text-xs font-bold tracking-widest mb-2">Life Vest Inventory</h2>
      
      {/* DISPLAY: The current state value */}
      <div className="text-7xl font-black text-slate-800 mb-8">
        {count}
      </div>

      {/* TASK 1: Basic Increment/Decrement */}
      <div className="flex gap-4 justify-center mb-6">
        <button 
          onClick={() => decrement(1)}
          className="w-14 h-14 rounded-full bg-slate-100 text-2xl font-bold hover:bg-rose-100 hover:text-rose-600 transition-colors"
        >
          -
        </button>
        <button 
          onClick={reset}
          className="px-6 rounded-full bg-slate-800 text-white font-bold text-sm uppercase tracking-tight hover:bg-slate-700"
        >
          Reset
        </button>
        <button 
          onClick={() => increment(1)}
          className="w-14 h-14 rounded-full bg-slate-100 text-2xl font-bold hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
        >
          +
        </button>
      </div>

      {/* TASK 2: Step Buttons (+5, +10, -5) */}
      <div className="grid grid-cols-3 gap-2">
        <button 
          onClick={() => decrement(5)}
          className="py-2 bg-slate-50 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-200"
        >
          -5 Bulk
        </button>
        <button 
          onClick={() => increment(5)}
          className="py-2 bg-indigo-50 rounded-lg text-xs font-bold text-indigo-600 hover:bg-indigo-100"
        >
          +5 Bulk
        </button>
        <button 
          onClick={() => increment(10)}
          className="py-2 bg-emerald-50 rounded-lg text-xs font-bold text-emerald-600 hover:bg-emerald-100"
        >
          +10 Crate
        </button>
      </div>

      {/* CONDITIONAL RENDERING: Alert if stock is low */}
      {count === 0 && (
        <p className="mt-6 text-rose-500 text-xs font-bold animate-pulse">
          ⚠️ OUT OF STOCK
        </p>
      )}
    </div>
  );
}