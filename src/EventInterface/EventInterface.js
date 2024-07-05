import React, { useEffect, useRef, useState } from "react";
import "./EventInterface.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../EventAppLayout/Navbar";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import RoutingMachine from "./RoutingMachine";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function EventInterface() {
  const { id } = useParams();
  const [fetched, setFetched] = useState({});
  const CurrentLocation = useRef();
  let [longitude, setLongitude] = useState(0.0);
  let [latitude, setLatitude] = useState(0.0);
  const [calculateRoute, setCalculateRoute] = useState(false);
  const mapDetails = useRef();
  let [destinationlatitude, setDestinationLatitude] = useState(0.0);
  let [destinationlongitude, setDestinationLongitude] = useState(0.0);
  const [count, setCount] = useState(1);
  const [locationName, setLocationName] = useState("");
  const CurrentDistance = useRef();

  const query = useQuery();
  const locate = query.get("location");

  const handleCalculateRoute = () => {
    setCalculateRoute(true);
  };

  const url = `http://127.0.0.1:3500/api/v3/event/getEvent/eventId=${id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setFetched(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  useEffect(() => {
    handleLocationFetch();
  }, []);

  function handleLocationFetch() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLatitude(lat);
          setLongitude(lon);

          getLocationbyCoords(lat, lon);
        },

        (error) => {
          console.error("Error fetching location:", error);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }
  function getLocationbyCoords(lati, longi) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lati}%2C${longi}&key=eb88828eefe7485a9547b3fa0da61537`;

    axios
      .get(url)
      .then((response) => {
        setLocationName(response.data.results[0].components.city);
        if (CurrentLocation.current) {
          CurrentLocation.current.innerHTML = locationName;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios

      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${locate}&key=eb88828eefe7485a9547b3fa0da61537`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length > 0) {
          const location = response.data.results[0].geometry;
          setDestinationLatitude(location.lat);
          setDestinationLongitude(location.lng);
          console.log(destinationlatitude, destinationlongitude);
        } else {
          console.log(
            "Unable to find location. Please try a different address."
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const start = { lat: latitude, lng: longitude };
  const end = { lat: destinationlatitude, lng: destinationlongitude };
  console.log(start, end);

  const markers = [
    { id: 1, position: [latitude, longitude], popupContent: locationName },
    {
      id: 2,
      position: [destinationlatitude, destinationlongitude],
      popupContent: fetched.hostebylocation,
    },
  ];
  return (
    <>
      <section className="eventInterface">
        <Navbar />

        <section className="insideEventInterface">
          <img src={fetched.imageurl} alt="Image" />
          <div className="likeandshareEvent">
            <h1>{fetched.title}</h1>
            <aside>
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-upload"></i>
            </aside>
          </div>
          <div className="insideEventInterfaceDetails">
            <article>
              <aside>
                <h3>{fetched.hostdetails}</h3>
              </aside>
              <aside>
                <h2>Date and Time</h2>
                <p>{fetched.dateandtime}</p>
              </aside>
              <aside>
                <h2>Location</h2>
                <p>Nagpur</p>
              </aside>
              <aside>
                <h2>How to Reach</h2>
                <p>{fetched.howToReach}</p>
              </aside>
              <aside>
                <h2>Current Location</h2>
                <div id="clicktoknowlocationandDistance">
                  <p ref={CurrentLocation}>Fetch Current Location </p>
                  <button onClick={handleLocationFetch}>Click Here</button>
                </div>
                <div id="clicktoknowlocationandDistance">
                  <p ref={CurrentDistance}>Calculate Distance</p>
                  <button onClick={handleCalculateRoute}>Click Here</button>
                </div>
              </aside>
              <div
                style={{ width: "100%", height: "400px" }}
                ref={mapDetails}
                id="mapDetailsCutout"
              >
                <MapContainer
                  center={[latitude, longitude]}
                  zoom={14}
                  style={{ width: "inherit", height: "inherit" }}
                  key={`${latitude}-${longitude}`}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {markers.map((marker) => (
                    <Marker key={marker.id} position={marker.position}>
                      <Popup>{marker.popupContent}</Popup>
                    </Marker>
                  ))}
                  <RoutingMachine
                    start={start}
                    end={end}
                    calculateRoute={calculateRoute}
                    currentDistance={CurrentDistance}
                  />
                </MapContainer>
              </div>

              <aside>
                <h2>Department</h2>
                <p>{fetched.hostedbydepartment}</p>
              </aside>
              <aside>
                <h2>Description</h2>
                <p>{fetched.description}</p>
              </aside>
              <aside>
                <h2>Contact Organizer</h2>
                <blockquote id="eventInterfaceContact">
                  <i class="fa-solid fa-envelope"></i>
                  <p>{fetched.OrganizerContact}</p>
                </blockquote>
              </aside>
            </article>
            <div className="bookTicketBlock">
              <div className="insideBookTicketBook">
                <h1>{fetched.title}</h1>
                <aside>
                  <button
                    onClick={() => {
                      if (count <= 1) {
                        setCount(1);
                      } else {
                        setCount(count - 1);
                      }
                    }}
                  >
                    <i class="fa-solid fa-minus"></i>
                  </button>
                  <h3>{count}</h3>
                  <button onClick={() => setCount(count + 1)}>
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </aside>
              </div>
              <button>Check out for {fetched.ticketprice}</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default EventInterface;
