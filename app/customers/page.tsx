'use client';

import { AlertTriangle, ArrowUpDown, PackageCheck, Search, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { type Product } from '@/lib/mock-data';
import { useProducts } from '@/lib/store';

export default function InventoryPage() {
  const { products, setProducts } = useProducts();
  const [form, setForm] = useState({
    name: '',
    category: '',
    sku: '',
    price: '',
    stock: '',
    unit: 'Unit',
    minStock: '5'
  });

  const totalValue = products.reduce((sum, product) => sum + product.price * product.stock, 0);
  const lowStockCount = products.filter((product) => product.stock <= product.minStock).length;

  const handleChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleAddProduct = () => {
    if (!form.name || !form.category || !form.price || !form.stock) {
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: form.name,
      category: form.category,
      sku: form.sku || `SKU-${Date.now()}`,
      price: Number(form.price),
      stock: Number(form.stock),
      unit: form.unit,
      minStock: Number(form.minStock || 5)
    };

    setProducts((current) => [newProduct, ...current]);
    setForm({ name: '', category: '', sku: '', price: '', stock: '', unit: 'Unit', minStock: '5' });
  };

  const handleDelete = (id: number) => {
    setProducts((current) => current.filter((product) => product.id !== id));
  };

  return (
    <div className="space-y-6">
      <section className="glass-card p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="metric-label">Inventory</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-800">Stock overview</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <Search className="h-4 w-4 text-slate-500" />
              <input className="w-48 border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none" placeholder="Search stock" />
            </div>
            <button className="primary-btn">Add product</button>
          </div>
        </div>
      </section>

      <section className="glass-card p-5">
        <div className="mb-4">
          <p className="metric-label">New product</p>
          <h2 className="mt-2 text-xl font-bold text-slate-800">Create inventory item</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <input value={form.name} onChange={(e) => handleChange('name', e.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm" placeholder="Product name" />
          <input value={form.category} onChange={(e) => handleChange('category', e.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm" placeholder="Category" />
          <input value={form.sku} onChange={(e) => handleChange('sku', e.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm" placeholder="SKU" />
          <input value={form.price} type="number" onChange={(e) => handleChange('price', e.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm" placeholder="Price" />
          <input value={form.stock} type="number" onChange={(e) => handleChange('stock', e.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm" placeholder="Stock" />
          <input value={form.unit} onChange={(e) => handleChange('unit', e.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm" placeholder="Unit" />
          <input value={form.minStock} type="number" onChange={(e) => handleChange('minStock', e.target.value)} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm" placeholder="Min stock" />
          <button className="primary-btn md:col-span-2 xl:col-span-1" onClick={handleAddProduct}>Save product</button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="stat-card">
          <p className="metric-label">Total SKUs</p>
          <p className="metric-value">{products.length}</p>
        </div>
        <div className="stat-card">
          <p className="metric-label">Low stock</p>
          <p className="metric-value text-amber-600">{lowStockCount}</p>
        </div>
        <div className="stat-card">
          <p className="metric-label">Stock value</p>
          <p className="metric-value text-emerald-600">₦{totalValue.toLocaleString()}</p>
        </div>
      </section>

      <section className="glass-card overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div>
            <p className="metric-label">Catalog</p>
            <h2 className="mt-2 text-xl font-bold text-slate-800">Product list</h2>
          </div>
          <button className="soft-btn">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Sort
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-sm text-slate-600">
              <tr>
                <th className="px-5 py-4 font-semibold">Product</th>
                <th className="px-5 py-4 font-semibold">Category</th>
                <th className="px-5 py-4 font-semibold">Stock</th>
                <th className="px-5 py-4 font-semibold">Price</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t border-slate-200">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                        <PackageCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{product.name}</p>
                        <p className="text-xs text-slate-500">SKU {product.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-slate-600">{product.category}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800">{product.stock}</span>
                      <span className="text-xs text-slate-500">{product.unit}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-semibold text-slate-800">₦{product.price.toLocaleString()}</td>
                  <td className="px-5 py-4">
                    {product.stock <= product.minStock ? <span className="badge-warning">Reorder</span> : <span className="badge-success">Healthy</span>}
                  </td>
                  <td className="px-5 py-4">
                    <button className="text-sm font-medium text-rose-600" onClick={() => handleDelete(product.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="glass-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Improvements</p>
              <h2 className="mt-2 text-xl font-bold text-slate-800">Fast movers</h2>
            </div>
            <TrendingUp className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="mt-4 space-y-3">
            {['Rice', 'Oil', 'Milo', 'Soap'].map((item, i) => (
              <div key={item} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                <span className="font-medium text-slate-700">{item}</span>
                <span className="text-sm text-emerald-600">+{12 + i * 4}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Attention</p>
              <h2 className="mt-2 text-xl font-bold text-slate-800">Stock risks</h2>
            </div>
            <AlertTriangle className="h-5 w-5 text-amber-600" />
          </div>
          <div className="mt-4 space-y-3">
            {products.filter((product) => product.stock <= product.minStock).slice(0, 3).map((item) => (
              <div key={item.id} className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                {item.name} requires plan review within 48 hours.
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
