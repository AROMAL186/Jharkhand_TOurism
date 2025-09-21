'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Map,
  ShoppingBasket,
  Bus,
  MessageSquare,
  LogIn,
  LogOut,
  GalleryHorizontal,
  ShoppingCart,
  Users,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/mobile-nav';
import { DestinationsMenu } from '@/components/destinations-menu';
import { PlanTripMenu } from '@/components/plan-trip-menu';
import { UpcomingEventsMenu } from '@/components/upcoming-events-menu';
import { cn } from '@/lib/utils';
import { CartProvider, useCart } from '@/hooks/use-cart';

export const navItems = [
  { href: '/', label: 'Home', icon: LayoutDashboard },
  { href: '/map', label: 'Interactive Map', icon: Map },
  { href: '/gallery', label: 'Gallery', icon: GalleryHorizontal },
  { href: '/marketplace', label: 'Marketplace', icon: ShoppingBasket },
  { href: '/transport', label: 'Transport', icon: Bus },
  { href: '/local-services', label: 'Services', icon: Users },
  { href: '/feedback', label: 'Feedback', icon: MessageSquare },
];

export const mobileNavItems = [
  { href: '/', label: 'Home', icon: LayoutDashboard },
  { href: '/map', label: 'Interactive Map', icon: Map },
  { href: '/gallery', label: 'Gallery', icon: GalleryHorizontal },
  { href: '/marketplace', label: 'Marketplace', icon: ShoppingBasket },
  { href: '/transport', label: 'Transport', icon: Bus },
  { href: '/local-services', label: 'Services', icon: Users },
  { href: '/feedback', label: 'Feedback', icon: MessageSquare },
  { href: '/route-optimizer', label: 'Route Optimizer', icon: Map },
  { href: '/cart', label: 'Cart', icon: ShoppingCart },
];

function LayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState<string | null>(null);
    const { cart } = useCart();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const storedUserType = localStorage.getItem('userType');
            setIsLoggedIn(loggedIn);
            setUserType(storedUserType);

            if (!loggedIn && !pathname.startsWith('/auth')) {
                router.push('/auth/login');
            }

            if (loggedIn && storedUserType === 'provider' && !pathname.startsWith('/dashboard')) {
                router.push('/dashboard');
            }
        }
    }, [pathname, router]);

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userType');
        }
        setIsLoggedIn(false);
        setUserType(null);
        router.push('/auth/login');
    };

    if (pathname.startsWith('/auth') || userType === 'provider') {
        return <>{children}</>;
    }
    
    const isTransportPage = pathname.startsWith('/transport');

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className={cn("sticky top-0 flex h-16 items-center justify-between gap-4 border-b z-50 px-4 md:px-6", {
            "bg-transparent border-transparent": isTransportPage,
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
                    } ${isTransportPage ? 'text-black hover:text-black/90' : ''}`}
                    >
                    Home
                </Link>
                <DestinationsMenu />
                <PlanTripMenu />
                {navItems.slice(1, 6).map((item) => (
                       <Link
                    key={item.label}
                    href={item.href}
                    className={`transition-colors hover:text-foreground ${
                        pathname.startsWith(item.href) && item.href !== '/' ? 'text-foreground' : 'text-muted-foreground'
                    } ${isTransportPage ? 'text-black hover:text-black/90' : ''}`}
                    >
                    {item.label}
                    </Link>
                ))}
                <UpcomingEventsMenu />
                <Link
                    href="/feedback"
                    className={`transition-colors hover:text-foreground ${
                        pathname.startsWith('/feedback') ? 'text-foreground' : 'text-muted-foreground'
                    } ${isTransportPage ? 'text-black hover:text-black/90' : ''}`}
                    >
                    Feedback
                </Link>
                <Link
                    href="/route-optimizer"
                    className={`transition-colors hover:text-foreground ${
                        pathname.startsWith('/route-optimizer') ? 'text-foreground' : 'text-muted-foreground'
                    } ${isTransportPage ? 'text-black hover:text-black/90' : ''}`}
                    >
                    Route Optimizer
                </Link>
                </nav>
            </div>
            
            <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-4">
                    <Button asChild variant="ghost" size="icon" className={cn('relative', isTransportPage && "text-black hover:bg-black/10")}>
                        <Link href="/cart">
                        <ShoppingCart className="h-5 w-5" />
                        {cart.length > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                                {cart.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                        )}
                        <span className="sr-only">Cart</span>
                        </Link>
                    </Button>
                    {isLoggedIn ? (
                        <Button variant="outline" size="sm" onClick={handleLogout} className={cn(isTransportPage && "bg-transparent text-black border-black/50 hover:bg-black/10")}>
                        <LogOut className="mr-2 h-4 w-4" /> Logout
                        </Button>
                    ) : (
                    <Button asChild variant="outline" size="sm" className={cn(isTransportPage && "bg-transparent text-black border-black/50 hover:bg-black/10")}>
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

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <LayoutContent>{children}</LayoutContent>
    </CartProvider>
  );
}
