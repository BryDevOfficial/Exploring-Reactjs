import { useState } from 'react'

export default function WarehouseAlerts() {
  // 1. Source of Truth
  const [stock] = useState([
    { id: 1, name: 'Standard Bolts', count: 100 },
    { id: 2, name: 'Hydraulic Fluid', count: 3 },
    { id: 3, name: 'Steel Plates', count: 25 },
    { id: 4, name: 'Copper Wiring', count: 2 },
  ])

  // 2. The Filter Toggle
  const [showCriticalOnly, setShowCriticalOnly] = useState(false)

  // 3. TODO: Create 'visibleStock' (Derived State)
  // Logic:
  // - If showCriticalOnly is true: .filter() for count <= 5
  // - If false: return the whole 'stock' array
  const visibleStock = []

  // 4. TODO: Calculate 'criticalCount' (Derived State)
  // Logic: Count how many items in the ORIGINAL 'stock' have a count <= 5
  const criticalCount = 0

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-3xl shadow-xl border-t-8 border-red-500">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">WAREHOUSE STOCK</h1>
          <p className="text-[10px] text-red-500 font-black uppercase tracking-widest">
            {criticalCount} items at critical level
          </p>
        </div>

        <button
          onClick={() => setShowCriticalOnly(!showCriticalOnly)}
          className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
            showCriticalOnly ? 'bg-red-500 text-white shadow-lg' : 'bg-slate-100 text-slate-500'
          }`}
        >
          {showCriticalOnly ? '⚠️ VIEWING CRITICAL' : 'VIEW ALL'}
        </button>
      </div>

      <div className="space-y-2">
        {/* 5. TODO: Map through visibleStock */}
        {visibleStock.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100"
          >
            <span className="font-bold text-slate-700">{item.name}</span>
            <div className="flex items-center gap-3">
              {/* 6. TODO: Conditional Rendering */}
              {/* If item.count <= 5, show this badge */}
              <span className="text-[9px] bg-red-100 text-red-600 px-2 py-1 rounded-md font-black uppercase">
                Low
              </span>

              <span className={`font-mono font-black text-lg`}>{item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
