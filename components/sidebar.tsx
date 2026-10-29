import { Bell, ChevronDown, Search, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="glass-card flex items-center justify-between gap-3 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-300 text-lg font-bold text-white shadow-lg shadow-brand-300/40">
          E
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">EZC POS</p>
          <h1 className="text-xl font-bold text-slate-800">Operations center</h1>
        </div>
      </div>

      <div className="hidden flex-1 items-center justify-center md:flex">
        <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
          <Search className="h-4 w-4 text-slate-500" />
          <input
            className="w-full border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            placeholder="Search anything..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-amber-500" />
        </button>
        <button className="primary-btn gap-2">
          <Sparkles className="h-4 w-4" />
          Business mode
        </button>
        <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
          Admin
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
