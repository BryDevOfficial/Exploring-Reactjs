import React, { useState } from 'react';

// Define the specific types for our status
type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

// 1. PROPS: Now accepts 'total' and 'status'
function PriceDisplay({ total, status }: { total: number; status: BookingStatus }) {
  // Helper to change colors based on status
  const getStatusStyle = () => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    }
  };

  return (
    <div className="mt-4 p-4 bg-indigo-50 rounded-xl border-2 border-indigo-200">
      {/* STATUS INSERTED HERE */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status</span>
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border ${getStatusStyle()}`}>
          {status}
        </span>
      </div>

      <h3 className="text-indigo-900 font-bold">Total Estimate:</h3>
      <p className="text-3xl font-black text-indigo-600">₱{total.toLocaleString()}</p>
    </div>
  );
}

export default function CottageBookingConfirmed() {
  // 2. STATE: Added 'status' initialized to 'pending'
  const [booking, setBooking] = useState({
    cottageName: 'Standard Sea Eagle',
    pricePerNight: 1500,
    nights: 1,
    guestName: '',
    status: 'pending' as BookingStatus // Cast to our type
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBooking((prev) => ({
      ...prev,
      [name]: name === 'nights' ? Number(value) : value 
    }));
  };

  // 3. LOGIC: Update status to 'confirmed' on click
  const handleConfirm = () => {
    setBooking(prev => ({ ...prev, status: 'confirmed' }));
    alert(`Booking Confirmed for ${booking.guestName}!`);
  };

  const totalCost = booking.pricePerNight * booking.nights;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-2xl rounded-3xl border border-slate-100">
      <h1 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">🏠 Sea Eagle Booking Pro</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Guest Name</label>
          <input
            type="text"
            name="guestName"
            value={booking.guestName}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-slate-100 focus:border-indigo-500 outline-none font-semibold text-slate-700"
            placeholder="Enter Guest Name..."
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Number of Nights</label>
          <input
            type="number"
            name="nights"
            min="1"
            value={booking.nights}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-slate-100 focus:border-indigo-500 outline-none font-semibold text-slate-700"
          />
        </div>

        {/* 4. PASSING STATUS PROP: Passing the updated status to child */}
        <PriceDisplay total={totalCost} status={booking.status} />

        <button
          onClick={handleConfirm}
          disabled={!booking.guestName || booking.status === 'confirmed'}
          className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-lg shadow-indigo-100"
        >
          {booking.status === 'confirmed' ? 'Successfully Booked' : 'Confirm Booking'}
        </button>
      </div>
    </div>
  );
}