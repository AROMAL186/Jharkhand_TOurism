
'use client';
import { useCart } from '@/hooks/use-cart';
import { QRCode } from '@/components/qr-code';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function QRCodePage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const handleDone = () => {
    clearCart();
    router.push('/');
  };

  const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace(/[^0-9.-]+/g,"")) * item.quantity, 0);

  const cartDetails = cart.map(item => ({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
  }));

  const orderDetails = {
    items: cartDetails,
    total: total.toFixed(2),
  };

  const qrCodeValue = JSON.stringify(orderDetails);

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Scan QR Code to Purchase</h1>
      <QRCode value={qrCodeValue} />
      <p className="my-4">Show this QR code at the shop to complete your purchase.</p>
      <Button onClick={handleDone}>Done</Button>
    </div>
  );
}
