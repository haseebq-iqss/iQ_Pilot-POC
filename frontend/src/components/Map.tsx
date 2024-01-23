import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
// import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect, useState } from "react";

type MapTypes = {
  width?: string;
  height?: string;
};

const MapComponent = ({ width = "100%", height = "500px" }: MapTypes) => {
  const [position, setPosition] = useState<any>("");

  function MapController() {
    //@ts-ignore
    const map = useMapEvents({
      //   click() {
      //     map.locate({ watch: true, enableHighAccuracy:true});
      //   },
      //   locationfound(e: any) {
      //     setPosition(e.latlng);
      //     map.flyTo(e.latlng, 17.5);
      //   },
    });
    return null;
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos: any) => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
      console.log("Permission granted");
    });

    // MAKE AN ERROR ALERT IF THE PERMISSION WAS REJECTED!

    // ASK FOR THE LOCATION PERMISSION FIRST !

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        console.log(pos);
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (error) => {
        console.error("Error getting location:", error.message);
      },
      {
        enableHighAccuracy: true,
        // timeout: 5000,
        maximumAge: 0,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={{ position: "relative", height, width, overflow: "hidden" }}>
      {/* <button onClick={() => setPosition([34.0836, 74.7973])}>
        Click to change LOC
      </button> */}
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[34.0836, 74.7973]}
        zoom={10}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapController />
        <Marker position={position ? position : [34.0836, 74.7973]} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
