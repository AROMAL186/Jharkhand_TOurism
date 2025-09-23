import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const VerifyOrderClient = dynamic(() => import('./VerifyOrderClient'), { ssr: false });

export default function VerifyOrderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOrderClient />
    </Suspense>
  );
}
