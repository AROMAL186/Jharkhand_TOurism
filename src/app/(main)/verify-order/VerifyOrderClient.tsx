'use client';

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, XCircle } from 'lucide-react';

// Helper function to safely parse QR code data
function parseQrCodeData(data: string) {
  try {
    // Try to parse as JSON
    const jsonData = JSON.parse(data);
    return { data: jsonData, error: null, isJson: true };
  } catch (e) {
    // If parsing fails, treat as a raw string
    return { data: { rawData: data }, error: null, isJson: false };
  }
}

export default function VerifyOrderClient() {
  const searchParams = useSearchParams();
  const qrCodeData = searchParams.get('data');

  let verificationResult: any = null;
  let error: string | null = null;

  if (qrCodeData) {
    const { data, error: parseError, isJson } = parseQrCodeData(qrCodeData);
    if (parseError) {
      error = 'Invalid QR code data.';
    } else {
      verificationResult = { ...data, isJson };
    }
  } else {
    error = 'No QR code data found.';
  }

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Verify Scanned QR Code</CardTitle>
          <CardDescription>Details from the scanned QR code are shown below.</CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : verificationResult ? (
            <Alert variant="default" className="bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-800 font-bold">QR Code Verified</AlertTitle>
                <AlertDescription className="text-green-700">
                  {verificationResult.isJson ? (
                    <div className="space-y-2 mt-2">
                        <p><strong>Item:</strong> {verificationResult.itemName}</p>
                        <p><strong>Price:</strong> {verificationResult.price}</p>
                        <p><strong>Payment Method:</strong> <span className="font-semibold">{verificationResult.paymentMethod === 'pay-now' ? 'Paid Online' : 'Pay at Shop'}</span></p>
                    </div>
                  ) : (
                    <div className="mt-2">
                      <p><strong>Raw Data:</strong> {verificationResult.rawData}</p>
                    </div>
                  )}
              </AlertDescription>
            </Alert>
          ) : (
             <Alert>
                <AlertTitle>No Data Found</AlertTitle>
                <AlertDescription>Scan a valid QR code to see the details here.</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
