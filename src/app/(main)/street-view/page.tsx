
// src/app/(main)/street-view/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function StreetViewPage() {
  const router = useRouter();

  return (
    <div className="w-full h-screen relative">
      <Button 
        className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
      </Button>
      <iframe
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/streetview?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&location=23.3441,85.3096&heading=210&pitch=10&fov=90`}>
      </iframe>
    </div>
  );
}
