import { useState } from 'react'

export default function SeaEagleInventory() {
  // 1. Create state: 'vests' (starts at 0)
  // 2. Constants: MIN = 0, MAX = 100, TARGET = 80
  const [vests, setVests] = useState(0)

  const MIN: number = 0
  const MAX: number = 100
  const TARGET: number = 80

  // 3. TODO: Create 'handleInventory' (value: number)
  // Logic: Use a nested ternary to keep state between 0 and 100.

  const handleInventory = (value: number) => {
    const total = vests + value
    setVests(total > MAX ? MAX : total < MIN ? MIN : total)
  }

  // 4. TODO: Calculate 'requirementMet' (Boolean: is vests >= TARGET?)
  const requirementMet = vests >= TARGET

  //Calculate Progress
  const percentage: number = (vests / MAX) * 100

  return (
    <div className="p-10 max-w-md mx-auto bg-slate-50 rounded-[3rem] shadow-2xl border-b-8 border-cyan-500 text-center">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-800 tracking-tighter">SEA EAGLE LOGISTICS</h1>
        <p className="text-cyan-600 text-xs font-bold uppercase">Safety Equipment: Life Vests</p>
      </div>

      {/* Main Counter Display */}
      <div className="mb-6 py-10 bg-white rounded-3xl shadow-inner border border-slate-100">
        <h2 className="text-8xl font-black text-slate-800">
          {/* Display State */}
          {vests}
        </h2>
        <p className="text-slate-400 text-sm font-medium mt-2">Current Count</p>
      </div>

      {/* Control Buttons - Call handleInventory with +/- values */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          className="py-4 bg-white border border-slate-200 rounded-2xl font-bold hover:border-cyan-500 hover:text-cyan-600 transition-all"
          onClick={() => {
            handleInventory(1)
          }} // +1
        >
          +1 Vest
        </button>
        <button
          className="py-4 bg-white border border-slate-200 rounded-2xl font-bold hover:border-rose-400 hover:text-rose-500 transition-all"
          onClick={() => {
            handleInventory(-1)
          }} // -1
        >
          -1 Error
        </button>
      </div>

      {/* Bulk Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button
          className="py-3 bg-slate-800 text-white rounded-xl font-bold text-xs uppercase"
          onClick={() => {
            handleInventory(10)
          }} // +10
        >
          +10 (1 Bag)
        </button>
        <button
          className="py-3 bg-cyan-600 text-white rounded-xl font-bold text-xs uppercase"
          onClick={() => {
            handleInventory(20)
          }} // +20 (1 Crate)
        >
          +20 (1 Crate)
        </button>
      </div>

      {/* Progress Bar Area */}
      <div className="mt-6 pt-6 border-t border-slate-200">
        <div className="flex justify-between items-end mb-2">
          <div className="text-left">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Trip Requirement: 80</p>
            {/* Show "READY FOR DEPARTURE" in green if vests >= 80, else "INCOMPLETE" in red */}
            {requirementMet ? (
              <p className="text-sm font-black text-green-500">READY FOR DEPARTURE</p>
            ) : (
              <p className="text-sm font-black text-rose-500">INCOMPLETE</p>
            )}
          </div>
          <span className="text-xl font-black text-slate-800">{percentage}</span>
        </div>

        <div className="w-full bg-slate-200 h-4 rounded-full overflow-hidden p-1">
          {/* Progress Bar - Calculate width based on 100 MAX */}
          <div
            className="bg-cyan-500 h-full rounded-full transition-all duration-700"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      <button
        className="py-4 px-11 mt-5 bg-red-500 text-white rounded-xl font-bold text-xs uppercase"
        onClick={() => setVests(0)}
      >
        RESET
      </button>
    </div>
  )
}
