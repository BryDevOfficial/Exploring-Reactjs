import { useState } from 'react'

export default function OrderManager() {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Alice Reyes', totalPrice: 1500, status: 'Pending', hasAddressIssue: false },
    { id: 2, customerName: 'Bob Castro', totalPrice: 800, status: 'Shipped', hasAddressIssue: false },
    { id: 3, customerName: 'Charlie Day', totalPrice: 3200, status: 'Pending', hasAddressIssue: true }, // Flagged!
    { id: 4, customerName: 'Diana Prince', totalPrice: 450, status: 'Pending', hasAddressIssue: false },
    { id: 5, customerName: 'Edward Cruz', totalPrice: 1200, status: 'Pending', hasAddressIssue: false },
  ])

  const [search, setSearch] = useState('')
  const [showPendingOnly, setShowPendingOnly] = useState(false)
  const [isAscending, setIsAscending] = useState(true)

  // 1. TODO: Create 'filteredOrders' (Derived State)
  // Logic: I-filter base sa search (customerName) ug showPendingOnly toggle.
  const filteredOrders = []

  // 2. TODO: Create 'sortedOrders' (Derived State)
  // Logic: I-sort ang filteredOrders base sa 'totalPrice' (use isAscending)
  // Remember: Spread first! [...filteredOrders].sort(...)
  const sortedOrders = []

  // 3. TODO: Function 'processOrders'
  // Logic: I-change ang status sa 'Shipped' kung:
  // - Part sa sortedOrders
  // - Status kay 'Pending'
  // - Walay address issue (hasAddressIssue === false)
  const processOrders = () => {
    // setOrders logic here...
  }

  return (
    <div className="p-8 max-w-2xl mx-auto bg-slate-50 rounded-[2.5rem] shadow-2xl border-b-8 border-blue-600">
      <div className="mb-6 space-y-4">
        <h1 className="text-2xl font-black text-slate-800 tracking-tighter uppercase italic">Order Processing</h1>
        
        <div className="flex gap-2">
          <input 
            type="text"
            placeholder="Search customer..."
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-3 rounded-xl bg-white border border-slate-200 font-bold text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={() => setIsAscending(!isAscending)}
            className="px-4 bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase"
          >
            Price {isAscending ? '↑' : '↓'}
          </button>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox" 
            checked={showPendingOnly}
            onChange={() => setShowPendingOnly(!showPendingOnly)}
            className="w-4 h-4 accent-blue-600"
          />
          <span className="text-xs font-black text-slate-500 uppercase">Show Pending Only</span>
        </label>
      </div>

      <div className="space-y-3 mb-8">
        {sortedOrders.map(order => (
          <div key={order.id} className="p-4 bg-white rounded-2xl flex justify-between items-center shadow-sm border border-slate-100">
            <div>
              <p className="font-bold text-slate-800">{order.customerName}</p>
              <div className="flex gap-2 items-center">
                <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${order.status === 'Shipped' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                  {order.status}
                </span>
                {order.hasAddressIssue && <span className="text-[9px] bg-red-500 text-white px-2 py-0.5 rounded font-black uppercase italic">⚠ Address Flag</span>}
              </div>
            </div>
            <p className="font-mono font-black text-blue-600">₱{order.totalPrice.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <button 
        onClick={processOrders}
        className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg hover:bg-blue-700 active:scale-95 transition-all uppercase tracking-widest"
      >
        Ship All Eligible Orders
      </button>
    </div>
  )
}