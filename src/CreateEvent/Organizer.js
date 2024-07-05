import React from "react";
import "./Organizer.css";

function Organizer() {
  return (
    <>
      <section className="organizer">
        <div className="insideOrganizer">
          <aside>
            <a>Organizer</a>
          </aside>
          <aside>
            <a>Solutions</a>
            <i className="fa-solid fa-angle-down"></i>
          </aside>
          <aside>
            <a>Industry</a>
            <i className="fa-solid fa-angle-down"></i>
          </aside>
          <aside>
            <a>Event Types</a>
            <i className="fa-solid fa-angle-down"></i>
          </aside>
          <aside>
            <a>Blog</a>
            <i className="fa-solid fa-angle-down"></i>
          </aside>
          <aside>
            <a>Organizer Resource Hub</a>
          </aside>
          <aside>
            <a>Pricing</a>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Organizer;
