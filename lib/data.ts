import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

export function StatCard({
  label,
  value,
  change,
  trend,
  icon: Icon
}: {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: typeof ArrowUpRight;
}) {
  return (
    <div className="stat-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="metric-label">{label}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="metric-value text-2xl md:text-3xl">{value}</p>
        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
          {trend === 'up' ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
          {change}
        </span>
      </div>
    </div>
  );
}
