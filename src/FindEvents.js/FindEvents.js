import React, { useRef, useState } from "react";
import "./FindEvents.css";
import Navbar from "../EventAppLayout/Navbar";

function FindEvents() {
  const locationOptionsToggle = useRef();
  const [isToggleOpen, setToggleOpen] = useState(false);
  return (
    <>
      <section className="findEvents">
        <Navbar />
        <section className="insideFindEvents">
          <div className="insideFindEventsCardTitle">
            <aside>
              <h2>Best events in</h2>
              <h1>Maharashtra</h1>
              <p>
                Looking for things to do in Maharashtra? Whether you're a local,
                new in town or just cruising through we've got loads of great
                tips and events. You can explore by location, what's popular,
                our top picks, free stuff... you got this. Ready?
              </p>
              <div>
                <i class="fa-solid fa-location-dot"></i>
                <h4>Maharashtra</h4>
                <i
                  class="fa-solid fa-angle-down"
                  onClick={() => {
                    if (!isToggleOpen) {
                      locationOptionsToggle.current.style.display = "block";
                      setToggleOpen(true);
                    } else {
                      locationOptionsToggle.current.style.display = "none";
                      setToggleOpen(false);
                    }
                  }}
                ></i>
              </div>
            </aside>
          </div>
          <div
            className="insideFindEventsLocationOptions"
            ref={locationOptionsToggle}
          >
            <aside id="insideFindEventsLocationsOptionsInside">
              <i class="fa-solid fa-location-crosshairs"></i>
              <p>Use My Current Location</p>
            </aside>
            <aside id="insideFindEventsLocationsOptionsInside">
              <i class="fa-solid fa-film"></i>
              <a>Browse online events</a>
            </aside>
            <aside id="insideFindEventsLocationsOptionsInside">
              <i class="fa-solid fa-clock-rotate-left"></i>
              <div>
                <p>Kolhapur</p>
                <p>India, Asia</p>
              </div>
            </aside>
          </div>
        </section>
      </section>
    </>
  );
}

export default FindEvents;
