'use client';

import { ArrowUpRight, Mail, Phone, Search, UserCheck } from 'lucide-react';
import { useState } from 'react';
import { type Customer } from '@/lib/mock-data';
import { useCustomers } from '@/lib/store';

export default function CustomersPage() {
  const { customers, addCustomer } = useCustomers();
  const [form, setForm] = useState({ name: '', email: '', phone: '', segment: 'Retail', status: 'New' as Customer['status'] });

  const handleAddCustomer = () => {
    if (!form.name || !form.email) return;

    const newCustomer: Customer = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      phone: form.phone || '+234 000 000 0000',
      segment: form.segment,
      status: form.status,
      value: 0
    };

    addCustomer(newCustomer);
    setForm({ name: '', email: '', phone: '', segment: 'Retail', status: 'New' });
  };

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

      <section className="glass-card p-5">
        <div className="mb-4">
          <p className="metric-label">New lead</p>
          <h2 className="mt-2 text-xl font-bold text-slate-800">Create customer record</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <input value={form.name} onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm" placeholder="Customer name" />
          <input value={form.email} onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm" placeholder="Email" />
          <input value={form.phone} onChange={(e) => setForm((current) => ({ ...current, phone: e.target.value }))} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm" placeholder="Phone" />
          <select value={form.segment} onChange={(e) => setForm((current) => ({ ...current, segment: e.target.value }))} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
            <option value="Retail">Retail</option>
            <option value="Wholesale">Wholesale</option>
            <option value="B2B">B2B</option>
          </select>
          <select value={form.status} onChange={(e) => setForm((current) => ({ ...current, status: e.target.value as Customer['status'] }))} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
            <option value="New">New</option>
            <option value="Active">Active</option>
            <option value="Priority">Priority</option>
          </select>
          <button className="primary-btn" onClick={handleAddCustomer}>Save customer</button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="stat-card">
          <p className="metric-label">Total customers</p>
          <p className="metric-value">{customers.length}</p>
        </div>
        <div className="stat-card">
          <p className="metric-label">Open invoices</p>
          <p className="metric-value text-brand-600">₦{customers.reduce((sum, customer) => sum + customer.value, 0).toLocaleString()}</p>
        </div>
        <div className="stat-card">
          <p className="metric-label">Repeat buyers</p>
          <p className="metric-value text-emerald-600">76%</p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {customers.map((customer) => (
          <div key={customer.id} className="glass-card p-5">
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
                <p className="mt-2 text-xl font-bold text-slate-800">₦{customer.value.toLocaleString()}</p>
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
