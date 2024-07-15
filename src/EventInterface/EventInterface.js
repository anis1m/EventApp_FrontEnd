import React, { useEffect, useRef, useState } from "react";
import "./EventInterface.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../EventAppLayout/Navbar";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import RoutingMachine from "./RoutingMachine";
import noimage from "../EventAppLayout/carousalImages/noImage.jpg";

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

  const navigateToBookEvent = useNavigate();

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
          <img
            src={fetched.imageurl}
            alt="Image"
            id="insideEventInterfaceImage"
          />
          <div className="likeandshareEvent">
            <aside>
              <h1>{fetched.title}</h1>
              <blockquote>
                <h4>{fetched.category}</h4>
                <h4>|</h4>
                <h4>Hindi, English</h4>
                <h4>|</h4>
                <h4>2yrs+</h4>
                <h4>|</h4>
                <h4>45mins</h4>
              </blockquote>
              <h4>venue: date/day/time pune</h4>
            </aside>
            <aside>
              <figure>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-upload"></i>
              </figure>
              <h3>Starting At Rs {fetched.ticketprice}</h3>
              <button
                onClick={() =>
                  navigateToBookEvent(
                    `/book-event/insideBookEvent?price=${fetched.ticketprice}`
                  )
                }
              >
                Book
              </button>
            </aside>
          </div>
          <div className="insideEventInterfaceDetails">
            <article className="leftsideInsideEventInterfaceDetails">
              <aside>
                <h3>Venue</h3>
                <h4>{fetched.dateandtime}</h4>
                <h3>Map</h3>
              </aside>

              <div
                style={{ width: "100%", height: "300px" }}
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
                <h2>Time to Reach</h2>
                <p>Approx 1 day</p>
              </aside>
              <figure>
                <i class="fa-solid fa-home"></i>
                <p ref={CurrentDistance}>Distance</p>
                <i class="fa-solid fa-location-dot"></i>
                <button onClick={() => setCalculateRoute(true)}>
                  Calculate
                </button>
              </figure>
              <aside>
                <h4>Instructions and warnings</h4>
              </aside>
            </article>
            <article className="middlesideInsideEventInterfaceDetails">
              <h2>About Event</h2>
              <aside>
                <h3>Description</h3>
                <p>{fetched.description}</p>
              </aside>
              <blockquote>
                <p>terms and conditions for tickets</p>
                <h4>read more</h4>
              </blockquote>
            </article>
            <article className="rightsideInsideEventInterfaceDetails">
              <h3>Organizer</h3>
              <blockquote>
                <h4>{fetched.hostdetails}</h4>
                <h4>Event dtl org name</h4>
              </blockquote>
              <figure>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
              </figure>
              <aside>
                <h4>Celebrity for host</h4>
                <img src={noimage} />
                <p>Info about Celebrity</p>
              </aside>
            </article>
          </div>
        </section>
        <section className="outsideEventInterface">
          <h2>You may also like this event</h2>
        </section>
      </section>
    </>
  );
}

export default EventInterface;
