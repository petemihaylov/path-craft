import { useMapEvents } from 'react-leaflet';
import { LatLng } from 'leaflet';

interface MapEventsProps {
  onMapClick: (latlng: LatLng) => void;
}

export function MapEvents({ onMapClick }: MapEventsProps) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
}