import React from 'react';
import { Marker } from 'react-leaflet';
import { Icon, DivIcon } from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import ReactDOMServer from 'react-dom/server';

export function createCustomIcon() {
  const iconHtml = ReactDOMServer.renderToString(
    <FontAwesomeIcon icon={faMapPin} className="text-black text-2xl" />
  );

  return new DivIcon({
    html: iconHtml,
    className: 'custom-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
}

interface CustomMarkerProps {
  position: [number, number];
}

export function CustomMarker({ position }: CustomMarkerProps) {
  return <Marker position={position} icon={createCustomIcon()} />;
}