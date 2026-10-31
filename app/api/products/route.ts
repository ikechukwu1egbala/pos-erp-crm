import { NextResponse } from 'next/server';
import { initialProducts, type Product } from '@/lib/mock-data';

let products: Product[] = initialProducts;

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<Product>;

  if (!payload.name || !payload.price || !payload.stock) {
    return NextResponse.json({ error: 'Invalid product payload' }, { status: 400 });
  }

  const newProduct: Product = {
    id: Date.now(),
    name: payload.name,
    category: payload.category || 'General',
    sku: payload.sku || `SKU-${Date.now()}`,
    price: Number(payload.price),
    stock: Number(payload.stock),
    unit: payload.unit || 'Unit',
    minStock: Number(payload.minStock || 5)
  };

  products = [newProduct, ...products];
  return NextResponse.json(newProduct, { status: 201 });
}

export async function PUT(request: Request) {
  const payload = (await request.json()) as Product;
  products = products.map((product) => (product.id === payload.id ? { ...product, ...payload } : product));
  return NextResponse.json(products);
}
