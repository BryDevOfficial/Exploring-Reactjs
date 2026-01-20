import React, { useState } from 'react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function CottageForm() {
  // 1. OBJECT STATE: One state to rule them all
  const [formData, setFormData] = useState({
    name: '',
    type: 'Standard',
    price: '',
    capacity: ''
  });

  // 2. ONCHANGE: Dynamic handler for all inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Update only the specific field while keeping the others
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. ONCLICK: Handle the submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving to MySQL via Laravel...", formData);
    alert(`Cottage ${formData.name} added!`);
  };

  // 4. OBJECT.KEYS: Reset the form dynamically
  const handleReset = () => {
    const clearedForm = { ...formData };
    Object.keys(clearedForm).forEach((key) => {
      // Set everything back to empty (except type)
      if (key !== 'type') (clearedForm as any)[key] = '';
    });
    setFormData(clearedForm);
  };

  return (
    <div className="max-w-md bg-white p-8 rounded-[32px] border border-slate-100 shadow-2xl">
      <header className="mb-6">
        <h2 className="text-2xl font-black text-slate-800 uppercase italic">Add Cottage</h2>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Resort Infrastructure</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="text-[10px] font-black uppercase text-slate-500 ml-2">Cottage Name</label>
          <input
            type="text"
            name="name" // Matches the key in our object state
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 px-5 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold text-slate-700"
            placeholder="e.g. Eagle VIP"
            required
          />
        </div>

        {/* Price & Capacity Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] font-black uppercase text-slate-500 ml-2">Price (₱)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full mt-1 px-5 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase text-slate-500 ml-2">Capacity</label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full mt-1 px-5 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold"
              placeholder="4"
            />
          </div>
        </div>

        {/* Type Select */}
        <div>
          <label className="text-[10px] font-black uppercase text-slate-500 ml-2">Cottage Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full mt-1 px-5 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 font-bold text-slate-700 appearance-none"
          >
            <option value="Standard">Standard</option>
            <option value="VIP">VIP</option>
            <option value="Family">Family</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
          >
            <PlusIcon className="size-4" /> Save Cottage
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            className="px-6 bg-slate-100 text-slate-400 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all"
          >
            <TrashIcon className="size-5" />
          </button>
        </div>
      </form>
    </div>
  );
}