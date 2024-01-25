import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

interface CustomRoutingControlOptions extends L.Routing.RoutingControlOptions {
  draggableWaypoints?: boolean;
}

const createRoutineMachineLayer = ({routes}: any) => {
  // CAN SEND ROUTES ARRAY TO MAP THROUGH
  const instance = L.Routing.control({
    waypoints: [
        ...routes
    ],
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: true,
  } as CustomRoutingControlOptions);

  // Listen for the routeselected event
  instance.on("routeselected", (e: L.Routing.RouteSelectedEvent) => {
    // Access the distance information from the route object
    const distanceInKilometers: number | undefined =
      typeof e.route.summary?.totalDistance === "number"
        ? e.route.summary?.totalDistance / 1000
        : 0;
    console.log(`Distance: ${distanceInKilometers.toFixed(2)} km`);
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
