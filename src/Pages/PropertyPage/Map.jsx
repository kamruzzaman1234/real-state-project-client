// Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ latitude, longitude, propertyName }) => {
  const position = [latitude, longitude]; // Set the position for the map

  return (
    <div className="w-full h-64">
      <MapContainer center={position} zoom={13} className="h-full w-full rounded-lg">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {propertyName}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
