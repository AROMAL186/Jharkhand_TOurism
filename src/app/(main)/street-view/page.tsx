
// src/app/(main)/street-view/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, AlertTriangle, Loader2 } from 'lucide-react';

type StreetViewStatus = 'loading' | 'available' | 'unavailable' | 'error';

export default function StreetViewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const [status, setStatus] = useState<StreetViewStatus>('loading');
  const [error, setError] = useState<string | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const location = lat && lng ? `${lat},${lng}` : null;

  useEffect(() => {
    if (!location) {
      setStatus('unavailable');
      return;
    }

    if (!apiKey) {
        setStatus('error');
        setError('Google Maps API key is not configured.')
        return;
    }

    const checkStreetView = async () => {
      try {
        const response = await fetch(`/api/streetview-check?lat=${lat}&lng=${lng}`);
        const data = await response.json();

        if (response.ok && data.hasImage) {
          setStatus('available');
        } else {
          setStatus('unavailable');
          if(data.status) {
            console.warn(`Street View not available: ${data.status}`);
          }
        }
      } catch (err) {
        setStatus('error');
        setError('Failed to check for Street View availability.');
        console.error(err);
      }
    };

    checkStreetView();
  }, [location, lat, lng, apiKey]);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-muted">
                <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                <h2 className="text-2xl font-bold text-center mb-2">Checking for Street View...</h2>
                <p className="text-muted-foreground text-center">Please wait a moment.</p>
            </div>
        );
      case 'available':
        return (
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/streetview?key=${apiKey}&location=${location}&heading=210&pitch=10&fov=90`}>
          </iframe>
        );
      case 'unavailable':
        return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-muted">
                <AlertTriangle className="w-16 h-16 text-amber-500 mb-4" />
                <h2 className="text-2xl font-bold text-center mb-2">Street View Not Available</h2>
                <p className="text-muted-foreground text-center max-w-md">
                    Sorry, we don't have Street View imagery for this specific location. Please go back to the map and try another spot.
                </p>
            </div>
        );
       case 'error':
        return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-muted">
                <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
                <h2 className="text-2xl font-bold text-center mb-2">An Error Occurred</h2>
                <p className="text-destructive-foreground bg-destructive p-3 rounded-md text-center max-w-lg">
                    {error || 'Something went wrong. Please try again later.'}
                </p>
            </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-4">
        <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => router.back()}
        >
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
        {location && status !== 'loading' && (
            <div className="bg-primary/90 text-primary-foreground rounded-md px-3 py-2 flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4"/>
                <span>{location}</span>
            </div>
        )}
      </div>
      {renderContent()}
    </div>
  );
}
