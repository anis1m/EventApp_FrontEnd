import React, { useEffect, useRef, useState } from "react";
import "./FindParticularEvents.css";
import Navbar from "../EventAppLayout/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import noimage from "../EventAppLayout/carousalImages/noImage.jpg";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers";

function FindParticularEvents() {
  const { location, keyword } = useParams();
  const leftPartOfInsideFilter = useRef();
  const [optionsExpand, setOptionsExpand] = useState(false);
  const seeMoreLess = useRef();
  const [detailsCard, setDetailsCard] = useState([]);
  const navigateToSeeMore = useNavigate();
  const [loading, setLoading] = useState(false);
  let [longitude, setLongitude] = useState(0.0);
  let [latitude, setLatitude] = useState(0.0);
  const [Markers, setMarkers] = useState([]);
  const [markerId, setMarkerId] = useState(0);

  useEffect(() => {
    handleLocationFetch();
    setMarkers([]);
  }, []);

  function getAllLocations(dcard) {
    for (let i = 0; i < dcard.length; i++) {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${dcard[i].location}&key=eb88828eefe7485a9547b3fa0da61537`;
      axios
        .get(url)
        .then((res) => {
          console.log(res.data.results[0].geometry);
          const geometry = res.data.results[0].geometry;
          setMarkers((prev) => [
            ...prev,
            {
              id: i + 1,
              position: [geometry.lat, geometry.lng],
              popupContent: dcard[i].location,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

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
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const url = `http://127.0.0.1:3500/api/v3/event/getEvent/${location}/${keyword}`;
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        const d = response.json();
        return d;
      })
      .then((data) => {
        setDetailsCard(data.data);
        console.log(data.data);
        getAllLocations(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  const mark = [
    { id: 1, position: [19.07283, 72.88261], popupContent: "" },
    {
      id: 2,
      position: [18.986, 72.8259],
      popupContent: "",
    },
  ];

  return (
    <>
      <section className="findParticularEvents">
        <Navbar />
        <aside className="breadCrumb">
          <a>Home</a>
          <p>/</p>
          <a>India</a>
          <p>/</p>
          <a>{location}</a>
          <p>/</p>
          <a>{keyword} Events</a>
        </aside>
        <section className="insideFindParticularEvents">
          <div className="leftPartofFindParticularEvents">
            <aside id="titlePartofFindParticularEvents">
              <h1>
                {keyword} Events in {location}, India
              </h1>
            </aside>
            <div className="leftRightParticular">
              <div className="leftPartofInsideFindParticularEvents">
                <h1>Filters</h1>
                <h4>Category</h4>

                <dl>
                  <dd>
                    <i class="fa-solid fa-business-time"></i>
                    <p>Business</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-burger"></i>
                    <p>Food And Drink</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-notes-medical"></i>
                    <p>Health</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-music"></i>
                    <p>Music</p>
                  </dd>
                </dl>
                <dl id="leftPartOfInsideFilter" ref={leftPartOfInsideFilter}>
                  <dd>
                    <i class="fa-solid fa-car"></i>
                    <p>Auto, Boat & Air</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-gift"></i>
                    <p>Charity & Causes</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-group-arrows-rotate"></i>
                    <p>Community</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-school"></i>
                    <p>Family & Education</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-shirt"></i>
                    <p>Fashion</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-film"></i>
                    <p>Film & Media</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-gamepad"></i>
                    <p>Hobbies</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-house"></i>
                    <p>Home & Lifestyle</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-masks-theater"></i>
                    <p>Performing & Visual Arts</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-tower-broadcast"></i>
                    <p>Government</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-star-of-life"></i>
                    <p>Spirituality</p>
                  </dd>
                  <dd>
                    <i class="fa-regular fa-clipboard"></i>
                    <p>School Activities</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-flask"></i>
                    <p>Science & Tech</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-mug-hot"></i>
                    <p>Holidays</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-dumbbell"></i>
                    <p>Sports & Fitness</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-bag-shopping"></i>
                    <p>Travel & Outdoor</p>
                  </dd>
                  <dd>
                    <i class="fa-regular fa-star"></i>
                    <p>Others</p>
                  </dd>
                </dl>
                <button
                  onClick={() => {
                    if (!optionsExpand) {
                      leftPartOfInsideFilter.current.style.display = "block";
                      seeMoreLess.current.textContent = "View Less";
                      setOptionsExpand(true);
                    } else {
                      leftPartOfInsideFilter.current.style.display = "none";
                      seeMoreLess.current.textContent = "View More";
                      setOptionsExpand(false);
                    }
                  }}
                  ref={seeMoreLess}
                >
                  View More
                </button>
                <h4>Date</h4>
                <ul>
                  <li>
                    <input type="radio" />
                    <label>Today</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>Tomorrow</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>This Weekend</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>Pick a Date</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>This Week</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>Next Week</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>This Month</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>Next Month</label>
                  </li>
                </ul>
              </div>
              <div className="RightPartofInsideFindParticularEvents">
                {loading ? (
                  <aside style={{ margin: "15rem 40%" }}>
                    <InfinitySpin
                      visible={true}
                      width="200"
                      color="purple"
                      ariaLabel="infinity-spin-loading"
                    />
                  </aside>
                ) : detailsCard.length === 0 ? (
                  <h2 style={{ margin: "15rem 40%" }}>Nothing Here</h2>
                ) : (
                  detailsCard.map((databox, index) => (
                    <div
                      style={{ position: "relative" }}
                      onClick={() => setMarkerId(index + 1)}
                    >
                      <div
                        className="detailTileLayoutofParticularEvent"
                        key={index}
                      >
                        <img
                          src={
                            databox.imageurl === "" ? noimage : databox.imageurl
                          }
                          onClick={() =>
                            navigateToSeeMore(`/event-interface/${databox._id}`)
                          }
                        />
                        <aside>
                          <h3
                            onClick={() =>
                              navigateToSeeMore(
                                `/event-interface/${databox._id}`
                              )
                            }
                            style={{ cursor: "pointer" }}
                          >
                            {databox.title}
                          </h3>
                          <p>{databox.dateandtime}</p>
                          <p>{databox.hostebylocation}</p>
                          <p>{databox.ticketPrice}</p>
                        </aside>
                      </div>
                      <figure>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-upload"></i>
                      </figure>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="rightPartofFindParticularEvents">
            <MapContainer
              center={[latitude, longitude]}
              zoom={8}
              style={{ width: "inherit", height: "100%" }}
              key={`${latitude}-${longitude}`}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {Markers.map((d) => {
                if (d.id === markerId) {
                  return (
                    <Marker
                      key={d.id}
                      position={d.position}
                      icon={L.AwesomeMarkers.icon({
                        icon: "certificate",
                        prefix: "fa",
                        markerColor: "red",
                      })}
                    >
                      <Popup>{d.popupContent}</Popup>
                    </Marker>
                  );
                } else {
                  return (
                    <Marker
                      key={d.id}
                      position={d.position}
                      icon={L.AwesomeMarkers.icon({
                        icon: "star",
                        prefix: "fa",
                        markerColor: "blue",
                      })}
                    >
                      <Popup>{d.popupContent}</Popup>
                    </Marker>
                  );
                }
              })}
            </MapContainer>
          </div>
        </section>
      </section>
    </>
  );
}

export default FindParticularEvents;
