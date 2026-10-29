import { ArrowRight, Lock, ShieldCheck, User } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(212,164,81,0.18),_transparent_22%),linear-gradient(135deg,#f8f3ec,#f2eee8)] p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-brand-100 bg-white/80 shadow-soft backdrop-blur md:grid-cols-2">
        <div className="relative bg-gradient-to-br from-brand-700 via-brand-500 to-brand-300 p-8 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),transparent_30%)]" />
          <div className="relative z-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-2xl font-black">EZ</div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-50/80">EZC POS</p>
            <h1 className="mt-4 text-4xl font-black leading-tight">Grow your sales with clarity.</h1>
            <p className="mt-5 max-w-sm text-brand-50/90">Inventory, POS, CRM, and ERP workflows for retail businesses in one connected operations center.</p>

            <div className="mt-10 space-y-4">
              {[
                'Multi-branch dashboard',
                'Inventory alerting',
                'Trusted role management'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3">
                  <ShieldCheck className="h-5 w-5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Welcome back</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-800">Sign in</h2>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email or username</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
                <User className="h-4 w-4 text-slate-500" />
                <input className="w-full border-0 bg-transparent text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="admin@ezcpos.ng" />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
                <Lock className="h-4 w-4 text-slate-500" />
                <input type="password" className="w-full border-0 bg-transparent text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="Enter password" />
              </div>
            </label>

            <button className="primary-btn mt-2 w-full py-3 text-base">
              Sign in
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-slate-500">
            Need a business account? <span className="font-semibold text-brand-600">Create an account</span>
          </div>
        </div>
      </div>
    </div>
  );
}
