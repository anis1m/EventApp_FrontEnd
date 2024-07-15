import { useMap } from "react-leaflet";
import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "./RoutingMachine.css";

const RoutingMachine = ({ start, end, calculateRoute, currentDistance }) => {
  const map = useMap();
  const [showed, setShow] = useState(false);
  const routeLineRef = useRef(null);
  useEffect(() => {
    console.log("routing machine", map);
    if (!map || !calculateRoute) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(start.lat, start.lng), L.latLng(end.lat, end.lng)],
      routeWhileDragging: true,
      createMarker: () => null,
      lineOptions: {
        styles: [{ color: "blue", weight: 5 }],
      },
      addWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: true,

      altLineOptions: {
        styles: [
          { color: "black", opacity: 0.15, weight: 9 },
          { color: "white", opacity: 0.8, weight: 6 },
          { color: "blue", opacity: 0.5, weight: 3 },
        ],
      },
      show: true,
    }).addTo(map);

    routingControl.on("routesfound", function (e) {
      const routes = e.routes;
      const summary = routes[0].summary;

      if (currentDistance.current) {
        currentDistance.current.innerHTML = `${(
          summary.totalDistance / 1000
        ).toFixed(2)} km`;
      }
      if (routeLineRef.current) {
        routeLineRef.current.clearLayers();
      }
      routeLineRef.current = L.layerGroup().addTo(map);

      // Create a polyline for the route and add click event listener
      const routeCoordinates = routes[0].coordinates.map((coord) =>
        L.latLng(coord.lat, coord.lng)
      );
      const polyline = L.polyline(routeCoordinates, {
        color: "blue",
        weight: 4,
      }).addTo(routeLineRef.current);

      polyline.on("click", () => {
        console.log("clicked");
        setShow(true);
      });
    });
    /*
    return () => {
      if (map && map.removeControl) {
        map.removeControl(routingControl);
      }
    };*/
  }, [map, start, end, calculateRoute, currentDistance]);

  return null;
};

export default RoutingMachine;
