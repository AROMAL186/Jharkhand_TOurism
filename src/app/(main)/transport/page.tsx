import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { busRoutes, trainRoutes } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, Train } from "lucide-react";

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
            Find real-time information for buses and trains to navigate Jharkhand.
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="buses" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buses"><Bus className="mr-2"/> Buses</TabsTrigger>
          <TabsTrigger value="trains"><Train className="mr-2"/> Trains</TabsTrigger>
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
      </Tabs>
    </div>
  );
}
