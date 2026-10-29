import { ArrowUpRight, Banknote, CreditCard, WalletCards } from 'lucide-react';

const paymentMetrics = [
  { label: 'Cash sales', value: '₦1.6M', detail: 'This week' },
  { label: 'Transfers', value: '₦2.9M', detail: 'Processed' },
  { label: 'Pending payouts', value: '₦460K', detail: '2 accounts' }
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card p-5">
        <div>
          <p className="metric-label">Finance</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">Payments & settlements</h2>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {paymentMetrics.map(({ label, value, detail }, index) => {
          const icons = [Banknote, CreditCard, WalletCards];
          const Icon = icons[index];

          return (
            <div key={label} className="stat-card">
              <div className="flex items-center justify-between">
                <p className="metric-label">{label}</p>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <p className="metric-value text-3xl">{value}</p>
              <p className="mt-2 text-sm text-slate-500">{detail}</p>
            </div>
          );
        })}
      </section>

      <section className="glass-card p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="metric-label">Settlement queue</p>
            <h2 className="mt-2 text-xl font-bold text-slate-800">Latest payment activity</h2>
          </div>
          <button className="soft-btn">
            View all
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3">
          {[
            ['Ada Okafor', '₦42,500', 'Cash'],
            ['Apex Stores', '₦180,000', 'Transfer'],
            ['Musa Ibrahim', '₦28,000', 'Card'],
            ['Kola Foods', '₦64,400', 'Split']
          ].map(([name, amount, method]) => (
            <div key={name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <div>
                <p className="font-semibold text-slate-800">{name}</p>
                <p className="text-sm text-slate-500">{method}</p>
              </div>
              <span className="font-bold text-slate-800">{amount}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
