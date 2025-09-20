
'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { busRoutes, trainRoutes } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Bus, Train, Car, ArrowUpRight, Bike, MapPin, Milestone, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";

const getStatusVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case 'on time':
      return 'default';
    case 'delayed':
      return 'destructive';
    case 'arrived':
      return 'secondary';
    default:
      return 'outline';
  }
};

const BookingCard = ({
  icon,
  title,
  description,
  baseFare,
  perKm,
}: {
  icon: React.ReactNode,
  title: string,
  description: string,
  baseFare: number,
  perKm: number,
}) => {
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState(0);
  const [fare, setFare] = useState(0);

  useEffect(() => {
    if (destination) {
      // Simulate distance calculation
      const randomDistance = Math.random() * 25 + 2; // 2km to 27km
      setDistance(parseFloat(randomDistance.toFixed(1)));
    } else {
      setDistance(0);
    }
  }, [destination]);

  useEffect(() => {
    if (distance > 0) {
      // Simulate fare calculation
      setFare(baseFare + distance * perKm);
    } else {
      setFare(0);
    }
  }, [distance, baseFare, perKm]);

  return (
    <Card className="flex flex-col bg-background/80 backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
        <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4"/> Your Location</label>
            <Input readOnly value="Using your current location" className="bg-muted"/>
        </div>
        <div className="space-y-2">
            <label htmlFor={`destination-${title}`} className="text-sm font-medium flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4"/> Destination</label>
            <Input 
                id={`destination-${title}`} 
                placeholder="Where do you want to go?" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
        </div>
        
        {distance > 0 && (
            <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-2"><Milestone className="h-4 w-4" /> Distance</p>
                    <p className="text-lg font-bold">{distance} km</p>
                </div>
                 <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-2"><DollarSign className="h-4 w-4" /> Est. Fare</p>
                    <p className="text-lg font-bold">₹{fare.toFixed(0)}</p>
                </div>
            </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" size="lg" disabled={!destination}>
             <Link href="https://book.olacabs.com/" target="_blank" rel="noopener noreferrer">
                Book Your Ride Now
                <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function TransportPage() {
    const bgImage = PlaceHolderImages.find(p => p.id === 'transport-bg');

  return (
    <div className="relative min-h-full">
        {bgImage && (
            <Image
                src={bgImage.imageUrl}
                alt={bgImage.description}
                fill
                className="object-cover -z-10"
                data-ai-hint={bgImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50 -z-10" />

        <div className="container mx-auto">
        <Card className="border-none shadow-none mb-8 bg-transparent">
            <CardHeader className="text-center text-white">
            <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit mb-4 backdrop-blur-sm">
                <Bus className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-headline font-bold drop-shadow-lg">Transport Information</CardTitle>
            <CardDescription className="text-lg text-white/90 drop-shadow-md">
                Find real-time information for buses, trains, and cabs to navigate Jharkhand.
            </CardDescription>
            </CardHeader>
        </Card>

        <Tabs defaultValue="booking" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-background/60 backdrop-blur-md">
            <TabsTrigger value="buses"><Bus className="mr-2"/> Buses</TabsTrigger>
            <TabsTrigger value="trains"><Train className="mr-2"/> Trains</TabsTrigger>
            <TabsTrigger value="booking"><Car className="mr-2"/> Cab & Bike Booking</TabsTrigger>
            </TabsList>
            <TabsContent value="buses">
            <Card className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                <CardTitle>Bus Schedules</CardTitle>
                <CardDescription>Live tracking of inter-city and local bus services.</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Route</TableHead>
                        <TableHead>Departure</TableHead>
                        <TableHead>Arrival</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {busRoutes.map((route) => (
                        <TableRow key={route.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{route.route}</TableCell>
                        <TableCell>{route.departure}</TableCell>
                        <TableCell>{route.arrival}</TableCell>
                        <TableCell className="text-right">
                            <Badge variant={getStatusVariant(route.status) as any}>{route.status}</Badge>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
            </TabsContent>
            <TabsContent value="trains">
            <Card className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                <CardTitle>Train Schedules</CardTitle>
                <CardDescription>Live tracking of trains connecting Jharkhand.</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Train Name (Number)</TableHead>
                        <TableHead>Route</TableHead>
                        <TableHead>Scheduled Arrival</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {trainRoutes.map((route) => (
                        <TableRow key={route.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{route.trainName} ({route.trainNumber})</TableCell>
                        <TableCell>{route.route}</TableCell>
                        <TableCell>{route.scheduledArrival}</TableCell>
                        <TableCell className="text-right">
                            <Badge variant={getStatusVariant(route.status) as any}>{route.status}</Badge>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
            </TabsContent>
            <TabsContent value="booking">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <BookingCard 
                    icon={<Car className="h-6 w-6 text-primary" />}
                    title="Book a Cab"
                    description="Get a comfortable ride to your destination instantly."
                    baseFare={50}
                    perKm={15}
                />
                <BookingCard 
                    icon={<Bike className="h-6 w-6 text-primary" />}
                    title="Book a Bike"
                    description="Zip through the city traffic with a quick bike ride."
                    baseFare={25}
                    perKm={7}
                />
            </div>
            </TabsContent>
        </Tabs>
        </div>
    </div>
  );
}

