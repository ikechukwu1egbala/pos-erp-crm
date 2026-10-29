import { ArrowUpRight, BriefcaseBusiness, Database, TrendingUp } from 'lucide-react';

const pipeline = [
  { name: 'Lead conversion', value: '42%', icon: TrendingUp },
  { name: 'Follow-up tasks', value: '18', icon: BriefcaseBusiness },
  { name: 'High-value accounts', value: '09', icon: Database }
];

const deals = [
  { name: 'Kola Foods', amount: '₦680,000', stage: 'Proposal', owner: 'Joy' },
  { name: 'Apex Stores', amount: '₦1,120,000', stage: 'Negotiation', owner: 'Musa' },
  { name: 'Wazobia Mart', amount: '₦430,000', stage: 'Qualified', owner: 'Rita' }
];

export default function CrmPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card p-5">
        <div>
          <p className="metric-label">CRM</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">Customer pipeline</h2>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {pipeline.map(({ name, value, icon: Icon }) => (
          <div key={name} className="stat-card">
            <div className="flex items-center justify-between">
              <p className="metric-label">{name}</p>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <p className="metric-value text-3xl">{value}</p>
          </div>
        ))}
      </section>

      <section className="glass-card p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="metric-label">Deals</p>
            <h2 className="mt-2 text-xl font-bold text-slate-800">Active opportunities</h2>
          </div>
          <button className="soft-btn">Add deal</button>
        </div>

        <div className="space-y-3">
          {deals.map((deal) => (
            <div key={deal.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <div>
                <p className="font-semibold text-slate-800">{deal.name}</p>
                <p className="text-sm text-slate-500">Owner: {deal.owner}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-800">{deal.amount}</p>
                <span className="badge-neutral">{deal.stage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
