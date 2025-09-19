"use client";

import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import { topDestinations } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

type Location = typeof topDestinations[0];

export default function InteractiveMap() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

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

    const selectedImage = PlaceHolderImages.find((p) => p.id === selectedLocation?.imageId);

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
                        onClick={() => setSelectedLocation(loc)}
                    />
                ))}

                {selectedLocation && (
                    <InfoWindow
                        position={selectedLocation.coordinates}
                        onCloseClick={() => setSelectedLocation(null)}
                        minWidth={200}
                    >
                        <Card className="border-none shadow-none max-w-sm">
                             {selectedImage && (
                                <div className="relative h-40 w-full">
                                    <Image
                                        src={selectedImage.imageUrl}
                                        alt={selectedLocation.name}
                                        fill
                                        className="object-cover rounded-t-lg"
                                        data-ai-hint={selectedImage.imageHint}
                                    />
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle>{selectedLocation.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">
                                    {selectedLocation.shortDescription}
                                </p>
                            </CardContent>
                        </Card>
                    </InfoWindow>
                )}
            </Map>
        </APIProvider>
    );
}
