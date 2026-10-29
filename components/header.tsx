import { Bell, ShieldCheck, SlidersHorizontal, Store, Users } from 'lucide-react';

const settings = [
  { label: 'Store profile', value: 'EZC Mini Mart', icon: Store },
  { label: 'Employees', value: '18 users', icon: Users },
  { label: 'Permissions', value: 'Role-based access', icon: ShieldCheck },
  { label: 'Alerts', value: 'Low stock + cash reports', icon: Bell },
  { label: 'Preferences', value: 'Receipt + pricing', icon: SlidersHorizontal }
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card p-5">
        <div>
          <p className="metric-label">System setup</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">Business settings</h2>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {settings.map(({ label, value, icon: Icon }) => (
          <div key={label} className="glass-card p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-4 text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-xl font-bold text-slate-800">{value}</p>
          </div>
        ))}
      </section>

      <section className="glass-card p-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="metric-label">Receipt</p>
            <p className="mt-2 text-lg font-bold text-slate-800">EZC branded invoice</p>
            <p className="mt-2 text-sm text-slate-600">Brown and gold styling with business logo and VAT footer.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="metric-label">Pricing</p>
            <p className="mt-2 text-lg font-bold text-slate-800">Retail, wholesale and custom rate cards</p>
            <p className="mt-2 text-sm text-slate-600">Flexible discount rules and customer-specific pricing by segment.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
