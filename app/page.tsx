import { Activity, ArrowUpRight, CircleDollarSign, ClipboardList, Package2, ShoppingCart, Users } from 'lucide-react';
import { StatCard } from '@/components/stat-card';
import { salesTrend, topProducts, inventoryAlerts, recentOrders } from '@/lib/data';

export default function HomePage() {
  const kpis = [
    { label: 'Today sales', value: '₦1,248,400', change: '+12.8%', trend: 'up', icon: CircleDollarSign },
    { label: 'Orders', value: '432', change: '+9.6%', trend: 'up', icon: ClipboardList },
    { label: 'Inventory value', value: '₦4.6M', change: '-2.1%', trend: 'down', icon: Package2 },
    { label: 'Active customers', value: '1,284', change: '+17.4%', trend: 'up', icon: Users }
  ];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <StatCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="glass-card p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="metric-label">Sales overview</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-800">Revenue trend</h2>
            </div>
            <button className="soft-btn">This month</button>
          </div>

          <div className="flex h-64 items-end gap-3">
            {salesTrend.map((bar) => (
              <div key={bar.label} className="flex flex-1 flex-col items-center justify-end gap-3">
                <div className="flex w-full items-end justify-center rounded-t-2xl bg-gradient-to-t from-brand-600 to-brand-300/90" style={{ height: `${bar.value}%` }} />
                <span className="text-xs font-medium text-slate-500">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Inventory status</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-800">Alerts</h2>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <Activity className="h-4 w-4" />
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {inventoryAlerts.map((item) => (
              <div key={item.name} className="rounded-2xl border border-amber-100 bg-amber-50/60 p-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.stock} left</p>
                  </div>
                  <span className="badge-warning">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div className="glass-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="metric-label">Best sellers</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-800">Top products</h2>
            </div>
            <button className="soft-btn">View all</button>
          </div>

          <div className="space-y-3">
            {topProducts.map((product) => (
              <div key={product.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Package2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{product.name}</p>
                    <p className="text-sm text-slate-500">{product.units} sold</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-800">₦{product.revenue.toLocaleString()}</p>
                  <p className="text-xs text-emerald-600">+{product.growth}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="metric-label">Live activity</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-800">Recent orders</h2>
            </div>
            <button className="soft-btn">Daily</button>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-3">
                <div>
                  <p className="font-semibold text-slate-800">{order.customer}</p>
                  <p className="text-sm text-slate-500">{order.items} items • {order.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-800">₦{order.total.toLocaleString()}</p>
                  <span className="badge-success">{order.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-card p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="metric-label">Business snapshot</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-800">Operational health</h2>
          </div>
          <button className="primary-btn">
            Open report
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
