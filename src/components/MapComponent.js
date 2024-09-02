import React, { useEffect, useState } from 'react';
import loadScript from 'load-script';

const MapComponent = ({ onLocationSelect }) => {
  const [map, setMap] = useState(null);
  const [features, setFeatures] = useState([]); // Store features (markers)
  const [coordinates, setCoordinates] = useState(''); // State to hold the coordinates
  const [marker, setMarker] = useState(null);
  
  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyCbb0RzFNgKvDIlJ4FMRA8FoTFXlzgPWxk&libraries=places`, // Replace YOUR_API_KEY with your actual API key
      (err) => {
        if (err) {
          console.error('Error loading Google Maps API', err);
          return;
        }
        initMap();
      }
    );
  }, []); // Empty dependency array to run once on mount

  const initMap = async () => {
    const { Map } = await window.google.maps.importLibrary('maps');
    const { AdvancedMarkerElement } = await window.google.maps.importLibrary('marker');

    const mapInstance = new Map(document.getElementById('map'), {
      center: new window.google.maps.LatLng(8.536795787419491, 76.88320871823498), // Set initial map center
      zoom: 16,
      mapId: 'DEMO_MAP_ID',
    });

    setMap(mapInstance); // Store map instance in state

    const iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
    const icons = {
      info: {
        icon: iconBase + 'info-i_maps.png',
      },
    };

    // Function to add a marker to the map
    const addMarkerToMap = (latLng, mapInstance) => {
      const iconImage = document.createElement('img');
      iconImage.src = icons['info'].icon;

      if (marker) {
        marker.setMap(null);
      }

      const newMarker = new AdvancedMarkerElement({
        map: mapInstance,
        position: latLng,
        content: iconImage,
      });

      setMarker(newMarker);
    };

    // Load existing markers from localStorage
    const savedMarkers = JSON.parse(localStorage.getItem('markers')) || [];
    savedMarkers.forEach(({ lat, lng }) => {
      const latLng = new window.google.maps.LatLng(lat, lng);
      addMarkerToMap(latLng, mapInstance); // Add marker to the map
    });

    // Function to add marker on map click
    const addMarker = (event) => {
      const latLng = event.latLng;
      const newFeature = {
        position: latLng,
        type: 'info', // Default type, can be customized
      };

      if (marker) {
        marker.setMap(null);
      }

      setFeatures((prevFeatures) => [...prevFeatures, newFeature]); // Update features state
      setCoordinates(`Latitude: ${latLng.lat()}, Longitude: ${latLng.lng()}`); // Update coordinates state

      // Call the onLocationSelect prop function to update latitude and longitude in the form
      onLocationSelect(latLng.lat(), latLng.lng());

      // Save marker to localStorage
      //saveMarker(latLng.lat(), latLng.lng());

      // Add marker to the map
      addMarkerToMap(latLng, mapInstance);
    };

    // Save marker to localStorage
    // const saveMarker = (lat, lng) => {
    //   const currentMarkers = JSON.parse(localStorage.getItem('markers')) || [];
    //   currentMarkers.push({ lat, lng });
    //   localStorage.setItem('markers', JSON.stringify(currentMarkers));
    // };

    // Listen for click events on the map
    mapInstance.addListener('click', addMarker);
  };

  // Cleanup function to avoid memory leaks
  useEffect(() => {
    return () => {
      const mapElement = document.getElementById('map');
      if (mapElement) {
        mapElement.innerHTML = '';
      }
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '500px', width: '100%' }} />
      <p>Click on the map to add markers</p>
      {coordinates && <p>{coordinates}</p>} {/* Display coordinates if available */}
    </div>
  );
};

export default MapComponent;
