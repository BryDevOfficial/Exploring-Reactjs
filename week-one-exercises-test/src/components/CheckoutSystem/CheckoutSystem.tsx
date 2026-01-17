import React, { useState } from 'react';

// TODO: Task 1 - Interface
interface Product{
  productName: string, category: string, unitPrice: number, quantity: number
}

function CheckoutSystemCard({productName, category, unitPrice, quantity}: Product) {
  return (
    <div className="p-4 border-b border-slate-200">
      <h2 className="font-bold">{productName}</h2>
      <p className="text-slate-600">{category}</p>
      <p className="text-slate-700">₱{unitPrice.toLocaleString()} x {quantity}</p>
    </div>
  );
}

export default function CheckoutSystem() {
  const [inventory] = useState([
    { id: 1, productName: "Industrial Drill", category: "Tools", unitPrice: 4500, quantity: 3 },
    { id: 2, productName: "Safety Helmet", category: "Safety", unitPrice: 800, quantity: 15 },
    { id: 3, productName: "Electric Saw", category: "Tools", unitPrice: 12000, quantity: 1 },
    { id: 4, productName: "Soldering Iron", category: "Electronics", unitPrice: 1500, quantity: 10 },
  ]);

  // TODO: Task 2 - State Setup (search, category, highValueOnly)
  const [filters, setFilters] = useState({
    search: '',
    category: 'All',
    highValueOnly: false
  })
  
  // TODO: Task 3 - Universal Handler
  const handleChange = ((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    
    const {type, name, value} = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFilters(
      (prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value })
            )
  })

  // TODO: Task 4 - Filter Logic
  // HINT: For highValueOnly, calculate (unitPrice * quantity) inside the filter
  const filteringProduct = 
  inventory.filter((item) => {
    const searchProduct = 
    item.productName.toLocaleLowerCase()
    .includes(filters.search.toLocaleLowerCase()) 
    && item.category.toLocaleLowerCase() === filters.category 
    && filters.highValueOnly ? (item.unitPrice * item.quantity) >= 10000 : true;
    
    return searchProduct;
  }
)

  // TODO: Task 5 - Computations (Reduce for Sub-total, then Tax, then Grand Total)
  const lineTotal = filteringProduct.map((num) => { 
    const numTotal = num.unitPrice * num.quantity
    return numTotal  
  })
  const subTotal = filteringProduct.reduce((acc, curr) => acc + (curr.unitPrice * curr.quantity)  ,0)
  const tax =  subTotal * 0.12
  const grandTotal = subTotal + tax


  return (
    <div className="p-10 max-w-5xl mx-auto bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-black mb-8 text-slate-800">📦 Warehouse Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 bg-white p-6 rounded-xl shadow-md">
        {/* TODO: UI - Search Input */}
        <input type='text' className='border border-slate-300 rounded-lg p-2 w-full' name='search' onChange={handleChange} placeholder='Search Products...' />
        {/* TODO: UI - Category Select (Electronics, Tools, Safety) */}
        <select className='border border-slate-300 rounded-lg p-2 w-full' name='category' onChange={handleChange}>
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Tools">Tools</option>
          <option value="Safety">Safety</option>
        </select>
        {/* TODO: UI - High Value Toggle (₱10k+) */}
        <label className='flex items-center space-x-2'>
          <input type='checkbox' name='highValueOnly' onChange={handleChange} />
          <span className='text-slate-700'>Only High Value (₱10,000+)</span>
        </label>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Unit Price</th>
              <th className="p-4">Qty</th>
              <th className="p-4 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: UI - Map filtered items into <tr> rows */}
            {filteringProduct.map((checkout) => 
            (
              <CheckoutSystemCard key={checkout.id} productName={checkout.productName} category={checkout.category} unitPrice={checkout.unitPrice} quantity={checkout.quantity} />
            )
            )}
          </tbody>
        </table>

        <div className="p-6 bg-slate-50 border-t-2 border-slate-200">
           {/* TODO: UI - Display Sub-total, Tax (12%), and Grand Total with Commas */}
        </div>
      </div>
    </div>
  );
}