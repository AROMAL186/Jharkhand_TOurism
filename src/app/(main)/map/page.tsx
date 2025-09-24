
"use client";

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { destinations } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

type Destination = typeof destinations[0];

export default function DestinationsPage() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (destinations && destinations.length > 0) {
      setSelectedDestination(destinations[0]);
    }
  }, []);

  const handleDestinationClick = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const handleStreetViewClick = () => {
    if (selectedDestination) {
        const { lat, lng } = selectedDestination.position;
        router.push(`/street-view?lat=${lat}&lng=${lng}`);
    }
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold tracking-tight font-headline">Explore Destinations</h1>
        </div>
        <div className="flex h-[600px] w-full items-center justify-center rounded-lg bg-muted">
            <p className="text-destructive-foreground bg-destructive p-4 rounded-md">
              Google Maps API key is not configured. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment.
            </p>
        </div>
      </div>
    );
  }

  const mapCenter = useMemo(() => {
    if (selectedDestination) {
      return selectedDestination.position;
    }
    return { lat: 23.6345, lng: 85.3551 }; 
  }, [selectedDestination]);

  return (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold tracking-tight font-headline">Explore Destinations</h1>
            <p className="text-muted-foreground mt-2">
            Discover the stunning beauty of Jharkhand through our interactive map.
            </p>
        </div>
        <Card>
            <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 h-[600px]">
                    <ScrollArea className="md:col-span-1 h-full">
                        <div className="p-4 space-y-4">
                            {destinations.map(dest => (
                                <div 
                                    key={dest.id} 
                                    className={`p-4 rounded-lg cursor-pointer border ${selectedDestination?.id === dest.id ? 'bg-accent border-primary' : 'bg-card'}`} 
                                    onClick={() => handleDestinationClick(dest)}
                                >
                                    <h3 className="font-semibold">{dest.name}</h3>
                                    <p className="text-sm text-muted-foreground">{dest.description}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="md:col-span-2 h-full rounded-r-lg overflow-hidden relative">
                         <APIProvider apiKey={apiKey}>
                            <Map
                                center={mapCenter}
                                zoom={selectedDestination ? 12 : 7}
                                mapId="jharkhand_explorer_map_main"
                                gestureHandling={'greedy'}
                                disableDefaultUI={true}
                                style={{width: '100%', height: '100%'}}
                            >
                                {destinations.map((dest) => (
                                    <AdvancedMarker
                                        key={dest.id}
                                        position={dest.position}
                                        onClick={() => handleDestinationClick(dest)}
                                    />
                                ))}

                                {selectedDestination && (
                                    <InfoWindow
                                        position={selectedDestination.position}
                                        onCloseClick={() => setSelectedDestination(null)}
                                    >
                                        <div>
                                            <h4 className="font-bold text-base text-gray-800">{selectedDestination.name}</h4>
                                            <p className="text-sm text-gray-600">{selectedDestination.description}</p>
                                        </div>
                                    </InfoWindow>
                                )}
                            </Map>
                        </APIProvider>
                        <Button 
                            className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={handleStreetViewClick}
                            disabled={!selectedDestination}
                        >
                            <Eye className="mr-2 h-4 w-4" /> Street View
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
