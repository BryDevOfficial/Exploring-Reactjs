import React, { useState } from 'react';

export default function KayakCounter() {
  // --- MASTER TEST AREA ---
  
  // 1. TODO: Create 'kayaksOut' state (Number - starts at 0)
  const [kayaksOut, setKayaksOut] = useState(0)
  
  // 2. TODO: Create a single reusable function 'handleUpdate' 
  // It should take a (value: number) as an argument.
  // Logic: It should add the value to state, but never let state go below 0.
  const handleUpdate = (value: number) => {
        const increment = kayaksOut + value
        setKayaksOut(increment)
  }
    const handleDecrement = (value: number) => {
        const decrecrement = kayaksOut - value
        kayaksOut === 0 ? setKayaksOut(0) : setKayaksOut(decrecrement)
  }
  const handleReset = () => {
    kayaksOut > 0 ? setKayaksOut(0) : null
  }

  return (
    <div className="p-10 max-w-md mx-auto mt-4 bg-white shadow-2xl rounded-[3rem] border-4 border-sky-50 text-center">
      <div className="mb-8">
        <h1 className="text-sky-900 font-black text-2xl tracking-tight">KAYAK STATION</h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Live Rental Tracking</p>
      </div>

      {/* TASK 1: Display the Count */}
      <div className="relative inline-block mb-10">
        <span className="absolute -top-4 -right-4 bg-sky-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">LIVE</span>
        <h2 className="text-8xl font-black text-slate-800 tabular-nums">
          {kayaksOut} {/* TODO: Replace with state */}
        </h2>
      </div>

      {/* TASK 2: Quick Adjust Buttons (+1 / -1) */}
      <div className="flex gap-4 mb-8">
        <button 
          className="flex-1 py-4 bg-slate-100 rounded-2xl text-2xl font-black text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all"
          onClick={() => handleDecrement(1)} // TODO: Decrease by 1
        >
          -
        </button>
        <button 
          className="flex-1 py-4 bg-slate-100 rounded-2xl text-2xl font-black text-slate-400 hover:bg-emerald-50 hover:text-emerald-500 transition-all"
          onClick={() => handleUpdate(1)} // TODO: Increase by 1
        >
          +
        </button>
      </div>

      {/* TASK 3: Bulk Action Buttons (+5, +10, Reset) */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          className="py-3 bg-sky-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-sky-200 hover:bg-sky-700"
          onClick={() => handleUpdate(5)} // TODO: Increase by 5
        >
          +5 Group
        </button>
        <button 
          className="py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700"
          onClick={() => handleUpdate(10)} // TODO: Increase by 10
        >
          +10 Fleet
        </button>
      </div>

      <button 
        className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-50"
        onClick={() => handleReset()} // TODO: Reset to 0
      >
        Reset Counter
      </button>

      {/* TASK 4: Conditional Rendering */}
      {/* TODO: Show this div ONLY if kayaksOut is greater than 15 */}
      {kayaksOut > 15 && (
        <div className="mt-8 p-4 bg-orange-50 border border-orange-200 animate-pulse rounded-2xl">
        <p className="text-orange-700 text-xs font-bold uppercase">
          ⚠️ Warning: Low Life-Vest Capacity
        </p>
      </div>
      )}
      
    </div>
  );
}