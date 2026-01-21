import React, { useState } from 'react';

export default function BoatBooking() {
  // --- MASTER TEST AREA ---
  
  // 1. TODO: Create 'seats' state (starts at 1)
  const [seats, setSeats] = useState(1)
  // 2. TODO: Create 'maxCapacity' constant (set to 30)
 const [maxCapacity] = useState(30)
  // 3. TODO: Create a function 'adjustSeats' that takes a (value: number)
  //    Logic: 
  //    - If the result is > maxCapacity, set to 30.
  //    - If the result is < 1, set to 1.
  //    - Otherwise, set to the result.
  const adjustSeatsIncrement = (value: number) => {
        const res = seats + value
        setSeats(res > maxCapacity ? maxCapacity : res)
  }
    const adjustSeatsDecrement = (value: number) => {
        const res = seats - value
        setSeats(res < 1 ? seats : res)
  }
    const resetSeat = () => { setSeats(1) }


  // 4. TODO: Calculate 'remainingSeats' (maxCapacity - seats)

  return (
    <div className="p-10 max-w-md mx-auto bg-slate-900 mt-7 rounded-[2rem] shadow-2xl text-center text-white">
      <div className="mb-8">
        <h1 className="text-2xl font-black tracking-tighter text-cyan-400">SEA EAGLE TOURS</h1>
        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">Passenger Manifest</p>
      </div>

      {/* Main Counter Display */}
      <div className="mb-8 py-10 bg-slate-800/50 rounded-3xl border border-slate-700">
        <p className="text-slate-400 text-xs font-bold mb-2">SEATS SELECTED</p>
        <h2 className="text-8xl font-black text-white">
          {seats}
        </h2>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <button 
          className="flex-1 py-4 bg-slate-800 rounded-2xl text-2xl font-black hover:bg-rose-500 transition-all"
          onClick={() => adjustSeatsDecrement(1)} // TODO: Use adjustSeats(-1)
        >
          -
        </button>
        <button 
          className="flex-1 py-4 bg-slate-800 rounded-2xl text-2xl font-black hover:bg-cyan-500 transition-all"
          onClick={() => adjustSeatsIncrement(1)} // TODO: Use adjustSeats(1)
        >
          +
        </button>
      </div>

      {/* Bulk Controls */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <button 
          className="py-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl font-bold text-xs uppercase"
          onClick={() => adjustSeatsIncrement(5)} // TODO: Add 5
        >
          +5 Family
        </button>
        <button 
          className="py-3 bg-slate-800 text-slate-400 rounded-xl font-bold text-xs uppercase"
          onClick={() => resetSeat()} // TODO: Reset to 1
        >
          Clear
        </button>
      </div>

      {/* TASK 4: Conditional Status Messages */}
      {/* 1. If remainingSeats is 0, show: "BOAT IS FULL" (Red text) */}
      {/* 2. Show: "Spaces Left: X" */}
      <div className="pt-6 border-t border-slate-800">
        <p className={`${seats >= 25 ? 'text-red-600 animate-pulse' : 'text-slate-500' } text-xs font-bold`}>
           Boat Capacity: {`${maxCapacity - seats} out of ${maxCapacity} left`}
        </p>
      </div>
    </div>
  );
}