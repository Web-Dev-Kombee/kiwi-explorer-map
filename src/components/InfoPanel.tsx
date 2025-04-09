
import React from 'react';
import type { ServiceLocation } from '../data/serviceLocations';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Phone, Mail, X, Package } from 'lucide-react';

interface InfoPanelProps {
  location: ServiceLocation;
  onClose: () => void;
  isMobile: boolean;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ location, onClose, isMobile }) => {
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`;

  return (
    <div className={`
      bg-white shadow-lg rounded-lg p-5 max-w-md 
      ${isMobile ? 'fixed bottom-0 left-0 right-0 z-50 animate-slide-in-right rounded-b-none max-h-[60vh] overflow-y-auto' : 'absolute top-4 right-4 z-10 max-w-sm'}
    `}>
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-xl font-bold text-kiwi-black">{location.name}</h2>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close panel"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-kiwi-green mr-2 mt-0.5 flex-shrink-0" />
          <span className="text-gray-700">{location.address}</span>
        </div>
        
        {location.poBox && (
          <div className="flex items-start">
            <Package className="h-5 w-5 text-kiwi-green mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{location.poBox}</span>
          </div>
        )}
        
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-kiwi-blue mr-2 flex-shrink-0" />
          <a 
            href={`tel:${location.phone}`} 
            className="text-kiwi-blue hover:underline"
          >
            {location.phone}
          </a>
        </div>
        
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-kiwi-teal mr-2 flex-shrink-0" />
          <a 
            href={`mailto:${location.email}`} 
            className="text-kiwi-teal hover:underline truncate"
          >
            {location.email}
          </a>
        </div>
      </div>
      
      <div className="mt-5">
        <Button 
          className="w-full bg-kiwi-blue hover:bg-kiwi-blue/90 text-white flex items-center justify-center gap-2"
          onClick={() => window.open(googleMapsLink, '_blank')}
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default InfoPanel;
