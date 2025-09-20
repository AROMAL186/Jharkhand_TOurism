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
  GalleryHorizontal,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/mobile-nav';
import { DestinationsMenu } from '@/components/destinations-menu';
import { PlanTripMenu } from '@/components/plan-trip-menu';
import { UpcomingEventsMenu } from '@/components/upcoming-events-menu';
import { cn } from '@/lib/utils';

export const navItems = [
  { href: '/', label: 'Home', icon: LayoutDashboard },
  // DestinationsMenu is manually placed
  // PlanTripMenu is manually placed
  { href: '/map', label: 'Interactive Map', icon: Map },
  { href: '/gallery', label: 'Gallery', icon: GalleryHorizontal },
  { href: '/marketplace', label: 'Marketplace', icon: ShoppingBasket },
  { href: '/transport', label: 'Transport', icon: Bus },
  // UpcomingEventsMenu is manually placed
  { href: '/feedback', label: 'Feedback', icon: MessageSquare },
];

export const mobileNavItems = [
  { href: '/', label: 'Home', icon: LayoutDashboard },
  { href: '/map', label: 'Interactive Map', icon: Map },
  { href: '/gallery', label: 'Gallery', icon: GalleryHorizontal },
  { href: '/marketplace', label: 'Marketplace', icon: ShoppingBasket },
  { href: '/transport', label: 'Transport', icon: Bus },
  { href: '/feedback', label: 'Feedback', icon: MessageSquare },
  { href: '/route-optimizer', label: 'Route Optimizer', icon: Map },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (!loggedIn && !pathname.startsWith('/auth')) {
        router.push('/auth/login');
      }
      setIsLoggedIn(loggedIn);
    }
  }, [pathname, router]);

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
  
  const isTransportPage = pathname.startsWith('/transport');

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className={cn("sticky top-0 flex h-16 items-center justify-between gap-4 border-b z-50 px-4 md:px-6", {
        "bg-transparent border-transparent text-white": isTransportPage,
        "bg-background": !isTransportPage
      })}>
        <div className="flex items-center gap-6">
          <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <AppLogo />
              <span className="sr-only">Jharkhand Explorer</span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium lg:gap-6">
            <Link
                href="/"
                className={`transition-colors hover:text-foreground ${
                  pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
                } ${isTransportPage ? 'text-white hover:text-white/90' : ''}`}
              >
                Home
            </Link>
            <DestinationsMenu />
            <PlanTripMenu />
             <Link
                href="/trip-planner"
                className={`transition-colors hover:text-foreground ${
                  pathname.startsWith('/trip-planner') ? 'text-foreground' : 'text-muted-foreground'
                } ${isTransportPage ? 'text-white hover:text-white/90' : ''}`}
              >
                Trip Planner
              </Link>
            {navItems.slice(2, 6).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors hover:text-foreground ${
                  pathname.startsWith(item.href) && item.href !== '/' ? 'text-foreground' : 'text-muted-foreground'
                } ${isTransportPage ? 'text-white hover:text-white/90' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <UpcomingEventsMenu />
             <Link
                href="/feedback"
                className={`transition-colors hover:text-foreground ${
                  pathname.startsWith('/feedback') ? 'text-foreground' : 'text-muted-foreground'
                } ${isTransportPage ? 'text-white hover:text-white/90' : ''}`}
              >
                Feedback
              </Link>
             <Link
                href="/route-optimizer"
                className={`transition-colors hover:text-foreground ${
                  pathname.startsWith('/route-optimizer') ? 'text-foreground' : 'text-muted-foreground'
                } ${isTransportPage ? 'text-white hover:text-white/90' : ''}`}
              >
                Route Optimizer
              </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
              {isLoggedIn ? (
                  <Button variant="outline" size="sm" onClick={handleLogout} className={cn(isTransportPage && "bg-transparent text-white border-white/50 hover:bg-white/10")}>
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Button>
              ) : (
                <Button asChild variant="outline" size="sm" className={cn(isTransportPage && "bg-transparent text-white border-white/50 hover:bg-white/10")}>
                  <Link href="/auth/login">
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </Link>
                </Button>
              )}
          </div>
          <MobileNav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </div>
      </header>
      <main className={cn("flex flex-1 flex-col", {
          "p-4 md:gap-8 md:p-8": !isTransportPage
        })}>
        {children}
      </main>
    </div>
  );
}
