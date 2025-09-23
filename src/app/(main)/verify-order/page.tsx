import { Suspense } from 'react';
import VerifyOrderClient from './VerifyOrderClient';

export default function VerifyOrderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOrderClient />
    </Suspense>
  );
}
