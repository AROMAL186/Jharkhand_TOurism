
'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, AlertTriangle, ExternalLink } from 'lucide-react';
import { StreetViewPanorama } from '@/components/street-view-panorama';

function StreetViewPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locationName = searchParams.get('name');

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const googleMapsUrl = locationName
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationName)}`
    : '#';

  if (!apiKey) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-muted">
        <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
        <h2 className="text-2xl font-bold text-center mb-2">API Key Not Found</h2>
        <p className="text-muted-foreground text-center max-w-md">
          The Google Maps API key is not configured. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
        </p>
        <Button onClick={() => router.back()} className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-4 left-4 z-20 flex items-center gap-4">
        <Button 
            className="bg-background/80 text-foreground hover:bg-background/100 backdrop-blur-sm"
            onClick={() => router.back()}
        >
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
        {locationName && (
            <div className="bg-background/80 backdrop-blur-sm rounded-md px-3 py-2 flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4"/>
                <span>{locationName}</span>
            </div>
        )}
        <Button
            variant="outline"
            className="bg-background/80 backdrop-blur-sm"
            asChild
        >
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                View on Google Maps <ExternalLink className="ml-2 h-4 w-4"/>
            </a>
        </Button>
      </div>

      {locationName ? (
        <StreetViewPanorama locationName={locationName} apiKey={apiKey} />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-muted">
            <AlertTriangle className="w-16 h-16 text-amber-500 mb-4" />
            <h2 className="text-2xl font-bold text-center mb-2">Location Not Provided</h2>
            <p className="text-muted-foreground text-center max-w-md">
                No location name was provided in the URL. Please go back to the map and select a location.
            </p>
        </div>
      )}
    </div>
  );
}

export default function StreetViewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StreetViewPageContent />
    </Suspense>
  );
}
