import { Suspense } from 'react';
import RouteOptimizerClient from './RouteOptimizerClient';

export default function RouteOptimizerPage() {
  return (
    <div className="container mx-auto p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <RouteOptimizerClient />
      </Suspense>
    </div>
  );
}
