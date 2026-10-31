import { NextResponse } from 'next/server';
import { initialSales, type SaleRecord } from '@/lib/mock-data';

let sales: SaleRecord[] = initialSales;

export async function GET() {
  return NextResponse.json(sales);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<SaleRecord>;

  if (!payload.customer || !payload.total) {
    return NextResponse.json({ error: 'Customer and total are required' }, { status: 400 });
  }

  const sale: SaleRecord = {
    id: Date.now(),
    customer: payload.customer,
    total: Number(payload.total),
    channel: payload.channel || 'Cash',
    status: payload.status || 'Paid',
    createdAt: new Date().toISOString()
  };

  sales = [sale, ...sales];
  return NextResponse.json(sale, { status: 201 });
}
