import { ArrowUpRight, PackageCheck, Search, ShoppingBag, Truck } from 'lucide-react';

const orders = [
  { id: '#1024', customer: 'Ada Okafor', total: '₦42,500', status: 'Completed', channel: 'Cash' },
  { id: '#1025', customer: 'David Umeh', total: '₦28,200', status: 'Processing', channel: 'Transfer' },
  { id: '#1026', customer: 'Musa Ibrahim', total: '₦83,600', status: 'Pending', channel: 'Credit' },
  { id: '#1027', customer: 'Chinyere Idoko', total: '₦18,950', status: 'Completed', channel: 'Card' }
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="metric-label">Operations</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-800">Orders and sales</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <Search className="h-4 w-4 text-slate-500" />
              <input className="w-52 border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="Search order" />
            </div>
            <button className="primary-btn">New sale</button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="stat-card">
          <p className="metric-label">Completed</p>
          <p className="metric-value">412</p>
        </div>
        <div className="stat-card">
          <p className="metric-label">Pending</p>
          <p className="metric-value text-amber-600">31</p>
        </div>
        <div className="stat-card">
          <p className="metric-label">Credit sales</p>
          <p className="metric-value text-brand-600">₦3.5M</p>
        </div>
      </section>

      <section className="glass-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div>
            <p className="metric-label">Recent transactions</p>
            <h2 className="mt-2 text-xl font-bold text-slate-800">Open orders</h2>
          </div>
          <button className="soft-btn">Export</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-sm text-slate-600">
              <tr>
                <th className="px-5 py-4 font-semibold">Order</th>
                <th className="px-5 py-4 font-semibold">Customer</th>
                <th className="px-5 py-4 font-semibold">Channel</th>
                <th className="px-5 py-4 font-semibold">Amount</th>
                <th className="px-5 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-slate-200">
                  <td className="px-5 py-4 font-semibold text-slate-800">{order.id}</td>
                  <td className="px-5 py-4 text-slate-700">{order.customer}</td>
                  <td className="px-5 py-4 text-slate-600">{order.channel}</td>
                  <td className="px-5 py-4 font-semibold text-slate-800">{order.total}</td>
                  <td className="px-5 py-4">
                    <span className={order.status === 'Completed' ? 'badge-success' : order.status === 'Pending' ? 'badge-warning' : 'badge-neutral'}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
