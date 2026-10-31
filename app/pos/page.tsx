'use client';

import { ArrowRight, CreditCard, Package, Search, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useCart, useProducts } from '@/lib/store';
import { applyProductSale } from '@/lib/mock-data';

const quickActions = [
  { label: 'Cash', icon: ShoppingBag },
  { label: 'Card', icon: CreditCard },
  { label: 'Promo', icon: Tag },
  { label: 'Split', icon: Sparkles }
];

export default function PosPage() {
  const { products, setProducts } = useProducts();
  const { cart, addItem, updateQuantity, removeItem, clearCart, subtotal, totalItems } = useCart();
  const [notice, setNotice] = useState('');

  const discount = useMemo(() => (subtotal >= 50000 ? subtotal * 0.05 : subtotal * 0.02), [subtotal]);
  const total = subtotal - discount;

  const handleCompleteSale = () => {
    if (cart.length === 0) {
      setNotice('Cart is empty. Add at least one product before checkout.');
      return;
    }

    const stockCheck = cart.some((item) => {
      const product = products.find((entry) => entry.id === item.id);
      return (product ? product.stock : 0) < item.quantity;
    });

    if (stockCheck) {
      setNotice('One or more items exceeded the available stock. Adjust the cart and try again.');
      return;
    }

    const { updatedProducts, total: newTotal } = applyProductSale(products, cart);
    setProducts(updatedProducts);
    clearCart();
    setNotice(`Sale completed. Total collected: ₦${newTotal.toLocaleString()}`);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">
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
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-brand-200 hover:bg-brand-50/40">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Package className="h-5 w-5" />
                </div>
                {product.stock <= product.minStock ? <span className="badge-warning">Low stock</span> : <span className="badge-success">In stock</span>}
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
                <button
                  className="primary-btn px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => product.stock > 0 && addItem(product, 1)}
                  disabled={product.stock <= 0}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="glass-card p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="metric-label">Current sale</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-800">Cart</h2>
          </div>
          <div className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-bold text-brand-700">{totalItems} items</div>
        </div>

        <div className="mt-5 space-y-3">
          {cart.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center text-sm text-slate-500">
              Your cart is empty.
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.unit} • Qty {item.quantity}</p>
                  </div>
                  <p className="font-bold text-slate-800">₦{(item.price * item.quantity).toLocaleString()}</p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="soft-btn px-2 py-1" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className="text-sm font-medium text-slate-700">{item.quantity}</span>
                    <button className="soft-btn px-2 py-1" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="text-xs font-semibold text-rose-600" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-5 space-y-3 rounded-2xl bg-[#f8f1e5] p-4">
          <div className="flex justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Discount</span>
            <span>₦{discount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600">
            <span>Tax</span>
            <span>₦0</span>
          </div>
          <div className="flex justify-between border-t border-dashed border-slate-300 pt-3 text-base font-bold text-slate-800">
            <span>Total</span>
            <span>₦{total.toLocaleString()}</span>
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

        {notice ? (
          <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50 p-3 text-sm text-brand-700">
            {notice}
          </div>
        ) : null}

        <button className="primary-btn mt-5 w-full py-3 text-base" onClick={handleCompleteSale}>
          <Sparkles className="mr-2 h-4 w-4" />
          Complete sale
        </button>
      </aside>
    </div>
  );
}
