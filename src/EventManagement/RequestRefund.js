import React from "react";
import "./RequestRefund.css";
import { Link } from "react-router-dom";

function RequestRefund() {
  return (
    <>
      <section className="requestRefund">
        <article>
          <blockquote>
            <a href="/manage-my-events/help">Help Center</a>
            <i class="fa-solid fa-angle-right"></i>
            <a href="">Buy and register</a>
          </blockquote>
          <h4>Attending an event</h4>
          <h1>Request a refund</h1>
          <hr />
          <p>
            Third-party event organizers create and manage the events on
            EventDTL. They’re responsible for setting their own refund policies
            and issuing refunds. If you want a refund for your tickets, send a
            request to the event organizer.
          </p>
          <h2>In this article</h2>
          <aside>
            <h4>Request a refund directly from your EventDTL account</h4>
            <h4>Refunds for postponed or cancelled events</h4>
          </aside>
          <h2>Request a refund directly from your EventDTL account</h2>
          <p>
            EventDTL automatically creates an account with the email address you
            use to purchase tickets. If the event organizer allows refund
            requests for the event you purchased tickets for, you’ll see the
            option to request a refund in your account:
          </p>

          <ol>
            <li>
              <a>Log in</a> to EventDTL
            </li>
            <li>Go to Tickets</li>
            <li>
              Find the order you want refunded, then select{" "}
              <strong>Request a refund.</strong>
            </li>
            <li>
              Open the email and select <strong>Set a new password.</strong>
            </li>
            <li>
              Enter your details and submit your request. The organizer should
              respond within five business days.
            </li>
          </ol>
          <p>
            Select <strong>Contact the organizer</strong> if you don’t see the
            option to request a refund or you have a question about the status
            of your refund request.
          </p>
          <h2>Refunds for postponed or cancelled events</h2>
          <p>
            EventDTL requires event organizers to approve refund requests in
            certain situations. If the organizer denies your refund request, or
            if you don’t receive a response, check if your order meets one of
            these refund qualifications:
          </p>
          <ul>
            <li>The event was cancelled within the last 45 days.</li>
            <li>
              The event has been postponed for more than 90 days without a new
              date scheduled.
            </li>
          </ul>
          <p>
            If your order qualifies, you have 45 days and until the event is
            rescheduled to contact EventDTL through the Attendee Refund Request
            form. EventDTL can only refund payments processed using EventDTL
            Payment Processing.
          </p>
          <p>
            EventDTL is unable to issue refunds outside of these circumstances.
            If your order doesn’t qualify for a refund, contact the organizer
            for further help.
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

export default RequestRefund;
