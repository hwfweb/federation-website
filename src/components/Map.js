// src/components/Map.js
import React, { useEffect, useRef } from 'react';

// Map component to display Google Map
const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 51.5636, lng: -0.3692 }, // Coordinates of the location
      zoom: 10,
    });

    // Add a marker to the map
    new window.google.maps.Marker({
      position: { lat: 51.5636, lng: -0.3692 }, // Coordinates of the location
      map,
      title: 'Federation Location',
    });
  }, []);

  return (
    <div className="map-container" ref={mapRef} style={{ height: '400px', width: '100%' }}>
      {/* Map will be rendered here */}
    </div>
  );
};

export default Map;
