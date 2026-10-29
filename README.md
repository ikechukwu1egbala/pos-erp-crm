export const products = [
  { id: 1, name: 'Premium Rice', category: 'Grains', sku: 'RICE-01', price: 4800, stock: 22 },
  { id: 2, name: 'Milo Classic', category: 'Beverages', sku: 'MILO-22', price: 2900, stock: 18 },
  { id: 3, name: 'Groundnut Oil', category: 'Cooking', sku: 'OIL-17', price: 6200, stock: 9 },
  { id: 4, name: 'Indomie Chicken', category: 'Instant Food', sku: 'IND-42', price: 950, stock: 46 },
  { id: 5, name: 'Detergent Pack', category: 'Household', sku: 'DET-11', price: 1450, stock: 12 },
  { id: 6, name: 'Tomato Paste', category: 'Cooking', sku: 'TOM-08', price: 1100, stock: 7 },
  { id: 7, name: 'Milk Powder', category: 'Groceries', sku: 'MILK-31', price: 3700, stock: 21 },
  { id: 8, name: 'Toilet Roll', category: 'Household', sku: 'TOIL-09', price: 750, stock: 58 }
];

export const salesTrend = [
  { label: 'Jan', value: 40 },
  { label: 'Feb', value: 52 },
  { label: 'Mar', value: 61 },
  { label: 'Apr', value: 58 },
  { label: 'May', value: 74 },
  { label: 'Jun', value: 81 },
  { label: 'Jul', value: 68 },
  { label: 'Aug', value: 86 }
];

export const topProducts = [
  { name: 'Premium Rice', units: 192, revenue: 894000, growth: 21 },
  { name: 'Groundnut Oil', units: 148, revenue: 756000, growth: 17 },
  { name: 'Milo Classic', units: 122, revenue: 612000, growth: 13 },
  { name: 'Indomie', units: 201, revenue: 560000, growth: 9 }
];

export const inventoryAlerts = [
  { name: 'Groundnut Oil', stock: '9 left', status: 'Reorder' },
  { name: 'Tomato Paste', stock: '7 left', status: 'Critical' },
  { name: 'Detergent Pack', stock: '12 left', status: 'Watch' }
];

export const recentOrders = [
  { id: '#1204', customer: 'Ada Okafor', items: 5, total: 28250, status: 'Paid', time: '9:13 AM' },
  { id: '#1205', customer: 'Musa Ibrahim', items: 8, total: 40800, status: 'Pending', time: '10:02 AM' },
  { id: '#1206', customer: 'Bola James', items: 4, total: 17500, status: 'Paid', time: '11:40 AM' }
];
