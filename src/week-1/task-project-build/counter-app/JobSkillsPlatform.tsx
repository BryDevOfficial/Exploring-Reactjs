import { useState } from 'react'

export default function JobSkillsPlatform() {
  // 1. The Source of Truth
  const [developers, setDevelopers] = useState([
    { id: 1, name: 'Bry', skill: 'React', points: 10 },
    { id: 2, name: 'Dev', skill: 'Laravel', points: 8 },
    { id: 3, name: 'Lirt', skill: 'Tailwind', points: 15 },
  ])

  // 2. The Search State
  const [query, setQuery] = useState('')

  // 3. TODO: Create 'filteredDevs' (Derived State)
  // Logic: Use .filter() on developers to find matches for the 'query'
  const filteredDevs = developers.filter((item) =>
    item.skill.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )

  // 4. TODO: The 'handleEndorse' function
  // Logic: Find the dev by ID and add +1 point (No MAX limit this time!)
  const handleEndorse = (id: number) => {
    // Re-use your .map() + spread skills here!
    setDevelopers((prev) =>
      prev.map((dev) => (dev.id === id ? { ...dev, points: dev.points + 1 } : dev))
    )
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-slate-900 text-white rounded-3xl shadow-2xl">
      <h1 className="text-xl font-bold mb-4 tracking-tight">SKILLS ENDORSEMENT</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by skill (e.g. React)..."
        className="w-full p-4 mb-6 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="space-y-3">
        {/* 5. TODO: Map through filteredDevs instead of developers */}
        {filteredDevs.map((dev) => (
          <div
            key={dev.id}
            className="flex items-center justify-between p-4 bg-slate-800 rounded-2xl"
          >
            <div>
              <p className="font-bold text-lg">{dev.name}</p>
              <p className="text-xs text-cyan-400 font-mono uppercase tracking-widest">
                {dev.skill}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-2xl font-black">{dev.points}</span>
              <button
                onClick={() => handleEndorse(dev.id)}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold text-sm transition-colors"
              >
                ENDORSE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
