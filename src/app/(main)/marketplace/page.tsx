
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShoppingBasket,
  Star,
  Heart,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { shops, Shop } from '@/lib/shops';

export default function MarketplacePage() {
  const router = useRouter();
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
          // Default to a central location in Jharkhand if location is denied
          setUserLocation({ lat: 23.6345, lng: 85.3551 });
        }
      );
    } else {
      // Default location if geolocation is not supported
      setUserLocation({ lat: 23.6345, lng: 85.3551 });
    }
  }, []);

  const handleGetDirections = (shop: Shop) => {
    if (userLocation) {
      const origin = `${userLocation.lat},${userLocation.lng}`;
      const destination = `${shop.position.lat},${shop.position.lng}`;
      router.push(`/route-optimizer?origin=${origin}&destination=${destination}&name=${encodeURIComponent(shop.name)}`);
    } else {
      // Handle case where user location is not yet available
      alert('Getting your location... Please try again in a moment.');
    }
  };

  const highlyRatedShops = [...shops].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const mostVisitedShops = [...shops].sort((a, b) => b.visitCount - a.visitCount).slice(0, 4);

  const renderShopCard = (shop: Shop) => (
    <Card key={shop.id} className="group overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={shop.imageUrl}
          alt={shop.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{shop.name}</CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
            <span>{shop.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4 fill-red-500 text-red-600" />
            <span>{shop.visitCount.toLocaleString()} visitors</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{shop.description}</p>
        <Button onClick={() => handleGetDirections(shop)} className="w-full">
          <MapPin className="mr-2 h-4 w-4" /> Get Directions
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
          <ShoppingBasket className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline tracking-tight">
          Jharkhand's Artisan Marketplace
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Discover and connect with local artisans. Find unique handicrafts, art, and more.
        </p>
      </header>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <Star className="mr-3 h-6 w-6 text-yellow-500" />
            Highly-Rated Shops
          </h2>
          <Button variant="link" className="text-primary">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlyRatedShops.map(renderShopCard)}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <Heart className="mr-3 h-6 w-6 text-red-500" />
            Most Visited Places
          </h2>
          <Button variant="link" className="text-primary">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mostVisitedShops.map(renderShopCard)}
        </div>
      </section>
    </div>
  );
}
