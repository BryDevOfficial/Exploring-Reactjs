import { useState } from 'react'

export default function MultiSelectManager() {
  // 1. The Source of Truth: Product List
  const [products] = useState([
    { id: 101, name: 'Wireless Mouse', price: 25 },
    { id: 102, name: 'Mechanical Keyboard', price: 85 },
    { id: 103, name: 'Gaming Monitor', price: 200 },
    { id: 104, name: 'USB-C Cable', price: 15 },
  ])

  // 2. The Selection State: Array of IDs (e.g., [101, 103])
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  // 3. TODO: Create 'toggleSelection' (id: number)
  // Logic:
  // - If the ID is already in selectedIds, REMOVE it (use .filter).
  // - If the ID is NOT in selectedIds, ADD it (use spread [...prev, id]).
  const toggleSelection = (id: number) => {
    // Write your toggle logic here...
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((selectedIds) => selectedIds !== id) : [...prev, id]
    )
  }

  // 4. TODO: Calculate 'totalPrice' (Derived State)
  // Logic: Filter products to find those whose ID is in selectedIds, then .reduce() to get the sum.
  const totalPrice = products
    .filter((product) => selectedIds.includes(product.id))
    .reduce((sum, product) => sum + product.price, 0)

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100">
      <h1 className="text-2xl font-black text-slate-800 mb-6 tracking-tight">BULK SELECTOR</h1>

      <div className="space-y-3">
        {products.map((product) => {
          // 5. TODO: Create a boolean 'isSelected'
          // Logic: Check if selectedIds includes this product.id
          const isSelected = selectedIds.includes(product.id)

          return (
            <div
              key={product.id}
              onClick={() => toggleSelection(product.id)}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-50 shadow-md'
                  : 'border-slate-100 hover:border-slate-200 bg-slate-50'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className={`font-bold ${isSelected ? 'text-emerald-700' : 'text-slate-700'}`}>
                    {product.name}
                  </p>
                  <p className="text-xs text-slate-400 font-mono">ID: {product.id}</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-slate-900">${product.price}</p>
                  {isSelected && (
                    <span className="text-[10px] font-bold text-emerald-600 uppercase">
                      Selected
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Summary Footer */}
      <div className="mt-8 p-6 bg-slate-900 rounded-3xl text-white flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            Items Selected
          </p>
          <p className="text-2xl font-black">{selectedIds.length}</p>
        </div>
        <div className="text-right">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            Total Value
          </p>
          <p className="text-3xl font-black text-emerald-400">${totalPrice}</p>
        </div>
      </div>

      <button
        className="w-full mt-4 py-3 text-slate-400 text-xs font-bold hover:text-rose-500 transition-colors"
        onClick={() => setSelectedIds([])}
      >
        CLEAR ALL SELECTIONS
      </button>
    </div>
  )
}
