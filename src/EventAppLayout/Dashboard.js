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
function Dashboard() {
  const [location, setLocation] = useState("");

  function locationChange(locate) {
    setLocation(locate);
  }

  return (
    <>
      <ToastContainer />
      <Mycontext.Provider value={locationChange}>
        <Navbar />
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
