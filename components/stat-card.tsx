'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Boxes, BriefcaseBusiness, CreditCard, LayoutDashboard, PackageSearch, Settings, ShoppingCart, Users } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { label: 'POS', href: '/pos', icon: ShoppingCart },
  { label: 'Inventory', href: '/inventory', icon: Boxes },
  { label: 'Customers', href: '/customers', icon: Users },
  { label: 'Orders', href: '/orders', icon: PackageSearch },
  { label: 'CRM', href: '/crm', icon: BriefcaseBusiness },
  { label: 'Reports', href: '/reports', icon: BarChart3 },
  { label: 'Payments', href: '/payments', icon: CreditCard },
  { label: 'Settings', href: '/settings', icon: Settings }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[260px] shrink-0 flex-col rounded-[28px] border border-brand-100 bg-[#fffdfc]/90 p-4 shadow-soft lg:flex">
      <div className="mb-8 flex items-center gap-3 rounded-2xl bg-brand-50 p-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-300 text-xl font-bold text-white">
          EZ
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-brand-600">Business</p>
          <p className="font-bold text-slate-800">EZC POS</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-lg shadow-brand-300/40'
                  : 'text-slate-600 hover:bg-brand-50 hover:text-brand-700'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl bg-gradient-to-br from-brand-600 to-brand-300 p-4 text-white shadow-lg shadow-brand-300/20">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-50">Pro plan</p>
        <p className="mt-3 text-2xl font-bold">₦28,000</p>
        <p className="mt-2 text-sm text-brand-50/90">Monthly SaaS subscription</p>
      </div>
    </aside>
  );
}
