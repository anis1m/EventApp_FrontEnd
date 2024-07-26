import React, { useState } from "react";
import "./HelpSection.css";
import Footer from "../EventAppLayout/Footer";
import { useNavigate } from "react-router-dom";

function HelpSection() {
  const [displaydiv, setDisplaydiv] = useState("Attending");
  const navigatehelpsection = useNavigate();
  return (
    <>
      <main className="helpSection">
        <h1>How can we help?</h1>
        <blockquote>
          <i class="fa-solid fa-search"></i>
          <input type="text" placeholder="Search help articles" />
        </blockquote>
        <mark>
          <aside
            onClick={() => {
              setDisplaydiv("Attending");
            }}
          >
            <h4>Attending an event</h4>
            {displaydiv === "Attending" && <hr />}
          </aside>
          <aside
            onClick={() => {
              setDisplaydiv("Organizing");
            }}
          >
            <h4>Organizing an event</h4>
            {displaydiv === "Organizing" && <hr />}
          </aside>
        </mark>
        {displaydiv === "Attending" && (
          <div className="helpSectionfeaturedArticles">
            <h2>Featured articles</h2>
            <dl>
              <dd
                onClick={() =>
                  navigatehelpsection("/manage-my-events/help/find-tickets")
                }
              >
                <i class="fa-regular fa-newspaper"></i>
                <h4>Find your tickets</h4>
              </dd>
              <dd
                onClick={() =>
                  navigatehelpsection("/manage-my-events/help/request-refund")
                }
              >
                <i class="fa-regular fa-newspaper"></i>
                <h4>Request a refund</h4>
              </dd>
              <dd
                onClick={() =>
                  navigatehelpsection(
                    "/manage-my-events/help/contact-event-organizer"
                  )
                }
              >
                <i class="fa-regular fa-newspaper"></i>
                <h4>Contact the event organizer</h4>
              </dd>
              <dd>
                <i class="fa-regular fa-newspaper"></i>
                <h4>What is this charge from EventDTL?</h4>
              </dd>
              <dd>
                <i class="fa-regular fa-newspaper"></i>
                <h4>Transfer tickets to someone else</h4>
              </dd>
              <dd>
                <i class="fa-regular fa-newspaper"></i>
                <h4>Edit your order information</h4>
              </dd>
            </dl>
          </div>
        )}
        {displaydiv === "Organizing" && (
          <div className="helpSectionfeaturedArticles">
            <h2>Featured articles</h2>
            <dl>
              <dd>
                <i class="fa-regular fa-newspaper"></i>
                <h4>Launch an EventDTL Ads campaign</h4>
              </dd>
              <dd>
                <i class="fa-regular fa-newspaper"></i>
                <h4>Connect your online event to Google Meet</h4>
              </dd>
              <dd>
                <i class="fa-regular fa-newspaper"></i>
                <h4>Email your registered attendees</h4>
              </dd>
              <dd>
                <i class="fa-regular fa-newspaper"></i>
                <h4>Add and manage your payout details</h4>
              </dd>
              <dd>
                <i class="fa-regular fa-newspaper"></i>
                <h4>Issue a full or partial refund</h4>
              </dd>
              <dd>
                <i class="fa-regular fa-newspaper"></i>
                <h4>Delayed or missing payouts</h4>
              </dd>
            </dl>
          </div>
        )}
        <div className="insidehelpsectionBrowsebytopic">
          <h2>Browse by topic</h2>
          <dl>
            <dd>
              <i class="fa-regular fa-calendar"></i>
              <h3>Creating an event</h3>
            </dd>
            <dd>
              <i class="fa-solid fa-bullhorn"></i>
              <h3>Marketing an event</h3>
            </dd>
            <dd>
              <i class="fa-solid fa-bars"></i>
              <h3>Managing orders</h3>
            </dd>
            <dd>
              <i class="fa-solid fa-money-bill"></i>
              <h3>Payout and taxes</h3>
            </dd>
            <dd>
              <i class="fa-solid fa-circle-user"></i>
              <h3>Your account</h3>
            </dd>
            <dd>
              <i class="fa-regular fa-newspaper"></i>
              <h3>Terms and policies</h3>
            </dd>
          </dl>
        </div>
        <aside id="stillhavequestionshelpsection">
          <h2>Still have questions?</h2>
          <button onClick={() => navigatehelpsection("/contact-us")}>
            Contact us
          </button>
        </aside>
      </main>
    </>
  );
}

export default HelpSection;
