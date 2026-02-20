import { useState } from 'react'

export default function StatusBoard() {
  // 1. Source of Truth
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finalize PayMongo Verification', status: 'Pending' },
    { id: 2, text: 'Phase 7: Payroll Logic', status: 'In Progress' },
    { id: 3, text: 'Setup Laravel Migrations', status: 'Pending' },
  ])

  // 2. TODO: Create 'cycleStatus' (id: number)
  // Logic:
  // - Map through tasks.
  // - When id matches, determine the next string:
  // - If 'Pending' -> 'In Progress'
  // - If 'In Progress' -> 'Completed'
  // - If 'Completed' -> 'Pending'
  const cycleStatus = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t // 1. If it's not the target, return it immediately.

        // 2. Determine the next status based on the current one
        const nextStatus =
          t.status === 'Pending'
            ? 'In Progress'
            : t.status === 'In Progress'
              ? 'Completed'
              : 'Pending'

        return { ...t, status: nextStatus } // 3. Return the updated object
      })
    )
  }

  // 3. TODO: Calculate 'completionRate' (Percentage)
  // Logic: (Number of 'Completed' tasks / total tasks) * 100
  //const completionRate = tasks.length > 0 ? (tasks.filter((t) => t.status === 'Completed').length / tasks.length) * 100 : 0
  const completionRate =
    tasks.length > 0
      ? (tasks.reduce((acc, t) => acc + (t.status === 'Completed' ? 1 : 0), 0) / tasks.length) * 100
      : 0

  return (
    <div className="p-10 max-w-lg mx-auto bg-slate-50 rounded-[3rem] shadow-xl border-b-8 border-indigo-500">
      <h1 className="text-xl font-black text-slate-800 mb-6 uppercase tracking-tight">
        Project Tracker
      </h1>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => cycleStatus(task.id)}
            className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-700">{task.text}</span>

              {/* 4. TODO: Apply dynamic colors based on task.status */}
              {/* Green for Completed, Yellow for In Progress, Slate for Pending */}
              <span
                className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${task.status === 'Completed' ? 'bg-green-100 text-green-800' : task.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-slate-100 text-slate-800'}`}
              >
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar Area */}
      <div className="mt-8">
        <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 mb-2">
          <span>Project Completion</span>
          <span>{Math.round(completionRate)}%</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden p-0.5">
          <div
            className="bg-indigo-500 h-full rounded-full transition-all duration-700"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
