import { ArrowUpRight, BarChart3, CreditCard, FolderKanban, TrendingDown } from 'lucide-react';

export default function ReportsPage() {
  const cards = [
    { label: 'Gross revenue', value: '₦8.4M', detail: '+14.2% vs last month', icon: BarChart3 },
    { label: 'Net profit', value: '₦2.1M', detail: '+8.7% vs last month', icon: FolderKanban },
    { label: 'Cash collected', value: '₦3.2M', detail: '92% settled', icon: CreditCard },
    { label: 'Refunds', value: '₦390K', detail: '-3.1% vs last month', icon: TrendingDown }
  ];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="stat-card">
            <div className="flex items-center justify-between">
              <p className="metric-label">{card.label}</p>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <card.icon className="h-4 w-4" />
              </div>
            </div>
            <p className="metric-value text-3xl">{card.value}</p>
            <p className="mt-2 text-sm text-slate-500">{card.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="glass-card p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="metric-label">Operations</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-800">Performance by branch</h2>
            </div>
            <button className="soft-btn">Export CSV</button>
          </div>

          <div className="space-y-4">
            {[
              { branch: 'Lekki Outlet', value: 88, revenue: '₦3.1M' },
              { branch: 'Ikeja Hub', value: 73, revenue: '₦2.7M' },
              { branch: 'Surulere Mini Mart', value: 66, revenue: '₦1.8M' },
              { branch: 'Abuja Store', value: 82, revenue: '₦2.4M' }
            ].map((branch) => (
              <div key={branch.branch}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                  <span>{branch.branch}</span>
                  <span className="font-semibold text-slate-800">{branch.revenue}</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-200">
                  <div className="h-2.5 rounded-full bg-gradient-to-r from-brand-600 to-brand-300" style={{ width: `${branch.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Summary</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-800">Snapshot</h2>
            </div>
            <button className="soft-btn">This quarter</button>
          </div>

          <div className="mt-5 space-y-4">
            {[
              ['On-time collections', '94%'],
              ['Inventory accuracy', '98.2%'],
              ['Customer retention', '76%'],
              ['Cash variance', '₦48,000']
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <span className="text-sm text-slate-600">{label}</span>
                <span className="font-bold text-slate-800">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-card p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="metric-label">Strategy</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-800">Actionable insights</h2>
          </div>
          <button className="primary-btn">
            Review insights
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
