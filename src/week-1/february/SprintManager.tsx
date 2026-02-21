import { useState } from 'react'

export default function SprintManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Fix Header CSS', priority: 'High', status: 'Todo', isLocked: false },
    { id: 2, title: 'PayMongo API Debug', priority: 'High', status: 'Todo', isLocked: true }, // 2026-02-16: Parked
    { id: 3, title: 'Update Footer Links', priority: 'Low', status: 'Todo', isLocked: false },
    { id: 4, title: 'Database Migration', priority: 'High', status: 'Todo', isLocked: false },
    { id: 5, title: 'Folder Structure', priority: 'High', status: 'Todo', isLocked: false },
  ])

  // 1. State for the filter ('All', 'High', 'Low')
  const [filterPriority, setFilterPriority] = useState('All')

  // 2. TODO: Create 'visibleTasks' (Derived State)
  // Logic: Filter tasks by the selected priority
  const visibleTasks = tasks.filter((t) => {
    return filterPriority === 'All' ? tasks : t.priority === filterPriority
  })

  // 3. TODO: Calculate 'highPriorityCount' (Derived State)
  // Logic: Count how many tasks total are 'High' priority (ignore the filter)
  const highPriorityCount = tasks.filter((t) => t.priority === 'High')

  // 4. TODO: Function 'completeVisibleTasks'
  // Logic: Map through ORIGINAL tasks.
  // If task is in 'visibleTasks' AND status is 'Todo' AND isLocked is false:
  // Set status to 'Done'.
  const completeVisibleTasks = () => {
    // Your logic here...
    setTasks((prev) =>
      prev.map((t) => {
        const stat = visibleTasks && t.status === 'Todo' && t.isLocked === false
        return stat ? { ...t, status: 'Done' } : t
      })
    )
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-slate-50 rounded-[3rem] shadow-xl border-t-8 border-indigo-600">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">SPRINT BOARD</h1>
          <p className="text-xs font-bold text-red-500 uppercase">
            {highPriorityCount.length} CRITICAL TASKS REMAINING
          </p>
        </div>

        <select
          onChange={(e) => setFilterPriority(e.target.value)}
          className="p-2 rounded-lg bg-white border border-slate-200 text-xs font-bold outline-none"
        >
          <option value="All">All Priorities</option>
          <option value="High">High Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      </div>

      <div className="space-y-3 mb-8">
        {visibleTasks.map((task) => (
          <div
            key={task.id}
            className="p-4 bg-white rounded-2xl flex justify-between items-center border border-slate-100 shadow-sm"
          >
            <span>
              <p
                className={`font-bold ${task.status === 'Done' ? 'line-through text-slate-300' : 'text-slate-700'}`}
              >
                {task.title}
              </p>
              {task.isLocked && (
                <span className="text-[9px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-black uppercase">
                  Parked
                </span>
              )}
            </span>
            <span
              className={`text-[10px] font-black px-3 py-1 rounded-full ${
                task.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
              }`}
            >
              {task.priority}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={completeVisibleTasks}
        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all"
      >
        FINISH ALL {filterPriority.toUpperCase()} TASKS
      </button>
    </div>
  )
}
