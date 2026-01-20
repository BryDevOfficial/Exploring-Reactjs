### 📦 Project: Warehouse Bulk Order System

**The Setup:**
You are building a system for a warehouse. Each product has a **Price** and a **Stock Quantity**. You need to calculate the value of each line item and the grand total including a tax.

**Your Data Structure:**

* `id`: number
* `productName`: string
* `category`: string ('Electronics', 'Tools', 'Safety')
* `unitPrice`: number
* `quantity`: number (How many are in the box)

---

### 📝 Your Requirements (The "No-Spoiler" Instructions)

**1. Task: The Interface & State**

* Create the `Product` interface.
* State `filters` should have: `search`, `category`, and a toggle for `highValueOnly` (items over ₱10,000 total).

**2. Task: The Universal Handler**

* Standard "safe" `checked` logic.
* Ensure `search` is string and `category` is string.

**3. Task: The Filtering (The Gatekeepers)**

1. **Search:** Filter by product name.
2. **Category:** Dropdown ("All" bypass).
3. **High Value Toggle:** If active, only show items where `(unitPrice * quantity)` is .

**4. Task: The Computation (The Math)**

* **Line Total:** Inside your `.map()`, calculate `unitPrice * quantity` for each row.
* **Sub-Total:** Use `.reduce()` to get the sum of all `(unitPrice * quantity)` for visible items.
* **Tax (12%):** Calculate 12% of the Sub-Total.
* **Grand Total:** Sub-Total + Tax.

**5. Task: Formatting**

* Use your **Regex** or `.toLocaleString()` to ensure every number has commas (e.g., 1,250.00).

---

### 🏗️ The Starter Template

```tsx
import React, { useState } from 'react';

// TODO: Task 1 - Interface

export default function CheckoutSystem() {
  const [inventory] = useState([
    { id: 1, productName: "Industrial Drill", category: "Tools", unitPrice: 4500, quantity: 3 },
    { id: 2, productName: "Safety Helmet", category: "Safety", unitPrice: 800, quantity: 15 },
    { id: 3, productName: "Electric Saw", category: "Tools", unitPrice: 12000, quantity: 1 },
    { id: 4, productName: "Soldering Iron", category: "Electronics", unitPrice: 1500, quantity: 10 },
  ]);

  // TODO: Task 2 - State Setup (search, category, highValueOnly)
  
  // TODO: Task 3 - Universal Handler

  // TODO: Task 4 - Filter Logic
  // HINT: For highValueOnly, calculate (unitPrice * quantity) inside the filter

  // TODO: Task 5 - Computations (Reduce for Sub-total, then Tax, then Grand Total)

  return (
    <div className="p-10 max-w-5xl mx-auto bg-slate-100 min-h-screen">
      <h1 className="text-3xl font-black mb-8 text-slate-800">📦 Warehouse Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 bg-white p-6 rounded-xl shadow-md">
        {/* TODO: UI - Search Input */}
        
        {/* TODO: UI - Category Select (Electronics, Tools, Safety) */}
        
        {/* TODO: UI - High Value Toggle (₱10k+) */}
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
          </tbody>
        </table>

        <div className="p-6 bg-slate-50 border-t-2 border-slate-200">
           {/* TODO: UI - Display Sub-total, Tax (12%), and Grand Total with Commas */}
        </div>
      </div>
    </div>
  );
}

```

### 💡 Why this is different:

This isn't just "showing" data; it's **Checkout Logic**. In your **Ecommerce System (#8)**, you will need to multiply `price * qty` for every single item. If your `.reduce()` can handle the multiplication and your UI can handle the tax math, you are 100% ready for the professional world.
