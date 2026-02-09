import { useState } from 'react'

export default function WarehouseManager() {
  // 1. Initial State: An array of objects
  const [items, setItems] = useState([
    { id: 1, name: 'Laptops', count: 10 },
    { id: 2, name: 'Monitors', count: 5 },
    { id: 3, name: 'Keyboards', count: 20 },
  ])

  const MAX = 50
  const MIN = 0

  // 2. TODO: The Logic Funnel
  const handleStock = (id: number, amount: number) => {
    // Hint: Use .map() to find the right item
    // Inside the map, calculate the new total
    // Use your nested ternary to enforce MIN and MAX
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const total = item.count + amount
          return {
            ...item,
            count: total > MAX ? MAX : total < MIN ? MIN : total,
          }
        }
        return item
      })
    )
  }

  // 3. TODO: Calculate total items in warehouse using .reduce()
  const totalStock = items.reduce((acc, curr) => acc + curr.count, 0)

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl border-t-8 border-slate-800">
      <h1 className="text-2xl font-black mb-6 text-center">WAREHOUSE INVENTORY</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100"
          >
            <span className="font-bold text-slate-700 w-24">{item.name}</span>

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleStock(item.id, -1)}
                className="w-10 h-10 bg-white border shadow-sm rounded-full font-bold hover:bg-rose-50 hover:text-rose-600"
              >
                -
              </button>

              <span
                className={`text-xl font-mono font-bold ${item.count === MAX ? 'text-orange-500' : 'text-slate-800'}`}
              >
                {item.count}
              </span>

              <button
                onClick={() => handleStock(item.id, 1)}
                className="w-10 h-10 bg-white border shadow-sm rounded-full font-bold hover:bg-emerald-50 hover:text-emerald-600"
              >
                +
              </button>
            </div>

            {/* Visual Mini-bar */}
            <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-slate-800 h-full transition-all"
                style={{ width: `${(item.count / MAX) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-slate-900 rounded-2xl text-white flex justify-between items-center">
        <span className="text-slate-400 font-bold uppercase text-xs">Total Capacity Usage</span>
        <span className="text-2xl font-black">
          {totalStock} / {MAX * items.length}
        </span>
      </div>
    </div>
  )
}
