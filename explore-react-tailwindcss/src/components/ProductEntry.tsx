import { useState } from 'react'

function ProductEntry() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val < 0) {
      setError("Price cannot be negative!");
    } else if (val > 10000) {
      setError("Limit is ₱10,000");
    } else {
      setPrice(val);
      setError('');
    }
  }

  const handleReset = () => {
  setName('');
  setPrice(0);
  setCategory('');
  setError('');
};

  return (
    // 'bg-gray-100' for the background, 'min-h-screen' to fill the page
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      
      {/* CARD CONTAINER */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
          Inventory Entry
        </h2>

        <div className="space-y-4">
          {/* PRODUCT NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input 
              type='text' 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              placeholder="e.g. Sea Eagle Kayak"
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (₱)</label>
            <input 
              type='number' 
              value={price} 
              onChange={handlePriceChange}
              className={`w-full p-2 border rounded-lg focus:outline-none transition-all ${
                error ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"
              }`}
            />
            {error && <p className="text-red-500 text-xs mt-1 font-semibold">{error}</p>}
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value='' disabled>Select a category</option>
              <option value='Equipment'>Equipment</option>
              <option value='Service'>Service</option>
              <option value='Food'>Food</option>
            </select>
          </div>
        </div>

        {/* PREVIEW SECTION - Use a different background to make it pop */}
        <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-2">Live Preview</h3>
          <div className="text-gray-700 space-y-1 text-sm">
            <p><span className="font-semibold text-gray-500">Item:</span> {name || '---'}</p>
            <p><span className="font-semibold text-gray-500">Cost:</span> ₱{price}</p>
            <p><span className="font-semibold text-gray-500">Type:</span> {category || '---'}</p>
          </div>

          {/* SUCCESS MESSAGE */}
          {name && price > 0 && category && (
            <div className="mt-4 bg-green-500 text-white text-xs font-bold py-2 px-3 rounded-lg text-center animate-pulse">
              ✓ Ready for Inventory
            </div>
          )}
          
          {/** Ipakita ra nig human nag input */}
          {name && category &&  price > 0 && !error && (
            <button 
  onClick={handleReset}
  className="mt-6 w-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white border border-red-200 font-bold py-2 px-4 rounded-xl transition-all duration-300 ease-in-out shadow-sm"
>
  Clear Form
</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductEntry