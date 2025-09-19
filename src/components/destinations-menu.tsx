
'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { topDestinations } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ChevronRight, Mountain, Trees, Waves, Leaf, Landmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const categories = [
    {
      title: "Hill Stations",
      icon: Mountain,
      href: "/destinations/category/hill-stations",
      description: "Serene mountain retreats."
    },
    {
      title: "Waterfalls",
      icon: Waves,
      href: "/destinations/category/waterfalls",
      description: "Cascading natural wonders."
    },
    {
      title: "Wildlife Sanctuaries",
      icon: Trees,
      href: "/destinations/category/wildlife",
      description: "Lush forests and diverse fauna."
    },
    {
        title: "Eco-tourism Spots",
        icon: Leaf,
        href: "/destinations/category/eco-tourism",
        description: "Sustainable nature experiences."
    },
    {
        title: "Cultural Sites",
        icon: Landmark,
        href: "/destinations/category/cultural-sites",
        description: "Historic and sacred places."
    }
  ];

const featuredDestination = topDestinations.find(d => d.slug === 'netarhat');
const featuredImage = PlaceHolderImages.find(p => p.id === featuredDestination?.imageId);

export function DestinationsMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] grid-cols-[1fr_2fr] gap-4 p-4 md:w-[700px] lg:w-[800px] lg:grid-cols-[1fr_1fr_1fr]">
              <div className="flex flex-col">
                <h3 className="font-medium text-foreground px-3 mb-2 text-sm">Popular Destinations</h3>
                <ul className="flex flex-col gap-1">
                  {topDestinations.slice(0, 5).map((destination) => (
                    <ListItem key={destination.name} title={destination.name} href={`/destinations/${destination.slug}`} />
                  ))}
                </ul>
                <NavigationMenuLink asChild>
                    <Link href="/map" className="mt-2 text-sm font-medium text-primary hover:underline px-3 flex items-center">
                        View All on Map <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                </NavigationMenuLink>
              </div>

              <ul className="grid grid-cols-2 gap-3 p-2">
                  {categories.map((category) => (
                    <li key={category.title}>
                        <NavigationMenuLink asChild>
                            <a href={category.href} className={cn("flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md")}>
                                <category.icon className="h-6 w-6 text-primary" />
                                <div className="mt-2 mb-0.5 text-sm font-medium">
                                    {category.title}
                                </div>
                                <p className="text-xs leading-tight text-muted-foreground">
                                    {category.description}
                                </p>
                            </a>
                        </NavigationMenuLink>
                    </li>
                  ))}
                </ul>

              {featuredDestination && featuredImage && (
                 <div className="col-span-1 flex flex-col h-full overflow-hidden rounded-lg">
                    <NavigationMenuLink asChild className='h-full'>
                        <Link href={`/destinations/${featuredDestination.slug}`} className='flex flex-col h-full group'>
                            <div className="relative h-48 w-full">
                                <Image
                                    src={featuredImage.imageUrl}
                                    alt={featuredDestination.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={featuredImage.imageHint}
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
                                <div className="absolute bottom-0 left-0 p-4">
                                     <h4 className="text-md font-semibold text-white">{featuredDestination.name}</h4>
                                </div>
                            </div>
                            <div className="p-4 bg-card flex-grow flex flex-col">
                                <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">{featuredDestination.shortDescription}</p>
                                <p className="text-sm font-medium text-primary group-hover:underline mt-2 self-start">Read More →</p>
                            </div>
                        </Link>
                    </NavigationMenuLink>
                 </div>
              )}
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
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
