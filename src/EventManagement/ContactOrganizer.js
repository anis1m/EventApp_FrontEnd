import React from "react";
import "./ContactOrganizer.css";
import { Link } from "react-router-dom";

function ContactOrganizer() {
  return (
    <>
      <section className="contactOrganizer">
        <article>
          <blockquote>
            <a href="/manage-my-events/help">Help Center</a>
            <i class="fa-solid fa-angle-right"></i>
            <a href="/manage-my-events/help/find-tickets">Your tickets</a>
          </blockquote>
          <h4>Attending an event</h4>
          <h1>Contact the event organizer</h1>
          <hr />
          <p>
            EventDTL is a self-service platform, which means third party
            organizers create and manage their own events. If you have questions
            about an event, see if the information you need is on the event
            listing. If you don’t find what you’re looking for, select{" "}
            <strong>Contact the organizer</strong> on the event listing. If you
            already have a ticket, you can also contact the organizer by going
            to <strong>Tickets</strong> in your EventDTL account. EventDTL can't
            answer questions about an event on the organizer's behalf.
          </p>
          <h2>In this article</h2>
          <aside>
            <h4>If you already have your ticket</h4>
            <h4>If you don't have a ticket</h4>
          </aside>
          <h2>If you already have your ticket</h2>
          <p>
            If you registered for an event and have a ticket in your EventDTL
            account, you can:
          </p>
          <ul>
            <li>
              <a>Update your order -</a> Update the information on your order
              (not available for all events).
            </li>
            <li>
              <a>Request a refund -</a> Send a refund request to the organizer
              using EventDTL's refund request form (if enabled).
            </li>
            <li>
              <a>Join an online event -</a> If the organizer set up an online
              event page, you can join the online meeting or webinar there.
            </li>
          </ul>
          <p>
            If you need help with these steps or have questions about the event,
            you'll need to contact the organizer:
          </p>

          <ol>
            <li>
              Log in and go to <strong>Tickets.</strong>
            </li>
            <li>Select your order.</li>
            <li>
              Select <strong>Contact the organizer.</strong>
            </li>
            <li>
              Review the options available or select{" "}
              <strong>Contact the organizer.</strong>
            </li>
            <li>
              Fill out the form and select <strong>Continue.</strong>
            </li>
            <li>
              Review your submission. Then{" "}
              <strong>select Submit request.</strong>
            </li>
          </ol>
          <h2>If you don't have a ticket</h2>
          <p>
            If you can't find your ticket or have a question before registering,
            follow these steps:
          </p>
          <ul>
            <li>Go to the event page.</li>
            <li>
              Select <strong>Contact</strong>, then{" "}
              <strong>Contact the organizer.</strong>
            </li>
            <li>
              Fill out the form and select <strong>Continue.</strong>
            </li>
          </ul>
          <p>
            Review your submission. Then select <strong>Submit request.</strong>
          </p>
          <hr style={{ marginTop: "3rem" }} />
        </article>

        <aside
          id="stillhavequestionshelpsection"
          style={{ marginBottom: "5rem" }}
        >
          <h2>Still have questions?</h2>
          <Link to={"/contact-us"}>
            <button>Contact us</button>
          </Link>
        </aside>
      </section>
    </>
  );
}

export default ContactOrganizer;
