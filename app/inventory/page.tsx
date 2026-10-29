import { ArrowRight, CreditCard, Package, Search, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { products } from '@/lib/data';

const quickActions = [
  { label: 'Quick cash', icon: ShoppingBag },
  { label: 'Returns', icon: ArrowRight },
  { label: 'Pricing', icon: Tag },
  { label: 'Payments', icon: CreditCard }
];

export default function PosPage() {
  const selectedProducts = products.slice(0, 8);

  return (
    <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
      <section className="glass-card p-5">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <p className="metric-label">Sales terminal</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-800">POS checkout</h2>
          </div>
          <button className="soft-btn">Open cart</button>
        </div>

        <div className="mb-5 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
          <Search className="h-4 w-4 text-slate-500" />
          <input
            className="w-full border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            placeholder="Search products, SKU or barcode"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {selectedProducts.map((product) => (
            <div key={product.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-brand-200 hover:bg-brand-50/40">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Package className="h-5 w-5" />
                </div>
                {product.stock < 15 ? <span className="badge-warning">Low stock</span> : <span className="badge-success">In stock</span>}
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-slate-800">{product.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{product.category}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-slate-800">₦{product.price.toLocaleString()}</p>
                  <p className="text-xs text-slate-500">{product.stock} in stock</p>
                </div>
                <button className="primary-btn px-3 py-2">Add</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="glass-card p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="metric-label">Current sale</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-800">Cart 18</h2>
          </div>
          <div className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-bold text-brand-700">3 items</div>
        </div>

        <div className="mt-5 space-y-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800">Premium rice</p>
                <p className="text-xs text-slate-500">Carton • Qty 2</p>
              </div>
              <p className="font-bold text-slate-800">₦18,000</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800">Milo</p>
                <p className="text-xs text-slate-500">Box • Qty 3</p>
              </div>
              <p className="font-bold text-slate-800">₦12,900</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800">Corn flakes</p>
                <p className="text-xs text-slate-500">Pack • Qty 4</p>
              </div>
              <p className="font-bold text-slate-800">₦9,600</p>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-3 rounded-2xl bg-[#f8f1e5] p-4">
          <div className="flex justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span>₦40,500</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Discount</span>
            <span>₦1,250</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Tax</span>
            <span>₦0</span>
          </div>
          <div className="flex justify-between border-t border-dashed border-slate-300 pt-3 text-base font-bold text-slate-800">
            <span>Total</span>
            <span>₦39,250</span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {quickActions.map(({ label, icon: Icon }) => (
            <button key={label} className="soft-btn h-12">
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <button className="primary-btn mt-5 w-full py-3 text-base">
          <Sparkles className="mr-2 h-4 w-4" />
          Complete sale
        </button>
      </aside>
    </div>
  );
}
