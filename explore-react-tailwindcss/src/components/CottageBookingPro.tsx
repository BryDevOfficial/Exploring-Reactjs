import React, { useState } from 'react';

type bookingStatus = 'pending' | 'confirmed' | 'cancelled';

interface CottageBookingProps {
  status: bookingStatus;
}

// 1. PROPS: We define a sub-component to show how data is passed down
function PriceDisplay({ total }: { total: number }) {
  return (
    <div className="mt-4 p-4 bg-indigo-50 rounded-xl border-2 border-indigo-200">
      <h3 className="text-indigo-900 font-bold">Total Estimate:</h3>
      <p className="text-3xl font-black text-indigo-600">₱{total.toLocaleString()}</p>
    </div>
  );
}

// 2. FUNCTIONAL COMPONENT: The main component
export default function CottageBookingPro() {
  // 3. USESTATE: Managing an object for the booking data
  const [booking, setBooking] = useState({
    cottageName: 'Standard Sea Eagle',
    pricePerNight: 1500,
    nights: 1,
    guestName: ''
  });

  // 4. EVENT HANDLING (onChange): The dynamic logic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setBooking((prev) => ({
      ...prev,
      // We convert nights to a Number so our math works!
      [name]: name === 'nights' ? Number(value) : value 
    }));
  };

  // 5. EVENT HANDLING (onClick): Simple feedback
  const handleConfirm = () => {
    alert(`Booking Confirmed for ${booking.guestName} at ${booking.cottageName}!`);
    console.table(booking);
  };

  // Logic: Calculate total on every render
  const totalCost = booking.pricePerNight * booking.nights;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-2xl rounded-3xl border border-slate-100">
      {/* 6. JSX BASICS: Mixing HTML and JavaScript */}
      <h1 className="text-xl font-bold text-slate-800 mb-4">🏠 Sea Eagle Booking Pro</h1>
      
      <div className="space-y-4">
        {/* Guest Name Input */}
        <div>
          <label className="block text-sm font-medium text-slate-500">Guest Name</label>
          <input
            type="text"
            name="guestName"
            value={booking.guestName}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-slate-200 focus:border-indigo-500 outline-none"
            placeholder="Enter Guest Name..."
          />
        </div>

        {/* Nights Input */}
        <div>
          <label className="block text-sm font-medium text-slate-500">Number of Nights</label>
          <input
            type="number"
            name="nights"
            min="1"
            value={booking.nights}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-slate-200 focus:border-indigo-500 outline-none"
          />
        </div>

        {/* 7. PROPS: Passing the calculated total to the child component */}
        <PriceDisplay total={totalCost} />

        {/* 8. EVENT HANDLING: onClick button */}
        <button
          onClick={handleConfirm}
          disabled={!booking.guestName}
          className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 disabled:bg-slate-300 transition-colors"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}