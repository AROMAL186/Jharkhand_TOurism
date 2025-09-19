"use client";

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { useRouter } from 'next/navigation';
import { topDestinations } from '@/lib/data';

type Location = typeof topDestinations[0];

export default function InteractiveMap() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const router = useRouter();

    if (!apiKey) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-muted rounded-lg">
                <p className="text-destructive-foreground bg-destructive p-4 rounded-md">
                    Google Maps API key is not configured. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment.
                </p>
            </div>
        );
    }
    
    // Jharkhand's approximate center
    const position = { lat: 23.6345, lng: 85.3847 };

    const handleMarkerClick = (slug: string) => {
        router.push(`/destinations/${slug}`);
    }

    return (
        <APIProvider apiKey={apiKey}>
            <Map
                defaultCenter={position}
                defaultZoom={8}
                mapId="jharkhand_explorer_map"
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                {topDestinations.map((loc) => (
                    <AdvancedMarker
                        key={loc.name}
                        position={loc.coordinates}
                        onClick={() => handleMarkerClick(loc.slug)}
                    />
                ))}
            </Map>
        </APIProvider>
    );
}
