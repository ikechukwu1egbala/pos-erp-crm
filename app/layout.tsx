import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'EZC POS | Inventory & CRM',
  description: 'Retail operations, inventory, ERP and CRM dashboard for modern businesses.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <div className="mx-auto flex max-w-[1600px] gap-5 p-4 lg:p-6">
            <Sidebar />
            <div className="flex min-w-0 flex-1 flex-col gap-5">
              <Header />
              <main className="min-w-0">{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
