import React, { useState } from 'react';

export default function AdminControls({ bookingCount }: { bookingCount: number }) {
  // 1. Toggle State (Is the panel open or closed?)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
      {/* TRIGGER: Button to toggle the state */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-bold text-blue-600 hover:underline"
      >
        {isOpen ? "Close Admin Panel" : "Open Admin Panel"}
      </button>

      {/* CONDITIONAL RENDERING: Short Circuit (&&) */}
      {isOpen && (
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <h3 className="text-xs font-bold uppercase text-slate-400">System Info</h3>
          
          {/* CONDITIONAL RENDERING: Ternary (? :) */}
          {bookingCount > 0 ? (
            <p className="text-sm text-emerald-600 font-medium">
              System Active: Tracking {bookingCount} reservations.
            </p>
          ) : (
            <p className="text-sm text-rose-500 font-medium">
              Alert: No data found in the system.
            </p>
          )}
        </div>
      )}
    </div>
  );
}