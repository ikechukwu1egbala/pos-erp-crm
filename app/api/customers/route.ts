'use client';

import { Activity, ArrowDownRight, ArrowUpRight, CircleDollarSign, ClipboardList, Package2, Users } from 'lucide-react';
import { useProducts, useSales } from '@/lib/store';

export default function HomePage() {
  const { products } = useProducts();
  const { sales } = useSales();

  const totalInventoryValue = products.reduce(
    (sum, product) => sum + product.price * product.stock,
    0
  );

  const totalSalesValue = sales.reduce((sum, sale) => sum + sale.total, 0);
  const lowStock = products.filter((product) => product.stock <= product.minStock).length;

  const kpis = [
    { label: 'Today sales', value: `₦${totalSalesValue.toLocaleString()}`, change: '+12.8%', trend: 'up', icon: CircleDollarSign },
    { label: 'Orders', value: String(sales.length + products.length), change: '+9.6%', trend: 'up', icon: ClipboardList },
    { label: 'Inventory value', value: `₦${totalInventoryValue.toLocaleString()}`, change: '-2.1%', trend: 'down', icon: Package2 },
    { label: 'Low stock alerts', value: String(lowStock), change: '+17.4%', trend: 'up', icon: Users }
  ];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="metric-label">{kpi.label}</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <kpi.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-4 flex items-end justify-between gap-3">
              <p className="metric-value text-2xl md:text-3xl">{kpi.value}</p>
              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${kpi.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {kpi.trend === 'up' ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
                {kpi.change}
              </span>
            </div>
          </div>
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
            {[40, 52, 61, 58, 74, 81, 68, 86].map((value, index) => (
              <div key={value + index} className="flex flex-1 flex-col items-center justify-end gap-3">
                <div className="flex w-full items-end justify-center rounded-t-2xl bg-gradient-to-t from-brand-600 to-brand-300/90" style={{ height: `${value}%` }} />
                <span className="text-xs font-medium text-slate-500">{['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'][index]}</span>
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
            {products.filter((product) => product.stock <= product.minStock).slice(0, 3).map((item) => (
              <div key={item.id} className="rounded-2xl border border-amber-100 bg-amber-50/60 p-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.stock} left</p>
                  </div>
                  <span className="badge-warning">Reorder</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
