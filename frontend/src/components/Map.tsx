import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
// import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useContext, useEffect, useState } from "react";
import AllEmployeesContext from "../context/AllEmployeesContext";
import RoutingMachine from "./RoutingMachine";
import { Icon } from "leaflet";
import { io } from "socket.io-client";
import UserDataContext from "../context/UserDataContext";

type MapTypes = {
  width?: string;
  height?: string;
  markersArray?: [any];
  routingEnabled?: boolean;
  driversLocation?: boolean;
};

// const socket = io("http://localhost:5000");
const socket = io("https://iq-back-cevq.onrender.com");

const MapComponent = ({
  width = "100%",
  height = "500px",
  markersArray,
  routingEnabled = false,
  driversLocation = false,
}: MapTypes) => {
  const [driversPosition, setDriversPosition] = useState<any>();

  const { allEmps, setAllEmps } = useContext(AllEmployeesContext);
  const { userData } = useContext(UserDataContext);

  const [liveDrivers, setLiveDrivers] = useState<any>([]);

  // Transmit driversPosition for location
  // if (userData?.role == "driver") {
  // socket.emit("driver-location", driversPosition);
  // }

  const dumDat = [34.0078555, 74.8037114];

  const officeLoc = [34.07872, 74.8158976];

  useEffect(() => {
    socket.on("driver-location", (data) => {
      console.log("------->  ", JSON.parse(data));
      // console.log("DD ----> ", dumDat)
      if (data !== null) {
        setLiveDrivers(JSON.parse(data));
      }
    });
  }, [socket]);

  const sendLocation = () => {
    socket.emit("driver-location", driversPosition);
  };

  useEffect(() => {
    if (userData?.role == "driver") {
      sendLocation();
    }
  }, [driversPosition]);

  const cabIcon = new Icon({
    iconUrl: "/cab-icon.png",
    iconSize: [40, 40], // specify the size of your icon
  });

  const empIcon = new Icon({
    iconUrl: "/icon-passenger.png",
    iconSize: [40, 40], // specify the size of your icon
  });

  const officeIcon = new Icon({
    iconUrl: "/office-icon.png",
    iconSize: [40, 40], // specify the size of your icon
  });

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
    if (userData?.role === "driver") {
      navigator.geolocation.getCurrentPosition((pos: any) => {
        // setDriversPosition([pos.coords.latitude, pos.coords.longitude]);
        console.log("Permission granted");
      });

      // MAKE AN ERROR ALERT IF THE PERMISSION WAS REJECTED!

      // ASK FOR THE LOCATION PERMISSION FIRST !

      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          // console.log("new pos : ",pos.coords);
          setDriversPosition([pos.coords.latitude, pos.coords.longitude]);
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
    }
  }, []);

  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  const handleMarkerClick = (marker: any) => {
    setSelectedMarker(marker);
  };

  // console.log(liveDrivers)

  const allRouting = allEmps?.length
    ? allEmps.map((emp: any) => {
        return emp.pickUp;
      })
    : [];

  console.log(allRouting);
  // const allRoutingX = [
  //   [34.0158662, 74.8034567],
  //   [34.0396279, 74.7934329],
  //   [34.0288418, 74.8082178],
  //   [34.0960689, 74.8255204],
  // ]
  // console.log(allRouting);
  // console.log(allRoutingX)

  // console.log(driversPosition)

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

        {driversPosition && (
          <Marker icon={cabIcon} position={driversPosition} />
        )}

        {liveDrivers?.length && (
          <Marker icon={cabIcon} position={liveDrivers} />
        )}

        <Marker icon={officeIcon} position={[34.0837559, 74.8229426]} />

        <MapController />
        {allEmps?.length &&
          allEmps.map((marker: any) => {
            // console.log(marker.pickup)
            return (
              <Marker
                icon={empIcon}
                eventHandlers={{
                  click: () => handleMarkerClick(marker),
                }}
                key={marker._id}
                position={marker.pickUp}
              />
            );
          })}

        {markersArray?.length &&
          markersArray.map((marker: any) => {
            // console.log(marker.pickup)
            return <Marker icon={empIcon} key={marker} position={marker} />;
          })}

        {selectedMarker && (
          <Popup position={selectedMarker?.pickUp} closeButton>
            {/* Your card content here */}
            <div>
              <h2>{selectedMarker.name}</h2>
              <p>{selectedMarker.address}</p>
              <p>Call: {selectedMarker.phone}</p>
            </div>
          </Popup>
        )}
        {routingEnabled && allRouting && (
          <RoutingMachine routes={[...allRouting, [34.0837559, 74.8229426]]} />
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
