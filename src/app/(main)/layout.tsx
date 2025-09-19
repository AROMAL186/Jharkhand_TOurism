'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  ClipboardList,
  Map,
  ShoppingBasket,
  Bus,
  MessageSquare,
  LogIn,
  LogOut,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { useEffect, useState } from 'react';

const navItems = [
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
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-1">
            <AppLogo />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <Link href={item.href} passHref legacyBehavior>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
            {isLoggedIn ? (
               <SidebarMenuItem>
                 <SidebarMenuButton
                   onClick={handleLogout}
                   tooltip={"Logout"}
                 >
                   <LogOut />
                   <span>{"Logout"}</span>
                 </SidebarMenuButton>
               </SidebarMenuItem>
            ) : (
             <SidebarMenuItem>
                <Link href="/auth/login" passHref legacyBehavior>
                  <SidebarMenuButton
                    isActive={pathname === "/auth/login"}
                    tooltip={"Login"}
                  >
                    <LogIn />
                    <span>{"Login"}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:h-16 sm:px-6">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="md:hidden" />
            <div className="hidden md:block">
              <AppLogo />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
