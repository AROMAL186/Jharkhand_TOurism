
'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';

const aboutJharkhand = [
    { title: 'Jharkhand at a Glance', href: '/' },
    { title: 'Maps', href: '/map' },
    { title: 'Transport', href: '/transport' },
]

const essentials = [
    { title: 'Trip Planner', href: '/trip-planner' },
    { title: 'Travel Tips', href: '#' },
    { title: 'Tourist Guide', href: '#' },
]

const accommodation = [
    { title: 'Book a Hotel', href: '#' },
]

const deals = [
    { title: 'Tour Packages', href: '/trip-planner' },
]

const publications = [
    { title: 'eBrochures', href: '#' },
    { title: 'Newsletter', href: '#' },
]

export function PlanTripMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Plan Your Trip</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] grid-cols-4 gap-4 p-4 md:w-[700px] lg:w-[800px]">
                <div>
                    <h3 className="font-medium text-foreground px-3 mb-2 text-sm">About Jharkhand</h3>
                     <ul className="flex flex-col gap-1">
                        {aboutJharkhand.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href} />
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-medium text-foreground px-3 mb-2 text-sm">Essentials</h3>
                     <ul className="flex flex-col gap-1">
                        {essentials.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href} />
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-medium text-foreground px-3 mb-2 text-sm">Accommodation</h3>
                     <ul className="flex flex-col gap-1">
                        {accommodation.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href} />
                        ))}
                    </ul>
                    <h3 className="font-medium text-foreground px-3 mt-4 mb-2 text-sm">Deals & Offers</h3>
                     <ul className="flex flex-col gap-1">
                        {deals.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href} />
                        ))}
                    </ul>
                </div>
                 <div>
                    <h3 className="font-medium text-foreground px-3 mb-2 text-sm">Publications</h3>
                     <ul className="flex flex-col gap-1">
                        {publications.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href} />
                        ))}
                    </ul>
                </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md py-2 px-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
