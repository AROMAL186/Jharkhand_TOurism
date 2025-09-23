'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, XCircle } from 'lucide-react';

export default function VerifyOrderPage() {
  const searchParams = useSearchParams();
  const qrCodeData = searchParams.get('data');

  let orderDetails: any = null;
  let error: string | null = null;

  if (qrCodeData) {
    try {
      orderDetails = JSON.parse(qrCodeData);
    } catch (e) {
      error = 'Invalid QR code data.';
    }
  } else {
    error = 'No QR code data found.';
  }

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Verify Customer Order</CardTitle>
          <CardDescription>Details from the scanned QR code are shown below.</CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : orderDetails ? (
            <Alert variant="default" className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800 font-bold">Order Verified</AlertTitle>
                <AlertDescription className="text-green-700">
                    <div className="space-y-2 mt-2">
                        <p><strong>Item:</strong> {orderDetails.itemName}</p>
                        <p><strong>Price:</strong> {orderDetails.price}</p>
                        <p><strong>Payment Method:</strong> <span className="font-semibold">{orderDetails.paymentMethod === 'pay-now' ? 'Paid Online' : 'Pay at Shop'}</span></p>
                    </div>
              </AlertDescription>
            </Alert>
          ) : (
             <Alert>
                <AlertTitle>No Order Data</AlertTitle>
                <AlertDescription>Scan a valid order QR code to see the details here.</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
