### 🦅 Quest: The Sea Eagle Reservation Hub

**The Scenario:**
You are building the dashboard for a boat rental/booking company. You need to manage a list of bookings, filter them by boat type and status, and calculate the potential revenue.

**The Data Structure:**

* `id`: number
* `customerName`: string
* `boatType`: 'Speedboat' | 'Yacht' | 'Catamaran'
* `bookingDate`: string (e.g., '2026-01-20')
* `pricePerDay`: number
* `durationDays`: number
* `status`: 'Confirmed' | 'Pending' | 'Cancelled'

---

### 📜 Quest Objectives (The Requirements)

**Task 1: The Table Component**

* Create a `BookingRow` component that returns a `<tr>`.
* Inside the row, calculate the **Total Cost** for that specific booking (`pricePerDay * durationDays`).

**Task 2: The Multi-Filter State**

* Setup state to filter by:
1. **Search:** Customer Name.
2. **Boat Type:** (All, Speedboat, Yacht, Catamaran).
3. **Status:** (All, Confirmed, Pending, Cancelled).



**Task 3: The Dashboard Logic**

* **Filter Gatekeepers:** Implement search, boat type bypass, and status bypass.
* **The Math (Reduce):**
* Calculate **Gross Revenue** (Sum of total costs for Confirmed bookings only).
* Calculate **Pending Value** (Sum of total costs for Pending bookings only).



**Task 4: The UI "Polishing"**

* Use **Conditional Styling**:
* If status is 'Confirmed', text should be Green.
* If status is 'Pending', text should be Yellow/Orange.
* If status is 'Cancelled', text should be Red.


* Format all money with the **₱** symbol and commas.

---

### 🏗️ The Quest Template

```tsx
import React, { useState } from 'react';

// TODO: Task 1 - Interface & BookingRow (tr)

export default function SeaEagleBooking() {
  const [bookings] = useState([
    { id: 1, customerName: "John Doe", boatType: "Yacht", bookingDate: "2026-02-10", pricePerDay: 15000, durationDays: 2, status: "Confirmed" },
    { id: 2, customerName: "Jane Smith", boatType: "Speedboat", bookingDate: "2026-02-12", pricePerDay: 5000, durationDays: 1, status: "Pending" },
    { id: 3, customerName: "Mike Ross", boatType: "Catamaran", bookingDate: "2026-02-15", pricePerDay: 8000, durationDays: 3, status: "Confirmed" },
    { id: 4, customerName: "Harvey Specter", boatType: "Yacht", bookingDate: "2026-02-20", pricePerDay: 15000, durationDays: 5, status: "Cancelled" },
  ]);

  // TODO: Task 2 - State

  // TODO: Task 3 - HandleChange & Filter Logic

  // TODO: Task 3 - Revenue Calculations (Reduce)

  return (
    <div className="p-10 max-w-7xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-4xl font-black mb-2 text-blue-900">🦅 Sea Eagle Reservations</h1>
      <p className="text-slate-500 mb-8">Week 1 Final Mastery Quest</p>

      {/* --- Filters --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          {/* TODO: Search, Boat Type Select, Status Select */}
      </div>

      {/* --- Stats Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-emerald-600 p-6 rounded-2xl text-white shadow-lg">
              <p className="text-emerald-100 uppercase text-xs font-bold tracking-widest">Confirmed Revenue</p>
              <h2 className="text-3xl font-black">₱ {/* Total Confirmed */}</h2>
          </div>
          <div className="bg-amber-500 p-6 rounded-2xl text-white shadow-lg">
              <p className="text-amber-100 uppercase text-xs font-bold tracking-widest">Pending Value</p>
              <h2 className="text-3xl font-black">₱ {/* Total Pending */}</h2>
          </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-xs font-bold">
            <tr>
              <th className="p-4">Customer / Boat</th>
              <th className="p-4">Date</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Total Cost</th>
            </tr>
          </thead>
          <tbody>
              {/* TODO: Task 4 - Map Bookings */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

```
