// // import estadosGeoJSON from "./uf.json";

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { LatLngExpression } from "leaflet";
import { GeoJSON, TileLayer } from "react-leaflet";

const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), {
  ssr: false,
});

import data from "./brazil_geo.json";
import { toast } from "sonner";

export default function Map() {
  const [coord, setCoord] = useState<LatLngExpression>([-14.235, -51.925]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // setCoord([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      {loading && (
        <div className="w-screen h-screen flex justify-center items-center">
          <h2> Carregando mapa... </h2>
        </div>
      )}

      <MapContainer
        className="w-screen h-screen"
        whenReady={() => setLoading(false)}
        center={coord}
        zoom={4.5}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <GeoJSON
          data={data as any}
          onEachFeature={(_feature, layer) => {
            layer.on({
              click: (event) => {
                const ufName = event.target.feature.properties.name;

                toast(`Você clicou no estado: ${ufName}`);
              },
            });
          }}
        />
      </MapContainer>
    </>
  );
}
