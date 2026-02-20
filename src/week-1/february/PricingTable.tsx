import { useState } from 'react'

export default function PricingTable() {
  // 1. Source of Truth
  const [products] = useState([
    { id: 1, name: 'Premium Coffee', basePrice: 20 },
    { id: 2, name: 'Leather Journal', basePrice: 45 },
    { id: 3, name: 'Wireless Buds', basePrice: 120 },
  ])

  // 2. The Global Setting
  const [isMemberMode, setIsMemberMode] = useState(false)

  // 3. TODO: Create 'displayedProducts' (Derived State)
  // Logic:
  // - Use .map() on 'products'
  // - Create a new property called 'finalPrice'
  // - If isMemberMode is true: finalPrice = basePrice * 0.85 (15% off)
  // - If isMemberMode is false: finalPrice = basePrice
  const displayedProducts = products.map((product) => ({
    ...product,
    finalPrice: isMemberMode ? product.basePrice * 0.85 : product.basePrice,
  }))

  // 4. TODO: Calculate 'potentialSavings'
  // Logic: The difference between the total base price and total final price.
  const potentialSavings = isMemberMode
    ? products.reduce((acc, p) => acc + p.basePrice * 0.15, 0)
    : 0

  return (
    <div className="p-10 max-w-xl mx-auto bg-slate-900 text-white rounded-[3rem] shadow-2xl border-t-4 border-yellow-500">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-black italic tracking-tighter">STOREFRONT</h1>

        {/* Toggle Switch */}
        <button
          onClick={() => setIsMemberMode(!isMemberMode)}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all ${
            isMemberMode ? 'bg-yellow-500 text-slate-900 scale-105' : 'bg-slate-700 text-slate-400'
          }`}
        >
          {isMemberMode ? '👑 MEMBER PRICES' : 'GUEST PRICES'}
        </button>
      </div>

      <div className="space-y-4">
        {/* 5. TODO: Map through displayedProducts */}
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="p-6 bg-slate-800 rounded-3xl border border-slate-700 flex justify-between items-center transition-all hover:border-yellow-500/50"
          >
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                {product.name}
              </p>
              <div className="flex items-center gap-2">
                {/* 6. TODO: If member mode is on, show the old price with a strikethrough */}
                <h2 className="text-3xl font-black font-mono">
                  {isMemberMode ? (
                    <>
                      <span className="line-through text-slate-500">
                        ${product.basePrice.toFixed(2)}
                      </span>
                      <span className="ml-2">${product.finalPrice.toFixed(2)}</span>
                    </>
                  ) : (
                    `$${product.basePrice.toFixed(2)}`
                  )}
                </h2>
              </div>
            </div>
            {isMemberMode && (
              <span className="bg-yellow-500/10 text-yellow-500 text-[10px] font-bold px-3 py-1 rounded-lg">
                SAVE 15%
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Summary Area */}
      {isMemberMode && (
        <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-center">
          <p className="text-yellow-500 text-xs font-bold uppercase">Total Member Savings</p>
          <p className="text-2xl font-black text-white">${potentialSavings.toFixed(2)}</p>
        </div>
      )}
    </div>
  )
}
