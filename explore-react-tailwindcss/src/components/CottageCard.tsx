import { HomeIcon, UserIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline';

interface CottageCardProps {
    name: string;
    type: string;
    status: 'available' | 'occupied' | 'cleaning';
    price: number;
}

export default function CottageCard({ name, type, status, price }: CottageCardProps) {

    // Object color nga ma ilisan dependi sa pasikat nga status
    const statusStyles = {
        available: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        occupied: 'bg-rose-50 text-rose-700 border-rose-200',
        cleaning: 'bg-amber-50 text-amber-700 border-amber-200',
    }

    const statusIcons = {
        available: <CheckIcon className="size-4" />,
        occupied: <UserIcon className="size-4" />,
        cleaning: <ClockIcon className="size-4" />,
    }

  return (
   <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
          <HomeIcon className="size-6" />
        </div>
        <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${statusStyles[status]}`}>
          {statusIcons[status]}
          {status}
        </span>
      </div>

      <div>
        <h3 className="text-slate-800 font-black text-lg uppercase tracking-tight">{name}</h3>
        <p className="text-slate-400 text-xs font-bold uppercase mb-4">{type}</p>
        
        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
          <span className="text-slate-900 font-black">₱{price.toLocaleString()}</span>
          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 uppercase tracking-widest">
            Details →
          </button>
        </div>
      </div>
    </div>
  )
}

