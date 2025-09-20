
import { RouteOptimizerForm } from '@/components/route-optimizer-form';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function RouteOptimizerPage() {
  return (
    <div className="container mx-auto max-w-4xl">
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
             <Map className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Route Optimizer</CardTitle>
          <CardDescription className="text-lg">
            Find the most efficient path between your chosen destinations in Jharkhand.
          </CardDescription>
        </CardHeader>
      </Card>
      <RouteOptimizerForm />
    </div>
  );
}
