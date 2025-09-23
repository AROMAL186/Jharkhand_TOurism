'use client';

import { useSearchParams } from 'next/navigation';
import { marketplaceItems } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { QrCode, CreditCard, Store } from 'lucide-react';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get('item');
  const item = marketplaceItems.find(i => i.id.toString() === itemId);
  const [paymentMethod, setPaymentMethod] = useState('pay-at-shop');
  const [qrCode, setQrCode] = useState('');

  if (!item) {
    return <div>Item not found</div>;
  }

  const img = PlaceHolderImages.find(p => p.id === item.imageId);

  const handleGenerateQrCode = () => {
    // In a real application, you would call a backend service to generate a QR code.
    // For this example, we'll just simulate it.
    const orderDetails = {
      itemId: item.id,
      itemName: item.name,
      price: item.price,
      paymentMethod,
    };
    const qrCodeData = JSON.stringify(orderDetails);
    setQrCode(qrCodeData);
  };

  return (
    <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card>
                 <CardHeader>
                    <CardTitle className="text-2xl font-bold">Complete Your Order</CardTitle>
                    <CardDescription>Select your payment method and generate a QR code to finalize your purchase.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                        {img && (
                            <div className="relative h-24 w-24 rounded-md overflow-hidden">
                                <Image
                                    src={img.imageUrl}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <div>
                            <h3 className="font-bold text-lg">{item.name}</h3>
                            <p className="text-muted-foreground">by {item.artisan}</p>
                            <p className="text-primary font-semibold text-xl">{item.price}</p>
                        </div>
                    </div>

                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                        <Label htmlFor="pay-at-shop">
                            <Card className={`p-4 cursor-pointer ${paymentMethod === 'pay-at-shop' ? 'border-primary' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <Store className="h-6 w-6 text-primary" />
                                    <div>
                                        <h4 className="font-semibold">Pay at Shop</h4>
                                        <p className="text-sm text-muted-foreground">Generate a QR code and pay directly at the artisan's shop.</p>
                                    </div>
                                    <RadioGroupItem value="pay-at-shop" id="pay-at-shop" className="sr-only" />
                                </div>
                            </Card>
                        </Label>
                        <Label htmlFor="pay-now">
                             <Card className={`p-4 cursor-pointer ${paymentMethod === 'pay-now' ? 'border-primary' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <CreditCard className="h-6 w-6 text-primary" />
                                    <div>
                                        <h4 className="font-semibold">Pay Now</h4>
                                        <p className="text-sm text-muted-foreground">Complete your payment online and receive a confirmation QR code.</p>
                                    </div>
                                    <RadioGroupItem value="pay-now" id="pay-now" className="sr-only" />
                                </div>
                            </Card>
                        </Label>
                    </RadioGroup>
                </CardContent>
                 <CardFooter>
                    <Button onClick={handleGenerateQrCode} className="w-full" size="lg">
                        <QrCode className="mr-2 h-5 w-5" /> Generate QR Code
                    </Button>
                </CardFooter>
            </Card>

            <div className="flex flex-col items-center justify-center bg-card rounded-lg border p-8 h-full">
                {qrCode ? (
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">Here is your QR Code</h3>
                         <div className="p-4 bg-white rounded-lg">
                           {/* In a real app, you'd use a library like qrcode.react to render a real QR code */}
                           <pre className="p-4 bg-gray-100 rounded-md text-sm">{qrCode}</pre>
                        </div>
                        <p className="mt-4 text-muted-foreground">Scan this at the shop to verify your order.</p>
                    </div>
                ) : (
                     <div className="text-center text-muted-foreground">
                        <QrCode className="h-24 w-24 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-foreground">Your QR code will appear here</h3>
                        <p>Complete the steps to generate your unique order code.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}
