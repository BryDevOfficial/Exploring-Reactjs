import React, { useState } from 'react';

// Task 1: Child Component Props
interface RoomCardProps {
  roomNumber: string;
  floor: string;
  isClean: boolean;
}

const RoomCard = ({ roomNumber, floor, isClean }: RoomCardProps) => {
  return (
    <div className={`p-4 rounded-xl border-2 transition-all ${isClean ? 'border-green-100 bg-green-50' : 'border-red-200 bg-red-50'}`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Room {roomNumber}</h3>
          <p className="text-sm text-slate-500">{floor}</p>
        </div>
        {/* Task 2: Conditional Label */}
        {/* If NOT clean, show a Red "DIRTY" span. If clean, show a Green "READY" span */}
        <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${isClean ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
           {isClean ? 'Ready' : 'Dirty'}
        </span>
      </div>
    </div>
  );
};

export default function RoomStatusDashboard() {
  const [rooms] = useState([
    { id: 1, roomNumber: "101", floor: "1st Floor", isClean: true },
    { id: 2, roomNumber: "102", floor: "1st Floor", isClean: false },
    { id: 3, roomNumber: "201", floor: "2nd Floor", isClean: false },
    { id: 4, roomNumber: "202", floor: "2nd Floor", isClean: true },
    { id: 5, roomNumber: "301", floor: "Penthouse", isClean: false },
  ]);

  // Task 3: Initialize State 
  // Keys: 'search' (string) and 'onlyDirty' (boolean)
  const [filters, setFilters] = useState({
    search: '',
    onlyDirty: false
  });

  // Task 4: Universal Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remember the logic: if type is checkbox, use 'checked'. Else use 'value'.
    const {name, value, checked, type} = e.target;
    setFilters((prev) => ({
      ...prev, 
      [name]: type === 'checkbox' ? checked : value
  }));
  };

  // Task 5: Multi-Layer Filter
  const filteredRooms = rooms.filter(room => {
    // 1. Check if roomNumber or floor includes filters.search
    // 2. Check if filters.onlyDirty is true, if so, only show rooms where isClean === false
    const matchSearchResult = 
              room.roomNumber.toLowerCase().includes(filters.search.toLowerCase()) || room.floor.toLowerCase().includes(filters.search.toLowerCase());
    const isDirty = filters.onlyDirty ? !room.isClean : true;
    return (matchSearchResult && isDirty);
  });

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
        <h1 className="text-2xl font-black text-slate-800 mb-6">🧹 Housekeeping Live</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input 
              type="text"
              name="search"
              placeholder="Search Room or Floor..."
              className="w-full p-3 border-b-2 border-slate-100 focus:border-blue-500 outline-none transition-all"
              // Task 6: Add props here
              onChange={handleChange}
              value={filters.search}
            />
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-200">
            <input 
              type="checkbox" 
              name="onlyDirty"
              id="dirtyFilter"
              className="w-5 h-5 accent-red-500"
              // Task 7: Add props here
              onChange={handleChange}
            />
            <label htmlFor="dirtyFilter" className="text-sm font-bold text-slate-600 cursor-pointer">
              Show Dirty Only
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Task 8: Map the filteredRooms */}
          {filteredRooms.map(room => (
            <RoomCard roomNumber={room.roomNumber} floor={room.floor} isClean={filters.onlyDirty} />
          ))}
          {/* Task 9: Show "All rooms are clean!" if list is empty */}
        </div>
      </div>
    </div>
  );
}