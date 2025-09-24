
'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { AlertTriangle } from 'lucide-react';

interface StreetViewPanoramaProps {
  locationName?: string;
  lat?: number;
  lng?: number;
  apiKey: string;
}

export function StreetViewPanorama({ locationName, lat, lng, apiKey }: StreetViewPanoramaProps) {
  const panoramaRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndRenderPanorama = async (latitude: number, longitude: number) => {
      const loader = new Loader({ apiKey, version: 'weekly' });
      try {
        const google = await loader.load();
        const panorama = new google.maps.StreetViewPanorama(
          panoramaRef.current as HTMLDivElement,
          {
            position: { lat: latitude, lng: longitude },
            pov: { heading: 210, pitch: 10 },
            zoom: 1,
            addressControl: false,
            showRoadLabels: false,
          }
        );

        const streetViewService = new google.maps.StreetViewService();
        streetViewService.getPanorama({ location: { lat: latitude, lng: longitude }, radius: 50 }, (data, stat) => {
          if (stat === 'OK') {
            panorama.setPano(data!.location!.pano);
            panorama.setVisible(true);
            setStatus('success');
          } else {
            setError('Street View imagery not found at this location.');
            setStatus('error');
          }
        });
      } catch (e) {
        setError('Failed to load Google Maps API.');
        setStatus('error');
      }
    };

    if (lat && lng) {
      fetchAndRenderPanorama(lat, lng);
    } else if (locationName) {
      fetch(`/api/geocode?address=${encodeURIComponent(locationName)}`)
        .then(res => res.json())
        .then(data => {
          if (data.location) {
            fetchAndRenderPanorama(data.location.lat, data.location.lng);
          } else {
            setError(data.error || 'Failed to find location.');
            setStatus('error');
          }
        })
        .catch(err => {
          setError('Failed to fetch location data.');
          setStatus('error');
        });
    } else {
      setError('No location provided.');
      setStatus('error');
    }
  }, [locationName, lat, lng, apiKey]);

  return (
    <div className="w-full h-full relative">
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <p>Loading Street View...</p>
        </div>
      )}
      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
            <AlertTriangle className="w-16 h-16 text-destructive mb-4" />
            <p className='text-lg font-semibold'>{error}</p>
        </div>
      )}
      <div ref={panoramaRef} className="w-full h-full" />
    </div>
  );
}
