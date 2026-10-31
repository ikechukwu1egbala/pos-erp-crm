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
