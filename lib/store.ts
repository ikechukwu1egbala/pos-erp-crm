export type Product = {
  id: number;
  name: string;
  category: string;
  sku: string;
  price: number;
  stock: number;
  unit: string;
  minStock: number;
};

export type CartItem = {
  id: number;
  name: string;
  category: string;
  sku: string;
  price: number;
  quantity: number;
  unit: string;
};

export type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  segment: string;
  status: 'Active' | 'Priority' | 'New';
  value: number;
};

export type SaleRecord = {
  id: number;
  customer: string;
  total: number;
  channel: string;
  status: 'Paid' | 'Pending' | 'Completed';
  createdAt: string;
};

export const initialProducts: Product[] = [
  { id: 1, name: 'Premium Rice', category: 'Grains', sku: 'RICE-01', price: 4800, stock: 22, unit: 'Bag', minStock: 10 },
  { id: 2, name: 'Milo Classic', category: 'Beverages', sku: 'MILO-22', price: 2900, stock: 18, unit: 'Box', minStock: 8 },
  { id: 3, name: 'Groundnut Oil', category: 'Cooking', sku: 'OIL-17', price: 6200, stock: 9, unit: 'Bottle', minStock: 12 },
  { id: 4, name: 'Indomie Chicken', category: 'Instant Food', sku: 'IND-42', price: 950, stock: 46, unit: 'Pack', minStock: 20 },
  { id: 5, name: 'Detergent Pack', category: 'Household', sku: 'DET-11', price: 1450, stock: 12, unit: 'Pack', minStock: 10 },
  { id: 6, name: 'Tomato Paste', category: 'Cooking', sku: 'TOM-08', price: 1100, stock: 7, unit: 'Tin', minStock: 12 },
  { id: 7, name: 'Milk Powder', category: 'Groceries', sku: 'MILK-31', price: 3700, stock: 21, unit: 'Pack', minStock: 10 },
  { id: 8, name: 'Toilet Roll', category: 'Household', sku: 'TOIL-09', price: 750, stock: 58, unit: 'Roll', minStock: 20 }
];

export const initialCustomers: Customer[] = [
  { id: 1, name: 'Ada Okafor', email: 'ada@kolab.ng', phone: '+234 812 345 6789', segment: 'Retail', status: 'Active', value: 420000 },
  { id: 2, name: 'Musa Ibrahim', email: 'musa@westco.ng', phone: '+234 803 111 9922', segment: 'Wholesale', status: 'Priority', value: 830000 },
  { id: 3, name: 'Chinyere Idoko', email: 'chinyere@marketplus.ng', phone: '+234 818 765 2201', segment: 'Retail', status: 'New', value: 190000 },
  { id: 4, name: 'Femi Alalade', email: 'femi@aladesupplies.com', phone: '+234 806 331 2998', segment: 'B2B', status: 'Active', value: 1180000 }
];

export const initialSales: SaleRecord[] = [
  { id: 1, customer: 'Ada Okafor', total: 42500, channel: 'Cash', status: 'Paid', createdAt: '2026-10-31T09:13:00.000Z' },
  { id: 2, customer: 'Musa Ibrahim', total: 28200, channel: 'Transfer', status: 'Pending', createdAt: '2026-10-31T10:02:00.000Z' },
  { id: 3, customer: 'Bola James', total: 83600, channel: 'Credit', status: 'Completed', createdAt: '2026-10-31T11:40:00.000Z' },
  { id: 4, customer: 'Chinyere Idoko', total: 18950, channel: 'Card', status: 'Paid', createdAt: '2026-10-31T12:25:00.000Z' }
];

export function applyProductSale(products: Product[], cart: CartItem[]) {
  const updatedProducts = products.map((product) => {
    const item = cart.find((cartItem) => cartItem.id === product.id);
    if (!item) return product;
    return {
      ...product,
      stock: Math.max(0, product.stock - item.quantity)
    };
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal >= 50000 ? subtotal * 0.05 : subtotal * 0.02;
  const total = subtotal - discount;

  return {
    updatedProducts,
    subtotal,
    discount,
    total
  };
}
