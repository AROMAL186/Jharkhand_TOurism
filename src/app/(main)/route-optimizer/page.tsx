'use client';

import { RouteOptimizerForm } from '@/components/route-optimizer-form';
import { useSearchParams } from 'next/navigation';

export default function RouteOptimizerPage() {
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin') || undefined;
  const destination = searchParams.get('destination') || undefined;
  const name = searchParams.get('name') || undefined;

  return (
    <div className="container mx-auto max-w-6xl py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Route Optimizer</h1>
        <p className="mt-2 text-lg text-muted-foreground">Plan the most efficient route for your Jharkhand adventure.</p>
      </div>
      <RouteOptimizerForm origin={origin} destination={destination} name={name} />
    </div>
  );
}
