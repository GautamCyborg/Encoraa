import React, { useState, useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../assets/NewFiles/Css/popupmap.css";  // Import the CSS file

const Mark1 = L.icon({
  iconUrl: '/images/icon/leaf.png',
  iconSize: [70, 70],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const GeoMap = () => {
  const [markers, setMarkers] = useState([]);
  const markerRef = useRef(null);
  const mapRef = useRef(null);
  const [initialPosition, setInitialPosition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setInitialPosition([latitude, longitude]);
        setLoading(false);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        alert("Unable to retrieve your location. Defaulting to London.");
        setInitialPosition([51.505, -0.09]);
        setLoading(false);
      }
    );
  }, []);

  const AddMarkerToClickLocation = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setMarkers([
          ...markers,
          { position: [lat, lng], icon: Mark1 },
        ]);
      },
    });
    return null;
  };

  const handleMarkerRemove = (indexToRemove) => {
    setMarkers((prevMarkers) =>
      prevMarkers.filter((_, index) => index !== indexToRemove)
    );
  };

  const clearMarkers = () => {
    setMarkers([]);
  };

  return (
    <div className="container-popupmap">
      <h1 className="title-popupmap">
        Map With Custom Markers
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        initialPosition && (
          <MapContainer
            center={initialPosition}
            zoom={13}
            className="map-container"
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
          >
            <AddMarkerToClickLocation />
            <TileLayer url="https://tile.openstreetmap.de/{z}/{x}/{y}.png" />
            {markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.position}
                icon={marker.icon}
                ref={markerRef}
              >
                <Popup>
                  <div className="popup-content">
                    <h3 className="popup-title">
                      Marker {index + 1}
                    </h3>
                    <button
                      onClick={() => handleMarkerRemove(index)}
                      className="remove-button"
                    >
                      Remove Marker
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )
      )}
      <div className="button-container">
        <button
          className="clear-button"
          onClick={clearMarkers}
        >
          Clear Map
        </button>
      </div>
    </div>
  );
};

export default GeoMap;
