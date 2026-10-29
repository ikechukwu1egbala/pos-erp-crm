import { ArrowUpRight, Mail, Phone, Search, UserCheck } from 'lucide-react';

const customers = [
  { name: 'Ada Okafor', email: 'ada@kolab.ng', phone: '+234 812 345 6789', value: '₦420,000', status: 'Active', segment: 'Retail' },
  { name: 'Musa Ibrahim', email: 'musa@westco.ng', phone: '+234 803 111 9922', value: '₦830,000', status: 'Priority', segment: 'Wholesale' },
  { name: 'Chinyere Idoko', email: 'chinyere@marketplus.ng', phone: '+234 818 765 2201', value: '₦190,000', status: 'New', segment: 'Retail' },
  { name: 'Femi Alalade', email: 'femi@aladesupplies.com', phone: '+234 806 331 2998', value: '₦1,180,000', status: 'Active', segment: 'B2B' }
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="metric-label">CRM</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-800">Customers</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <Search className="h-4 w-4 text-slate-500" />
              <input className="w-52 border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="Search customer" />
            </div>
            <button className="primary-btn">Add customer</button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="stat-card">
          <p className="metric-label">Total customers</p>
          <p className="metric-value">1,248</p>
        </div>
        <div className="stat-card">
          <p className="metric-label">Open invoices</p>
          <p className="metric-value text-brand-600">₦5.8M</p>
        </div>
        <div className="stat-card">
          <p className="metric-label">Repeat buyers</p>
          <p className="metric-value text-emerald-600">76%</p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {customers.map((customer) => (
          <div key={customer.name} className="glass-card p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{customer.name}</p>
                  <p className="text-sm text-slate-500">{customer.segment}</p>
                </div>
              </div>
              <span className={customer.status === 'Priority' ? 'badge-warning' : customer.status === 'New' ? 'badge-neutral' : 'badge-success'}>{customer.status}</span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="h-4 w-4 text-slate-400" />
                {customer.email}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="h-4 w-4 text-slate-400" />
                {customer.phone}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Balance</p>
                <p className="mt-2 text-xl font-bold text-slate-800">{customer.value}</p>
              </div>
              <button className="soft-btn">
                View profile
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
