import React from "react";
import "./FindTickets.css";

function FindTickets() {
  return (
    <>
      <section className="findTickets">
        <article>
          <h4>Attending an event</h4>
          <h1>Find Your Tickets</h1>
          <hr />
          <p>
            When you order tickets on Eventbrite, an account is created using
            the email address you enter during checkout. To access your tickets,
            log in to the Eventbrite app or website using the email on your
            order. Then, go to Tickets.
          </p>
          <h2>In this article</h2>
          <aside>
            <h4>Where to find your tickets</h4>
            <h4>If you’re unable to log in</h4>
            <h4>If your tickets are missing</h4>
          </aside>
          <h2>Where to find your tickets</h2>
          <p>
            You can access your tickets in your account via the Eventbrite app
            or website.
          </p>
          <h4>The EventDTL app</h4>
          <ul>
            <li>iPhone: Log in and tap Tickets.</li>
            <li>
              Android: Log in and tap Profile. Then, find your order and tap
              Tickets.
            </li>
          </ul>
          <h4>The Eventbrite website: Log in and go to Tickets.</h4>
          <h2>If you’re unable to log in</h2>
          <p>
            You might not have a password yet. During checkout, Eventbrite
            creates an account for you using the email address you provide. To
            verify your email and access your tickets:
          </p>
          <ol>
            <li>Go to Reset Your Password. </li>
            <li>
              Enter the email address you used to order tickets and select Reset
              password.
            </li>
            <li>
              Check your email inbox for an email with the subject line “Reset
              your Eventbrite password.” It might be in your spam folder.
            </li>
            <li>Open the email and select Set a new password.</li>
            <li>
              Enter your new password and select Update password. Once you’re
              logged in, go to Tickets to find your tickets.
            </li>
          </ol>
          <h2>If your tickets are missing</h2>
          <p>
            There are a few reasons tickets might not appear in your Eventbrite
            account:
          </p>
          <ul>
            <li>
              <strong>Different email address: </strong>You’re logged into
              Eventbrite using a different email address than the one you used
              to place the order.
            </li>
            <li>
              <strong>Typo in your email address: </strong>The email address on
              your order was misspelled during checkout.
            </li>
            <li>
              <strong>The organizer disabled PDF tickets:</strong> The order
              appears in your Eventbrite account, but there is no option to
              print tickets.
            </li>
          </ul>
          <p>
            If your tickets are missing for any of these reasons, contact the
            event organizer for assistance.
          </p>
        </article>
      </section>
    </>
  );
}

export default FindTickets;
