import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Polyline, ZoomControl } from 'react-leaflet';
import { LatLng, Map as LeafletMap } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { MapEvents } from './MapEvents';
import { MapControls } from './MapControls';
import { CustomMarker } from './CustomMarker';
import { Point } from '../types';
import { setupLeafletDefaults } from '../utils/leafletSetup';
import { formatPointsForExport, copyToClipboard } from '../utils/pointsExporter';
import { searchLocation } from '../utils/geocoding';

setupLeafletDefaults();

export default function MapDrawer() {
  const [points, setPoints] = useState<Point[]>([]);
  const mapRef = useRef<LeafletMap | null>(null);

  const handleMapClick = (latlng: LatLng) => {
    setPoints([...points, [latlng.lat, latlng.lng]]);
  };

  const handleExport = () => {
    if (points.length === 0) {
      alert('Add some points to the map first!');
      return;
    }
    const output = formatPointsForExport(points);
    copyToClipboard(output);
  };

  const handleClear = () => {
    if (points.length === 0) return;
    if (window.confirm('Are you sure you want to clear all points?')) {
      setPoints([]);
    }
  };

  const handleRemovePoint = (index: number) => {
    setPoints(points.filter((_, i) => i !== index));
  };

  const handleSearch = async (query: string) => {
    const location = await searchLocation(query);
    if (location) {
      mapRef.current?.setView(location, 13);
    } else {
      alert('Location not found. Try a different search term.');
    }
  };

  return (
    <div className="h-screen flex">
      <MapControls
        points={points}
        onExport={handleExport}
        onClear={handleClear}
        onRemovePoint={handleRemovePoint}
        onSearch={handleSearch}
      />
      
      <div className="flex-1">
        <MapContainer
          center={[42.1882265, 27.490737]}
          zoom={13}
          className="h-full w-full"
          ref={mapRef}
        >
          <ZoomControl position="bottomright" />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="grayscale"
          />
          <MapEvents onMapClick={handleMapClick} />
          
          {points.map((point, index) => (
            <CustomMarker key={index} position={point} />
          ))}
          
          {points.length > 1 && (
            <Polyline 
              positions={points} 
              color="red" 
              weight={2.5} 
              opacity={0.8}
              dashArray="5, 10" 
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
}