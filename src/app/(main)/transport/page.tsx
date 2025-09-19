import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { busRoutes, trainRoutes } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, Train, Car, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function TransportPage() {
  return (
    <div className="container mx-auto">
      <Card className="border-none shadow-none mb-8">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Bus className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Transport Information</CardTitle>
          <CardDescription className="text-lg">
            Find real-time information for buses, trains, and cabs to navigate Jharkhand.
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="buses" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="buses"><Bus className="mr-2"/> Buses</TabsTrigger>
          <TabsTrigger value="trains"><Train className="mr-2"/> Trains</TabsTrigger>
          <TabsTrigger value="booking"><Car className="mr-2"/> Cab & Bike Booking</TabsTrigger>
        </TabsList>
        <TabsContent value="buses">
          <Card>
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
                    <TableRow key={route.id}>
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
          <Card>
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
                    <TableRow key={route.id}>
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
          <Card>
            <CardHeader>
              <CardTitle>Book a Ride</CardTitle>
              <CardDescription>Instantly book a cab or bike to your destination.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-6 text-center p-8 bg-gradient-to-br from-primary/5 to-transparent">
                <Sparkles className="h-12 w-12 text-primary animate-pulse" />
                <p className="text-xl font-medium text-foreground max-w-md">
                    "The journey of a thousand miles begins with a single click. Your ride is waiting!"
                </p>
                <Button asChild size="lg" className="group animate-pulse">
                    <Link href="https://book.olacabs.com/" target="_blank" rel="noopener noreferrer">
                        Book Your Ride Now
                        <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:rotate-45" />
                    </Link>
                </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
