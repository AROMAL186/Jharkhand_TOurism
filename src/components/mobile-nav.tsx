
'use client';

import Link from "next/link";
import { Menu, LogIn, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AppLogo from "@/components/app-logo";
import { navItems } from "@/app/(main)/layout";
import { useState } from "react";

interface MobileNavProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

export function MobileNav({ isLoggedIn, handleLogout }: MobileNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
            className="flex items-center gap-2 text-lg font-semibold mb-4"
            onClick={() => setIsOpen(false)}
          >
            <AppLogo />
            <span className="sr-only">Jharkhand Explorer</span>
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:text-foreground ${
                pathname === item.href ? 'text-foreground bg-muted' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-6 left-6 right-6">
           {isLoggedIn ? (
              <Button variant="outline" size="sm" onClick={() => {
                setIsOpen(false);
                handleLogout();
              }} className="w-full">
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
          ) : (
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Link>
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
