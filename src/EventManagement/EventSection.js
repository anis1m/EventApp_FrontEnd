import React from "react";
import "./EventSection.css";

function EventSection() {
  return (
    <>
      <main className="eventSection">
        <h1>Events</h1>
        <aside>
          <blockquote>
            <h4>Events</h4>
            <hr />
          </blockquote>
          <blockquote>
            <h4>Collections</h4>
            <hr />
          </blockquote>
        </aside>
        <dl>
          <dd>
            <i class="fa-solid fa-search"></i>
            <input type="search" placeholder="Search events" />
          </dd>
          <dd>
            <i class="fa-solid fa-bars"></i>
            <h4>List</h4>
          </dd>
          <dd>
            <i class="fa-regular fa-calendar"></i>
            <h4>Calendar</h4>
          </dd>
          <dd>
            <h4>Upcoming events</h4>
            <i class="fa-solid fa-angle-down"></i>
          </dd>
          <dd>
            <button>Create Event</button>
          </dd>
        </dl>
      </main>
    </>
  );
}

export default EventSection;
