
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { ServiceLocation } from '../data/serviceLocations';

interface HotspotSelectorProps {
  locations: ServiceLocation[];
  selectedLocation: ServiceLocation | null;
  onSelect: (id: string) => void;
}

const HotspotSelector: React.FC<HotspotSelectorProps> = ({ 
  locations, 
  selectedLocation, 
  onSelect 
}) => {
  return (
    <div className="min-w-[240px] sm:min-w-[280px] bg-white/95 backdrop-blur shadow-lg rounded-lg p-3">
      <h2 className="text-kiwi-black font-semibold mb-2 ml-1">Select Branch</h2>
      <Select
        value={selectedLocation?.name || ''}
        onValueChange={onSelect}
      >
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Choose a location" />
        </SelectTrigger>
        <SelectContent>
          {locations.map((location) => (
            <SelectItem key={location.name} value={location.name}>
              {location.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default HotspotSelector;
