import { useState } from 'react';
import { EyeIcon, EyeSlashIcon, LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

function SeaEagleLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-100">
        
        <div className="text-center mb-8">
          <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <LockClosedIcon className="size-8 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Staff Portal</h2>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Sea Eagle Resort</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <EnvelopeIcon className="size-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              name="email"
              type="email"
              placeholder="Email Address"
              value={credentials.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
            />
          </div>

          <div className="relative">
            <LockClosedIcon className="size-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full pl-10 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
            >
              {showPassword ? <EyeSlashIcon className="size-5" /> : <EyeIcon className="size-5" />}
            </button>
          </div>

          <button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95 mt-4"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeaEagleLogin;