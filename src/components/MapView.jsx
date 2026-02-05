import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

/* ⭐ FIX MARKER ICON */
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/* ⭐ AUTO ZOOM WHEN ROW SELECTED */
function MapController({ selected }) {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();

      if (selected) {
        map.flyTo([selected.latitude, selected.longitude], 12);
      }
    }, 200);
  }, [selected, map]);

  return null;
}

function MapView({ data, selected, onSelect }) {
  return (
    <MapContainer
      center={[19.076, 72.8777]} // Default Mumbai
      zoom={7}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapController selected={selected} />

      {data.slice(0, 800).map((item) => (
        <Marker
          key={item.id}
          position={[item.latitude, item.longitude]}
          eventHandlers={{
            click: () => onSelect(item),
          }}
        >
          <Popup>
            <b>{item.projectName}</b>
            <br />
            Status: {item.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
