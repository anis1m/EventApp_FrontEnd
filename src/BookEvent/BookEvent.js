import React from "react";
import "./BookEvent.css";
import { Outlet } from "react-router-dom";

function BookEvent() {
  return (
    <>
      <section className="bookEvent">
        <section className="bookEventInside">
          <Outlet />
        </section>
      </section>
    </>
  );
}

export default BookEvent;
