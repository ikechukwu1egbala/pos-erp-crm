import { NextResponse } from 'next/server';
import { initialCustomers, type Customer } from '@/lib/mock-data';

let customers: Customer[] = initialCustomers;

export async function GET() {
  return NextResponse.json(customers);
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<Customer>;

  if (!payload.name || !payload.email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
  }

  const customer: Customer = {
    id: Date.now(),
    name: payload.name,
    email: payload.email,
    phone: payload.phone || '+234 000 000 0000',
    segment: payload.segment || 'Retail',
    status: payload.status || 'New',
    value: Number(payload.value || 0)
  };

  customers = [customer, ...customers];
  return NextResponse.json(customer, { status: 201 });
}
