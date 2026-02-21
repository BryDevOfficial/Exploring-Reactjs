import { useState } from 'react'

export default function AccessAudit() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', level: 'Basic', status: 'Pending', accountAge: 45 },
    { id: 2, name: 'Jane Smith', level: 'Pro', status: 'Pending', accountAge: 10 }, // Too young!
    { id: 3, name: 'Mike Ross', level: 'Basic', status: 'Approved', accountAge: 60 },
    { id: 4, name: 'Harvey Specter', level: 'Pro', status: 'Pending', accountAge: 90 },
    { id: 5, name: 'Rachel Zane', level: 'Basic', status: 'Pending', accountAge: 5 }, // Too young!
  ])

  const [filterLevel, setFilterLevel] = useState('All')

  // 1. TODO: Create 'visibleUsers' (Derived State)
  // Logic: Filter by 'level' (All, Basic, or Pro)
  const visibleUsers = users.filter((l) => (filterLevel === 'All' ? true : l.level === filterLevel))

  // 2. TODO: Calculate 'blockedCount' (Derived State)
  // Logic: Count users in the ORIGINAL list who are 'Pending' but have accountAge < 30
  const blockedCount = users.filter((c) => c.status === 'Pending' && c.accountAge < 30).length

  // 3. TODO: Function 'approveEligible'
  // Logic: Map through ORIGINAL users.
  // A user is eligible if:
  // - They match the current filterLevel (or filter is 'All')
  // - Their status is 'Pending'
  // - Their accountAge is >= 30
  const approveEligible = () => {
    // setUsers logic here...
  }

  return (
    <div className="p-8 max-w-2xl mx-auto bg-slate-900 text-slate-100 rounded-[2rem] shadow-2xl border-l-4 border-cyan-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-black tracking-widest text-cyan-400">SECURITY AUDIT</h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase">
            {blockedCount} Users on security hold (Age &lt; 30d)
          </p>
        </div>

        <select
          onChange={(e) => setFilterLevel(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs font-bold text-cyan-400 outline-none"
        >
          <option value="All">All Levels</option>
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
        </select>
      </div>

      <div className="space-y-3 mb-8">
        {visibleUsers.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-slate-800 rounded-2xl flex justify-between items-center border border-slate-700/50"
          >
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-[9px] font-black text-slate-500 uppercase">
                Age: {user.accountAge} days
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`text-[10px] font-black px-2 py-1 rounded ${
                  user.status === 'Approved'
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'bg-slate-700 text-slate-400'
                }`}
              >
                {user.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={approveEligible}
        className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl font-black text-sm transition-all shadow-lg shadow-cyan-900/20 active:scale-95"
      >
        APPROVE ELIGIBLE {filterLevel.toUpperCase()} USERS
      </button>
    </div>
  )
}
