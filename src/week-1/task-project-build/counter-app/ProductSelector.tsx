import React, { useState, useEffect } from 'react';

export default function ProductSelector() {
  
  // 1. Create state: 'quantity' (starts at 1)
  const [quantity, setQuantity] = useState(1)
  // 2. Create state: 'maxStock' (constant at 20)
  const [maxStock, setMaxStock] = useState(20)
  // 3. Create handleIncrement (don't go past maxStock)
  const handleIncrement = (value: number) => {
      const res = quantity + value
      setQuantity(res > maxStock ? maxStock : res)
  }
  // 4. Create handleDecrement (don't go below 1)
  const handleDecrement = (value: number) => {
      const res = quantity - value
      setQuantity(res < 1 ? 1 : res)
  }
  // 5. Create handleReset
  const handleReset = () => setQuantity(1)

  //Unsplash Random Image state
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Use the correct prefix for your build tool (VITE_ or REACT_APP_)
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchPhoto = async () => {
      // 1. Check if we already have a cached photo
      const cachedPhoto = localStorage.getItem('unsplash_cache');
      
      if (cachedPhoto) {
        setPhotoUrl(cachedPhoto);
        setLoading(false);
        return; // EXIT: Don't call the API!
      }

      // 2. If no cache, call the API
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`
        );

        if (!response.ok) throw new Error(`Status: ${response.status}`);

        const data = await response.json();
        const imageUrl = data.urls.small_s3;

        // 3. Save to state AND cache for next refresh
        setPhotoUrl(imageUrl);
        localStorage.setItem('unsplash_cache', imageUrl);
        
      } catch (error) {
        console.error("API Limit reached or Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [ACCESS_KEY]);

  // A helper function to "force" a new photo if you actually want one
  const clearCacheAndRefresh = () => {
    localStorage.removeItem('unsplash_cache');
    window.location.reload();
  };

  if (loading) return <div>Loading...</div>;


  return (
    <div className="p-12 max-w-sm mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 text-center">
      <div className="mb-6">
        <img 
          src={photoUrl}
          alt="Paddle" 
          className="w-full h-48 object-cover rounded-3xl mb-4"
        />
        <h1 className="text-xl font-black text-slate-800">Sea Eagle Pro Paddle</h1>
        <p className="text-emerald-500 font-bold">₱ 2,500.00</p>
      </div>

      {/* Main Counter Display */}
      <div className="flex items-center justify-between bg-slate-50 p-2 rounded-2xl mb-6">
        <button 
          className="w-12 h-12 bg-white rounded-xl shadow-sm text-2xl font-black text-slate-300 hover:text-rose-500 transition-all active:scale-95"
          onClick={() => handleDecrement(1)}
        >
          -
        </button>
        
        <div className="text-3xl font-black text-slate-700">
           {quantity}
        </div>

        <button 
          className="w-12 h-12 bg-white rounded-xl shadow-sm text-2xl font-black text-slate-300 hover:text-emerald-500 transition-all active:scale-95"
          onClick={() => handleIncrement(1)}
        >
          +
        </button>
      </div>

      {/* Bulk Step Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          className="py-3 bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-700"
          onClick={() => handleIncrement(5)}
        >
          Add 5
        </button>
        <button 
          className="py-3 bg-slate-100 text-slate-500 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200"
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>

      {/* Dynamic Messaging */}
      {/* 1. If quantity reaches maxStock, show: "Maximum stock reached!" (Orange text) */}
      {/* 2. Show: "Total: ₱ [price * quantity]" */}
      
      <div className="pt-4 border-t border-slate-100">
         <p className="text-slate-400 text-xs font-medium">In Stock: 20 units</p>
      </div>
    </div>
  );
}