import React from "react";
import "./InsideBookEvent.css";
import { Link, useLocation } from "react-router-dom";

function InsideBookEvent() {
  const query = new URLSearchParams(useLocation().search);
  const price = query.get("price");
  return (
    <>
      <section className="insideBookEvent">
        <h1>Day & Date</h1>
        <blockquote>
          <button>
            <h3>Soldout</h3>
          </button>
          <button>
            <h3>Fast Filling</h3>
          </button>
        </blockquote>
        <h2>Show Timing</h2>
        <div>
          <button>01:00 pm</button>
          <button>03:00 pm</button>
          <button>05:00 pm</button>
          <button>07:00 pm</button>
        </div>
        <Link to={`/book-event/bookPayment?price=${price}`}>
          <button id="bookPaymentButton">Continue</button>
        </Link>
      </section>
    </>
  );
}

export default InsideBookEvent;
