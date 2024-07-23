import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Carousal from "./Carousal";
import "./Dashboard.css";
import Options from "./Options";
import BrowsingEvents from "./BrowsingEvents";
import Cards from "./Cards";
import Filters from "./Filters";
import EventsInArea from "./EventsInArea";
import MoreEvents from "./MoreEvents";
import Destinations from "./Destinations";
import Footer from "./Footer";
import axios from "axios";
import EventsCarousal from "./EventsCarousal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Mycontext = createContext();
function Dashboard({ imagedata }) {
  const [location, setLocation] = useState("");

  function locationChange(locate) {
    setLocation(locate);
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

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
  }, []);

  function getLocationbyCoords(lati, longi) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lati}%2C${longi}&key=eb88828eefe7485a9547b3fa0da61537`;

    axios
      .get(url)
      .then((response) => {
        setLocation(response.data.results[0].components.city);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <ToastContainer />
      <Mycontext.Provider value={locationChange}>
        <Navbar locationName={location} imagedata={imagedata} />
      </Mycontext.Provider>

      <Carousal />
      <Options />
      <BrowsingEvents locationName={location} />
      <Filters />

      <EventsCarousal propKeyword={location} propCategory="location" />
      <EventsCarousal propKeyword={location} propCategory="Adventure" />
      <EventsCarousal propKeyword="price" propCategory="699" />
      <EventsCarousal propKeyword="All" propCategory="all" />
      <EventsCarousal propKeyword="Adventure" propCategory="Adventure" />
      <Destinations />
      <Footer />
    </>
  );
}

export default Dashboard;
