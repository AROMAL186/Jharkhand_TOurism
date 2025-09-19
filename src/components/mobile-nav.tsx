
'use client';

import Link from "next/link";
import { Menu, LogIn, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AppLogo from "@/components/app-logo";
import { navItems } from "@/app/(main)/layout";

interface MobileNavProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

export function MobileNav({ isLoggedIn, handleLogout }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
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
        </nav>
      </SheetContent>
    </Sheet>
  );
}
