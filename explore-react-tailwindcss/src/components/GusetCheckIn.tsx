import React, { useState } from 'react';

export default function GuestCheckIn() {
  // 1. THE STATE (The "Mailboxes" start empty)
  const [formData, setFormData] = useState({
    guest_fullName: '', 
    guest_email: '',   
    guest_roomNumber: ''
  });

  // 2. THE DYNAMIC ENGINE (One function for all)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value // [name] looks at the HARDCODED name in the input
    }));
  };

  return (
    <div className="p-8 bg-white border-2 border-indigo-100 rounded-3xl max-w-md shadow-xl">
      <h2 className="text-2xl font-black text-indigo-600 mb-6 italic uppercase">Guest Check-In</h2>
      
      <div className="space-y-6">
        {/* INPUT 1: FULL NAME */}
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Full Name</label>
          <input
            type="text"
            name="guest_fullName"       // IDENTITY (Hardcoded Address)
            value={formData.guest_fullName} // DATA (Looking at the mailbox)
            onChange={handleChange}     // THE DELIVERY MAN
            className="w-full border-b-2 border-slate-100 py-2 focus:border-indigo-500 outline-none font-bold text-slate-700"
            placeholder="John Doe"
          />
        </div>

        {/* INPUT 2: EMAIL */}
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Email Address</label>
          <input
            type="email"
            name="guest_email"           // IDENTITY (Hardcoded Address)
            value={formData.guest_email}    // DATA (Looking at the mailbox)
            onChange={handleChange}
            className="w-full border-b-2 border-slate-100 py-2 focus:border-indigo-500 outline-none font-bold text-slate-700"
            placeholder="john@example.com"
          />
        </div>

        {/* LIVE PREVIEW (Proof that state is updating) */}
        <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <p className="text-[10px] uppercase font-black text-slate-400 mb-2">Live Registry Preview</p>
          <p className="font-bold text-slate-800">Name: <span className="text-indigo-600">{formData.guest_fullName || '---'}</span></p>
          <p className="font-bold text-slate-800">Email: <span className="text-indigo-600">{formData.guest_email || '---'}</span></p>
        </div>
      </div>
    </div>
  );
}