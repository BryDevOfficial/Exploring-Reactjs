import React, { useState } from 'react';

export default function ChurchCounter() {
  // 1. Create state: 'envelopeCount' (starts at 0)
  const [envelopCount, setEnvelopCount] = useState(0)
  // 2. Create constant: 'MAX_LIMIT' (500)
  const MAX_LIMIT = 500;
  // 3. TODO: Create THE function 'adjustEnvelopes'
  // Logic: 
  // - It takes a (value: number)
  // - Calculate the new total first
  // - If new total > MAX_LIMIT, set to 500
  // - If new total < 0, set to 0
  // - Else, set to new total
  const adjustEnvelopes = (value: number) => {
        const result = envelopCount + value
        result > MAX_LIMIT ? setEnvelopCount(MAX_LIMIT) : result < 0 ? setEnvelopCount(0) : setEnvelopCount(result)
  }

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-3xl shadow-xl border-t-8 border-indigo-600 text-center">
      <div className="mb-6">
        <h1 className="text-xl font-black text-slate-800">Donation Counter</h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Physical Envelopes</p>
      </div>

      {/* Main Display */}
      <div className="mb-6 py-8 bg-indigo-50 rounded-2xl">
        <h2 className="text-7xl font-mono font-black text-indigo-600">
          {envelopCount}
        </h2>
      </div>

      {/* Control Buttons - All must call the same function! */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <button 
          className="py-4 bg-slate-100 rounded-xl font-bold hover:bg-emerald-100 hover:text-emerald-700 transition-all"
          onClick={() => adjustEnvelopes(1)} // TODO: +1
        >
          +1 Single
        </button>
        <button 
          className="py-4 bg-slate-100 rounded-xl font-bold hover:bg-rose-100 hover:text-rose-700 transition-all"
          onClick={() => adjustEnvelopes(-1)} // TODO: -1
        >
          -1 Error
        </button>
      </div>

      {/* Bulk Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button 
          className="py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm"
          onClick={() => adjustEnvelopes(10)} // TODO: +10
        >
          +10 Bundle
        </button>
        <button 
          className="py-3 bg-slate-800 text-white rounded-xl font-bold text-sm"
          onClick={() => adjustEnvelopes(50)} // TODO: +50
        >
          +50 Box
        </button>
      </div>

      {/* Reset Button */}
      <button 
        className="w-full py-3 text-slate-400 font-bold text-xs uppercase hover:underline"
        onClick={() => setEnvelopCount(0)} // TODO: Set to 0
      >
        Reset Count
      </button>

      {/* Task: Derived Logic */}
      {/* Show: "Progress: [count] / 500" */}
      {/* If count is 500, show: "MAX CAPACITY REACHED" */}
      <div className="mt-6 pt-4 border-t border-slate-100">
         <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            {/* Visual Progress Bar - Challenge: Set width to (count/500)*100 % */}
            <div className="bg-indigo-600 h-full transition-all" style={{ width: '0%' }}></div>
         </div>
      </div>
    </div>
  );
}