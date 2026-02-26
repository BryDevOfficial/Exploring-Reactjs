import { useState } from 'react'

export default function StockManager() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Engine Oil', category: 'Fluids', count: 2, isExpired: false },
    { id: 2, name: 'Brake Pads', category: 'Parts', count: 15, isExpired: false },
    { id: 3, name: 'Coolant', category: 'Fluids', count: 0, isExpired: true }, // Expired!
    { id: 4, name: 'Spark Plugs', category: 'Parts', count: 3, isExpired: false },
    { id: 5, name: 'Old Battery', category: 'Electrical', count: 1, isExpired: true }, // Expired!
    { id: 6, name: 'Disk Brake', category: 'Parts', count: 4, isExpired: true }, // Expired!
  ])

  const [search, setSearch] = useState('')
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  // 1. TODO: Create 'filteredItems' (Derived State)
  // Logic:
  // - Kinahanglan mo-match ang name sa 'search' term.
  // - Kung ang 'showInStockOnly' kay true, i-filter tong count > 0 lang.

  const filteredItems = inventory.filter((item) => {
    const matchSearch = item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    const matchStock = showInStockOnly ? item.count > 0 : true
    return matchSearch && matchStock
  })

  // 2. TODO: Function 'restockLowStock'
  // Logic: Map through ORIGINAL inventory.
  // Ang item ma-restock (+10) kung:
  // - Part siya sa 'filteredItems'
  // - Ang iyang count kay < 5
  // - DILI siya Expired (isExpired === false)
  const restockLowStock = () => {
    // setInventory logic here...
    setInventory((prevItem) =>
      prevItem.map((f) => {
        const isVisible =
          f.name.toLowerCase().includes(search.toLowerCase()) && (!showInStockOnly || f.count > 0)
        const restock = isVisible && f.count < 5 && !f.isExpired
        return restock ? { ...f, count: f.count + 10 } : f
      })
    )
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-[2rem] shadow-2xl border-t-8 border-orange-500">
      <div className="mb-6 space-y-4">
        <h1 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">
          Warehouse Inventory
        </h1>

        <div className="space-y-2">
          <input
            type="text"
            placeholder="Search items..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-100 border-none font-bold text-sm outline-none focus:ring-2 focus:ring-orange-500"
          />

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showInStockOnly}
              onChange={() => setShowInStockOnly(!showInStockOnly)}
              className="w-4 h-4 accent-orange-500"
            />
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
              Show In-Stock Only
            </span>
          </label>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100"
          >
            <div>
              <p className="font-bold text-slate-700">{item.name}</p>
              {item.isExpired && (
                <span className="text-[9px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-black uppercase">
                  Expired - Do Not Restock
                </span>
              )}
            </div>
            <span
              className={`font-mono font-black text-lg ${item.count < 5 ? 'text-red-500' : 'text-slate-800'}`}
            >
              {item.count}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={restockLowStock}
        className="w-full py-4 bg-orange-500 text-white rounded-2xl font-black shadow-lg shadow-orange-200 hover:bg-orange-600 active:scale-95 transition-all"
      >
        RESTOCK LOW ITEMS (+10)
      </button>
    </div>
  )
}
