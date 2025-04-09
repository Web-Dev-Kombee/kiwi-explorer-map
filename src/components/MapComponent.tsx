
import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY, NZ_BOUNDS, NZ_CENTER } from '../config/env';
import type { ServiceLocation } from '../data/serviceLocations';
import { useToast } from '@/hooks/use-toast';

// Map container style
const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

// Map options
const mapOptions = {
  restriction: {
    latLngBounds: NZ_BOUNDS,
    strictBounds: false,
  },
  disableDefaultUI: false,
  zoomControl: false,
  mapTypeControl: false,
  StreetViewPanorama: true,
  fullscreenControl: false,
};

interface MapComponentProps {
  locations: ServiceLocation[];
  selectedLocation: ServiceLocation | null;
  setSelectedLocation: (location: ServiceLocation | null) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  locations, 
  selectedLocation, 
  setSelectedLocation 
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { toast } = useToast();

  // Handle map load
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  // Handle map unmount
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Handle marker click
  const handleMarkerClick = (location: ServiceLocation) => {
    setSelectedLocation(location);
  };

  // Pan to selected location when it changes
  useEffect(() => {
    if (map && selectedLocation && selectedLocation.lat && selectedLocation.lng) {
      map.panTo({ lat: selectedLocation.lat, lng: selectedLocation.lng });
      map.setZoom(14);
    }
  }, [map, selectedLocation]);

  // Custom marker icon
  const markerIcon = {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" viewBox="0 0 24 24" fill="none" stroke="#0D9D58" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3" fill="#0D9D58"></circle>
      </svg>
    `),
    scaledSize: { width: 24, height: 36 } as google.maps.Size,
  };

  // Selected marker icon (highlighted)
  const selectedMarkerIcon = {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3" fill="#1E88E5"></circle>
      </svg>
    `),
    scaledSize: { width: 32, height: 48 } as google.maps.Size,
  };

  const handleLoadError = () => {
    toast({
      title: "Error loading Google Maps",
      description: "Please check your API key and try again.",
      variant: "destructive"
    });
  };

  return (
    <div className="w-full h-full relative">
      <LoadScript
        googleMapsApiKey={GOOGLE_MAPS_API_KEY}
        onError={handleLoadError}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={NZ_CENTER}
          zoom={6}
          options={mapOptions}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Render markers for each location */}
          {locations.map((location) => (
            location.lat && location.lng ? (
              <Marker
                key={location.name}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => handleMarkerClick(location)}
                icon={selectedLocation?.name === location.name ? selectedMarkerIcon : markerIcon}
                animation={selectedLocation?.name === location.name ? google.maps.Animation.BOUNCE : undefined}
              />
            ) : null
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
