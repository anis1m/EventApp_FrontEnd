import React, { useEffect, useState } from "react";
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

function Dashboard() {
  const [cardData, setCardData] = useState([]);
  const [location, setLocation] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [limitNumber, setLimitNumber] = useState(20);

  useEffect(() => {
    const url = `http://127.0.0.1:3500/api/v3/event/?page=${pageNumber}&limit=${limitNumber}`;
    async function fetchData() {
      try {
        const res = await axios.get(url, {
          withCredentials: true,
        });
        const data = await res.data;
        console.log(data);
        setCardData((prevData) => [...prevData, ...data.data]);
        console.log(cardData);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [pageNumber, limitNumber]);

  function locationChange(locate) {
    setLocation(locate);
  }

  function pageandlimitset(page, limit) {
    console.log(page, limit);
    setPageNumber(page);
    setLimitNumber(limit);
  }

  return (
    <>
      <Navbar onlocationChange={locationChange} />
      <Carousal />
      <Options />
      <BrowsingEvents locationName={location} />
      <Filters />
      <Cards />
      <EventsInArea locationName={location} />
      <MoreEvents moreEventsData={cardData} pageandlimitset={pageandlimitset} />
      <Destinations />
      <Footer />
    </>
  );
}

export default Dashboard;
