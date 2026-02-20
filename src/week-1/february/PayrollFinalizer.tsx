import { useState } from 'react'

export default function PayrollFinalizer() {
  const [staff, setStaff] = useState([
    { id: 1, name: 'Alice', status: 'Unpaid', amount: 5000, isBlocked: false },
    { id: 2, name: 'Bob', status: 'Unpaid', amount: 4000, isBlocked: true }, // Verification Pending
    { id: 3, name: 'Charlie', status: 'Paid', amount: 5500, isBlocked: false },
    { id: 4, name: 'Diana', status: 'Unpaid', amount: 3500, isBlocked: false },
  ])

  // 1. TODO: Derived State 'unpaidStaff'
  // Filter 'staff' to show only those with status === 'Unpaid'
  const unpaidStaff = staff.filter((s) => s.status === 'Unpaid')

  // 2. TODO: Derived State 'totalDebt'
  // Use .reduce() to sum the 'amount' of ONLY the 'unpaidStaff'
  const totalDebt = unpaidStaff.reduce((acc, curr) => acc + curr.amount, 0)

  // 3. TODO: Function 'payAllEligible'
  // Logic:
  // - Use setStaff with a map.
  // - If staff member status is 'Unpaid' AND isBlocked is false, set status to 'Paid'.
  // - Otherwise, return the original object.
  const payAllEligible = () => {
    setStaff((prev) =>
      prev.map((person) => {
        // Your logic here...
        return person
      })
    )
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-slate-900 text-white rounded-[3rem] shadow-2xl border-b-8 border-emerald-600">
      <h1 className="text-2xl font-black mb-6 italic tracking-tighter">PHASE 7: SETTLEMENT</h1>

      <div className="bg-slate-800 p-6 rounded-3xl mb-6 border border-slate-700">
        <p className="text-slate-400 text-xs font-bold uppercase mb-1">Total Outstanding</p>
        <p className="text-4xl font-black text-emerald-400">${totalDebt.toLocaleString()}</p>
      </div>

      <div className="space-y-3 mb-8">
        {unpaidStaff.length > 0 ? (
          unpaidStaff.map((person) => (
            <div
              key={person.id}
              className="flex justify-between items-center p-4 bg-slate-800/50 rounded-2xl border border-slate-700"
            >
              <span>
                <p className="font-bold">{person.name}</p>
                {person.isBlocked && (
                  <p className="text-[9px] text-amber-500 font-black uppercase tracking-tighter">
                    ⚠️ Verification Parked
                  </p>
                )}
              </span>
              <span className="font-mono font-bold text-slate-300">
                ${person.amount.toLocaleString()}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center py-10 text-slate-500 font-bold uppercase text-xs">
            All accounts settled
          </p>
        )}
      </div>

      <button
        onClick={payAllEligible}
        disabled={unpaidStaff.filter((s) => !s.isBlocked).length === 0}
        className="w-full py-4 bg-emerald-500 text-slate-900 rounded-2xl font-black hover:bg-emerald-400 transition-all active:scale-95 disabled:opacity-30 disabled:grayscale"
      >
        EXECUTE PAYOUTS
      </button>
    </div>
  )
}
