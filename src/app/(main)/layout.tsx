
'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  ClipboardList,
  Map,
  ShoppingBasket,
  Bus,
  MessageSquare,
  LogIn,
  LogOut,
  Menu,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MobileNav } from '@/components/mobile-nav';

export const navItems = [
  { href: '/', label: 'Home', icon: LayoutDashboard },
  { href: '/itinerary', label: 'Itinerary Planner', icon: ClipboardList },
  { href: '/map', label: 'Interactive Map', icon: Map },
  { href: '/marketplace', label: 'Marketplace', icon: ShoppingBasket },
  { href: '/transport', label: 'Transport', icon: Bus },
  { href: '/feedback', label: 'Feedback', icon: MessageSquare },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    }
  }, [pathname]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
    }
    setIsLoggedIn(false);
    router.push('/auth/login');
  };

  if (pathname.startsWith('/auth')) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <AppLogo />
            <span className="sr-only">Jharkhand Explorer</span>
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-foreground ${
                pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
           <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link href="/auth/login">
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Link>
              </Button>
            )}
           </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
}
