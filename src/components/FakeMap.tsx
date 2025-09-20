import type React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

interface FakeMapProps {
  center?: LatLngExpression;
  zoom?: number;
  height?: string;
  width?: string;
}

const FakeMap: React.FC<FakeMapProps> = ({
  center = [6.5244, 3.3792],
  zoom = 13,
  height = "400px",
  width = "100%",
}) => {
  const data = [
    { num: "323k", desc: "Delivered Items" },
    { num: "210k", desc: "Reviews" },
  ];

  const dataTwo = [
    { num: "1247", desc: "Happy Clients" },
    { num: "64127", desc: "Total Stores" },
  ];

  return (
    <div className="hidden md:block relative" style={{ height, width }}>
      {/* Map */}
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        className="z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        />
        <Marker position={center}>
          <Popup>Locate Us @ Lagos</Popup>
        </Marker>
      </MapContainer>

      {/* Overlay spans */}
      <div className="absolute top-6 left-6 flex flex-col gap-4 z-20">
        {data.map((item, i) => (
          <span
            key={i}
            className="bg-white/80 backdrop-blur-md border-2 border-blue-500 rounded-lg p-4 transform -rotate-3 shadow-lg"
          >
            <h2 className="font-bold text-2xl text-blue-600">{item.num}</h2>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </span>
        ))}
      </div>

      <div className="absolute bottom-6 right-6 flex flex-col gap-4 z-20">
        {dataTwo.map((item, i) => (
          <span
            key={i}
            className="bg-white/80 backdrop-blur-md border-2 border-blue-500 rounded-lg p-4 transform rotate-3 shadow-lg"
          >
            <h2 className="font-bold text-2xl text-blue-600">{item.num}</h2>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FakeMap;
