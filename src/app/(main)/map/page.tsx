import InteractiveMap from '@/components/interactive-map';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Map } from 'lucide-react';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function MapPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-5rem-4rem)]">
       <Card className="border-none shadow-none mb-6">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
             <Map className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline font-bold">Interactive Tourist Map</CardTitle>
          <CardDescription className="text-lg">
            Explore Jharkhand's attractions. Click on a marker to learn more.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="flex-grow rounded-lg overflow-hidden">
        <Suspense fallback={<Skeleton className="h-full w-full" />}>
          <InteractiveMap />
        </Suspense>
      </div>
    </div>
  );
}
