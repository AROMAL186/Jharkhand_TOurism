'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ShoppingBasket, Package, LogOut } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';

export const dashboardNavItems = [
  { href: '/dashboard', label: 'Stock Management', icon: ShoppingBasket },
  { href: '/dashboard/orders', label: 'Order Details', icon: Package },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userType');
    }
    router.push('/auth/login');
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background z-50 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <AppLogo />
            <span className="sr-only">Jharkhand Explorer</span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium lg:gap-6">
            {dashboardNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors hover:text-foreground ${
                  pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href)) ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </header>
      <main className="flex flex-1 flex-col p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
}
