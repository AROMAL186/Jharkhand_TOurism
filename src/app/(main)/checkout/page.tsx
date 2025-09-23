import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const CheckoutClient = dynamic(() => import('./CheckoutClient'), { ssr: false });

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutClient />
    </Suspense>
  );
}
