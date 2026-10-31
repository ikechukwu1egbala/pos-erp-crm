'use client';

import { useEffect, useMemo, useState } from 'react';
import { initialCustomers, initialProducts, initialSales, type CartItem, type Customer, type Product, type SaleRecord } from './mock-data';

const PRODUCT_KEY = 'ezc-products';
const CART_KEY = 'ezc-cart';
const CUSTOMER_KEY = 'ezc-customers';
const SALES_KEY = 'ezc-sales';

function readFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    const saved = readFromStorage<Product[]>(PRODUCT_KEY, initialProducts);
    setProducts(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
    }
  }, [products]);

  return { products, setProducts };
}

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);

  useEffect(() => {
    const saved = readFromStorage<Customer[]>(CUSTOMER_KEY, initialCustomers);
    setCustomers(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customers));
    }
  }, [customers]);

  const addCustomer = (customer: Customer) => {
    setCustomers((current) => [customer, ...current]);
  };

  return { customers, addCustomer, setCustomers };
}

export function useSales() {
  const [sales, setSales] = useState<SaleRecord[]>(initialSales);

  useEffect(() => {
    const saved = readFromStorage<SaleRecord[]>(SALES_KEY, initialSales);
    setSales(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(SALES_KEY, JSON.stringify(sales));
    }
  }, [sales]);

  const addSale = (sale: SaleRecord) => {
    setSales((current) => [sale, ...current]);
  };

  return { sales, addSale, setSales };
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = readFromStorage<CartItem[]>(CART_KEY, []);
    setCart(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  const addItem = (product: Product, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          category: product.category,
          sku: product.sku,
          price: product.price,
          quantity,
          unit: product.unit
        }
      ];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((current) => {
      if (quantity <= 0) {
        return current.filter((item) => item.id !== id);
      }

      return current.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  const removeItem = (id: number) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  return {
    cart,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    totalItems
  };
}
