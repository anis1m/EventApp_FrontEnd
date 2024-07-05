import React, { useState } from "react";
import "./ExtraFindEventsPage.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ExtraFindEventsPage() {
  const [searchEvent, setSearchEvent] = useState();
  const [location, setLocation] = useState();
  const navigateTofindEvent = useNavigate();

  return (
    <>
      <section className="extraFindEventsPage">
        <ToastContainer />
        <div className="insideExtraFindEventsPage">
          <aside>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search For Anything"
              onChange={(e) => setSearchEvent(e.target.value)}
            />
            <button
              onClick={() => {
                if (searchEvent != null && location != null) {
                  navigateTofindEvent(
                    `/find-particular-events/${location}/${searchEvent}`
                  );
                } else if (location == null) {
                  toast.error("Please Enter Location", {
                    position: "bottom-center",
                  });
                } else {
                  toast.error("Please Enter Search Keyword", {
                    position: "bottom-center",
                  });
                }
              }}
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </aside>
          <aside>
            <i class="fa-solid fa-location-dot"></i>
            <input
              type="text"
              placeholder="Enter Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </aside>
        </div>
        <button
          id="closeFindExtraEventsPage"
          onClick={() => navigateTofindEvent(-1)}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </section>
    </>
  );
}

export default ExtraFindEventsPage;
