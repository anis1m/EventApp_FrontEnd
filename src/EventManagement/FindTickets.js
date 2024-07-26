import React from "react";
import "./FindTickets.css";
import Footer from "../EventAppLayout/Footer";
import { Link } from "react-router-dom";

function FindTickets() {
  return (
    <>
      <section className="findTickets">
        <article>
          <blockquote>
            <a href="/manage-my-events/help">Help Center</a>
            <i class="fa-solid fa-angle-right"></i>
            <a href="/manage-my-events/help/find-tickets">Your tickets</a>
          </blockquote>
          <h4>Attending an event</h4>
          <h1>Find Your Tickets</h1>
          <hr />
          <p>
            When you order tickets on EventDTL, an account is created using the
            email address you enter during checkout. To access your tickets, log
            in to the EventDTL app or website using the email on your order.
            Then, go to <strong>Tickets.</strong>
          </p>
          <h2>In this article</h2>
          <aside>
            <h4>Where to find your tickets</h4>
            <h4>If you’re unable to log in</h4>
            <h4>If your tickets are missing</h4>
          </aside>
          <h2>Where to find your tickets</h2>
          <p>
            You can access your tickets in your account via the EventDTL app or
            website.
          </p>
          <h4>The EventDTL app</h4>
          <ul>
            <li>
              iPhone: Log in and tap <strong>Tickets.</strong>
            </li>
            <li>
              Android: Log in and tap <strong>Profile.</strong> Then, find your
              order and tap
              <strong>Tickets.</strong>
            </li>
          </ul>
          <blockquote>
            <h4>The EventDTL website:</h4> <p>Log in and go to </p>
            <a>Tickets.</a>
          </blockquote>
          <h2>If you’re unable to log in</h2>
          <p>
            You might not have a password yet. During checkout, EventDTL creates
            an account for you using the email address you provide. To verify
            your email and access your tickets:
          </p>
          <ol>
            <li>
              Go to <a>Reset Your Password.</a>{" "}
            </li>
            <li>
              Enter the email address you used to order tickets and select{" "}
              <strong>Reset password.</strong>
            </li>
            <li>
              Check your email inbox for an email with the subject line “Reset
              your EventDTL password.” It might be in your spam folder.
            </li>
            <li>
              Open the email and select <strong>Set a new password.</strong>
            </li>
            <li>
              Enter your new password and select{" "}
              <strong>Update password.</strong> Once you’re logged in, go to{" "}
              <strong>Tickets</strong> to find your tickets.
            </li>
          </ol>
          <h2>If your tickets are missing</h2>
          <p>
            There are a few reasons tickets might not appear in your EventDTL
            account:
          </p>
          <ul>
            <li>
              <strong>Different email address: </strong>You’re logged into
              EventDTL using a different email address than the one you used to
              place the order.
            </li>
            <li>
              <strong>Typo in your email address: </strong>The email address on
              your order was misspelled during checkout.
            </li>
            <li>
              <strong>The organizer disabled PDF tickets:</strong> The order
              appears in your EventDTL account, but there is no option to print
              tickets.
            </li>
          </ul>
          <p>
            If your tickets are missing for any of these reasons,{" "}
            <a>contact the event organizer</a> for assistance.
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

export default FindTickets;
