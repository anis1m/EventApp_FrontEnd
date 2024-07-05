import React, { useRef, useState } from "react";
import "./BrowsingEvents.css";

function BrowsingEvents({ locationName }) {
  const BrowsingEventsOptionsandHistory = useRef();
  const [close, setClose] = useState(false);

  return (
    <>
      <section className="browsingEvent">
        <div className="browsingEvents">
          <h3>Browsing Events in</h3>
          <i
            class="fa-solid fa-angle-down"
            onClick={() => {
              if (!close) {
                setClose(true);
                BrowsingEventsOptionsandHistory.current.style.display = "block";
              } else {
                setClose(false);
                BrowsingEventsOptionsandHistory.current.style.display = "none";
              }
            }}
          ></i>
          <div id="eventSentenceWithUnderline">
            <input
              id="eventSentence"
              placeholder="Enter Location"
              value={locationName}
            />
            <hr />
          </div>
        </div>
      </section>
      <div
        className="BrowsingEventsOptionsandHistory"
        ref={BrowsingEventsOptionsandHistory}
      >
        <aside>
          <i class="fa-solid fa-location-crosshairs"></i>
          <p>Use My Current Location</p>
        </aside>
        <aside>
          <i class="fa-solid fa-film"></i>
          <a>Browse online events</a>
        </aside>
        <aside>
          <i class="fa-solid fa-clock-rotate-left"></i>
          <div>
            <p>Kolhapur</p>
            <p>India, Asia</p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default BrowsingEvents;
