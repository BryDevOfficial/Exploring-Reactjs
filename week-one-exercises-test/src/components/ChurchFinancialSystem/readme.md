### ⛪ Project: Church Tithes & Offerings Tracker

**The Setup:**
You are building a dashboard for the church treasurer. They need to see a list of contributions, filter them by type (Tithe, Offering, Construction), and calculate the "Net Collection" after a "Missionary Fund" deduction.

**Your Data Structure:**

* `id`: number
* `donorName`: string
* `type`: string ('Tithe', 'Offering', 'Building Fund')
* `amount`: number
* `isAnonymous`: boolean

---

### 📝 Your Requirements (The "No-Spoiler" Instructions)

**Task 1: The Interface & Component**

* Create the `Contribution` interface.
* Create a component named `ContributionRow` that returns a **`<tr>`** (to avoid the table error).

**Task 2: The State Setup**

* Setup `filters` state for: `searchName`, `contributionType` (default "All"), and `showAnonymousOnly` (checkbox).

**Task 3: The Universal Handler**

* Standard "safe" `checked` vs `value` logic.
* Use the TypeScript casting for the checkbox.

**Task 4: The Filter Logic (The Gatekeepers)**

* **Search:** Filter by donor name.
* **Type:** Bypass logic for "All".
* **Anonymous:** If the checkbox is checked, show **only** items where `isAnonymous` is `true`.

**Task 5: The Financial Calculations (Reduce)**

* **Gross Total:** Sum of all filtered amounts.
* **Missionary Fund (10%):** Calculate 10% of the Gross Total.
* **Net Collection:** Gross Total minus the Missionary Fund.

**Task 6: The Formatting & UI**

* Use `.toLocaleString()` for all currency values (₱).
* Ensure the `table` structure is valid: `table > thead + tbody > tr > td`.
* Display a summary card at the bottom with the Gross, Deduction, and Net.

---

### 🏗️ The Starter Template

```tsx
import React, { useState } from 'react';

// TODO: Task 1 - Interface & ContributionRow Component (Must return <tr>)

export default function ChurchFinancialSystem() {
  const [contributions] = useState([
    { id: 1, donorName: "Brother Eli", type: "Tithe", amount: 5000, isAnonymous: false },
    { id: 2, donorName: "Sister Luz", type: "Offering", amount: 1200, isAnonymous: false },
    { id: 3, donorName: "Secret Donor", type: "Building Fund", amount: 10000, isAnonymous: true },
    { id: 4, donorName: "Brother Daniel", type: "Tithe", amount: 7500, isAnonymous: false },
    { id: 5, donorName: "Anonymous", type: "Offering", amount: 500, isAnonymous: true },
  ]);

  // TODO: Task 2 - State Setup (searchName, contributionType, showAnonymousOnly)
  
  // TODO: Task 3 - Universal Handler (handleChange)

  // TODO: Task 4 - Filter Logic (The 3 Gatekeepers)

  // TODO: Task 5 - Calculations (Gross, 10% Deduction, Net)

  return (
    <div className="p-10 max-w-6xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black mb-8 text-emerald-900">⛪ Church Financial Tracker</h1>

      {/* --- Filter Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        {/* TODO: UI - Search Input */}
        {/* TODO: UI - Type Select (Tithe, Offering, Building Fund) */}
        {/* TODO: UI - Anonymous Checkbox */}
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-emerald-800 text-white">
            <tr>
              <th className="p-4">Donor</th>
              <th className="p-4">Type</th>
              <th className="p-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Task 6 - Map filtered items into ContributionRow */}
          </tbody>
        </table>

        <div className="p-8 bg-emerald-50 border-t-2 border-emerald-100">
           {/* TODO: UI - Display Gross, 10% Deduction, and Net Collection with ₱ and Commas */}
        </div>
      </div>
    </div>
  );
}

```

### 💡 Focus on this:

In the previous exercise, you got the `<div>` inside `<tbody>` error. This time, ensure your `ContributionRow` component uses:

```tsx
return (
  <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
  </tr>
);

```
