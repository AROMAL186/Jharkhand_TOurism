
'use client';

import Link from "next/link";
import { Menu, LogIn, LogOut, ChevronDown, CalendarDays } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AppLogo from "@/components/app-logo";
import { mobileNavItems } from "@/app/(main)/layout";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { topDestinations, upcomingEvents } from "@/lib/data";

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
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold mb-4"
            onClick={() => setIsOpen(false)}
          >
            <AppLogo />
            <span className="sr-only">Jharkhand Explorer</span>
          </Link>
          {mobileNavItems.slice(0, 1).map((item) => (
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
           <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="destinations" className="border-b-0">
              <AccordionTrigger className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:no-underline hover:text-foreground hover:bg-muted [&[data-state=open]]:text-foreground [&[data-state=open]]:bg-muted">
                <span className="flex items-center">Destinations</span>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  {topDestinations.map(dest => (
                    <Link
                      key={dest.slug}
                      href={`/destinations/${dest.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {dest.name}
                    </Link>
                  ))}
                  <Link
                      href="/map"
                      onClick={() => setIsOpen(false)}
                      className="block rounded-md px-3 py-2 text-primary font-semibold"
                    >
                      View All on Map
                    </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="plan-trip" className="border-b-0">
                 <AccordionTrigger className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:no-underline hover:text-foreground hover:bg-muted [&[data-state=open]]:text-foreground [&[data-state=open]]:bg-muted">Plan Your Trip</AccordionTrigger>
                 <AccordionContent className="pb-0">
                   <div className="ml-4 mt-2 flex flex-col space-y-2">
                     <Link href="/trip-planner" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">Trip Planner</Link>
                     <Link href="/transport" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">Transport</Link>
                   </div>
                 </AccordionContent>
             </AccordionItem>
          </Accordion>
          {mobileNavItems.slice(1, 5).map((item) => (
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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="upcoming-events" className="border-b-0">
                <AccordionTrigger className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:no-underline hover:text-foreground hover:bg-muted [&[data-state=open]]:text-foreground [&[data-state=open]]:bg-muted">
                    <span className="flex items-center">Upcoming Events</span>
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                    <div className="ml-4 mt-2 flex flex-col space-y-2">
                        {upcomingEvents.map(event => (
                        <Link
                            key={event.title}
                            href={event.href}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                            {event.title}
                        </Link>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
          {mobileNavItems.slice(5).map((item) => (
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
        <div className="mt-auto">
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
