
import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import InfoPanel from './InfoPanel';
import HotspotSelector from './HotspotSelector';
import { serviceData, ServiceLocation } from '../data/serviceLocations';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const KiwiExplorer: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<ServiceLocation | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const isMobile = useIsMobile();
  
  // Get locations from the service data
  const locations = serviceData[0].locations;

  const handleLocationSelect = (name: string) => {
    const selected = locations.find(loc => loc.name === name) || null;
    setSelectedLocation(selected);
  };

  const handleCloseInfoPanel = () => {
    setSelectedLocation(null);
  };

  // Adjust menu state based on screen size
  useEffect(() => {
    if (isMobile) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Map Component */}
      <MapComponent 
        locations={locations} 
        selectedLocation={selectedLocation} 
        setSelectedLocation={setSelectedLocation} 
      />

      {/* Mobile Toggle Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-4 left-4 z-30 bg-white p-2 rounded-full shadow-md"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-kiwi-black" />
          ) : (
            <Menu className="h-6 w-6 text-kiwi-black" />
          )}
        </button>
      )}

      {/* Selector */}
      <div className={`
        absolute z-20 transition-all duration-300
        ${isMobile ? 
          (isMenuOpen ? 'top-16 left-4' : 'top-16 -left-full') : 
          'top-4 left-4'
        }
      `}>
        <HotspotSelector 
          locations={locations} 
          selectedLocation={selectedLocation} 
          onSelect={handleLocationSelect} 
        />
      </div>

      {/* Info Panel - Only show when a location is selected */}
      {selectedLocation && (
        <InfoPanel 
          location={selectedLocation} 
          onClose={handleCloseInfoPanel} 
          isMobile={isMobile} 
        />
      )}

      {/* Title Overlay */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg">
        <h1 className="text-xl sm:text-2xl font-bold text-kiwi-green">
          ServiceFoods Locations
        </h1>
      </div>
    </div>
  );
};

export default KiwiExplorer;
