// In a real production application, you should use an environment variable
// For this example, we'll provide a placeholder value
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// New Zealand bounds for map initialization
export const NZ_BOUNDS = {
  north: -34.1,
  south: -47.5,
  east: 179.0,
  west: 166.0,
};

// New Zealand center point
export const NZ_CENTER = {
  lat: -41.0,
  lng: 174.0,
};
