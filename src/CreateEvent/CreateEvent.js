import React, { useState } from "react";
import Navbar from "../EventAppLayout/Navbar";
import Organizer from "./Organizer";
import "./CreateEvent.css";
import { Link } from "react-router-dom";

function CreateEvent() {
  return (
    <>
      <Navbar />
      <Organizer />
      <section className="createEvent">
        <div className="insideCreateEvent">
          <aside id="tomorrowland">
            <img src="/images_/tomorrowland.png" />
          </aside>
          <aside id="eventorganizing">
            <p>
              <a href="/">Home</a> / Create Events
            </p>

            <h1 id="organizersGrow">Where Event Organizers Grow</h1>
            <h1>
              The all-in-one ticketing and discovery platform trusted by
              millions of organizers and attendees worldwide
            </h1>
            <Link to={"/event-create"} style={{ textDecoration: "none" }}>
              <button>Get Started For Free</button>
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

export default CreateEvent;
