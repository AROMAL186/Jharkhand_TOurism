'use client';

import { RouteOptimizerForm } from '@/components/route-optimizer-form';
import { useSearchParams } from 'next/navigation';

export default function RouteOptimizerClient() {
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin') || undefined;
  const destination = searchParams.get('destination') || undefined;
  const name = searchParams.get('name') || undefined;

  return <RouteOptimizerForm origin={origin} destination={destination} name={name} />;
}
