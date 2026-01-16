### 🛠️ Project: Skill Marketplace (The "Final Boss" of Logic)

**The Setup:**
You are building a platform where people can find local workers. This time, we aren't just filtering by name; we are filtering by **Years of Experience**.

**Your Data Structure (The Items):**

* `id`: number
* `name`: string
* `skill`: string (e.g., 'Plumber', 'Electrician', 'Carpenter')
* `yearsOfExperience`: number
* `isAvailableNow`: boolean

---

### 📝 Your Requirements (The "No-Spoiler" Instructions)

**1. Task: The Interface**
Define a `Worker` interface.

**2. Task: The State**
Set up your `filters` object with:

* `search`: string
* `skillCategory`: string (default "All")
* `minExperience`: number (default 0)
* `onlyAvailable`: boolean (default false)

**3. Task: The Universal Handler**

* Handle the `value` vs `checked` logic.
* **Special Note:** When the user changes the "Experience" input, ensure the value is stored as a **Number**, not a string. (Hint: `Number(value)`).

**4. Task: The Quadruple Filter**

1. **Search:** By name.
2. **Skill:** Dropdown bypass (the "All" logic).
3. **Experience:** Show only workers where `worker.yearsOfExperience >= filters.minExperience`.
4. **Availability:** Show only available workers if the toggle is on.

**5. Task: The Aggregation (Reduce)**
Calculate the **Average Experience** of the workers currently shown on the screen.

* *Formula:* (Sum of all years) / (Number of visible workers).

**6. Task: The UI (JSX)**

* Search bar.
* Select dropdown (Plumber, Electrician, Carpenter).
* A **Number Input** for "Minimum Years of Experience".
* A checkbox for "Available Now".
* Display **"Found [X] Professionals"**.
* Display **"Avg. Experience: [X] Years"**.

---

### 🏗️ The Starter Template

```tsx
import React, { useState } from 'react';

// TODO: Task 1 - Interface

export default function SkillFinder() {
  const [workers] = useState([
    { id: 1, name: "Mang Tomas", skill: "Plumber", yearsOfExperience: 12, isAvailableNow: true },
    { id: 2, name: "Aling Nena", skill: "Electrician", yearsOfExperience: 5, isAvailableNow: false },
    { id: 3, name: "Boy Carpintero", skill: "Carpenter", yearsOfExperience: 20, isAvailableNow: true },
    { id: 4, name: "Rico Flush", skill: "Plumber", yearsOfExperience: 2, isAvailableNow: true },
  ]);

  // TODO: Task 2 - State Setup
  
  // TODO: Task 3 - Universal Handle Change (With Number conversion for minExperience)

  // TODO: Task 4 - Filter Logic (The 4 Gatekeepers)

  // TODO: Task 5 - Average Calculation (Reduce)

  return (
    <div className="p-10 max-w-5xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black mb-8 text-slate-900">🛠️ Local Skill Finder</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        {/* TODO: UI - Search */}
        
        {/* TODO: UI - Skill Select */}
        
        {/* TODO: UI - Min Experience Number Input */}
        
        {/* TODO: UI - Available Checkbox */}
      </div>

      {/* TODO: UI - Display Stats (Count and Average) */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* TODO: UI - Map Workers into Cards */}
      </div>
    </div>
  );
}

```

### 💡 Why this is the "Final Boss"?

Because you have to manage a **Number Input**. In React, `e.target.value` is *always* a string, even if the input type is "number". You'll need to decide how to convert it to a number so your `>=` comparison works correctly.
