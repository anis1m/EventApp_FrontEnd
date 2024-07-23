import React from "react";
import "./HomeDashboard.css";

function HomeDashboard() {
  return (
    <>
      <main className="homedashboard">
        <h1>Welcome, Anis</h1>
        <div className="insidehomedashboard1">
          <aside>
            <i class="fa-regular fa-pen-to-square"></i>
            <h3>Start from scratch</h3>
            <p>
              Add all your event details, create new tickets, and setup
              recurring events
            </p>
            <button>Create event</button>
          </aside>
          <aside>
            <i class="fa-solid fa-earth-americas"></i>
            <h3>Browse Events</h3>
            <p>Browse events based on your location</p>
            <button>Browse events</button>
          </aside>
        </div>
        <div className="insidehomedashboard2">
          <h1>Your checklist</h1>
          <h3>
            We make it easy to plan successful events. Here's how to start!
          </h3>
          <aside>
            <input type="radio" />
            <blockquote>
              <h4>Create event</h4>
              <p>Publish an event to reach millions of people on EventDTL</p>
            </blockquote>
            <button>
              <i class="fa-solid fa-star-of-life"></i> Start here
            </button>
          </aside>
          <aside>
            <input type="radio" />
            <blockquote>
              <h4>Set up your organizer profile</h4>
              <p>
                Highlight your brand by adding your organizer a name, image and
                bio
              </p>
            </blockquote>
          </aside>
          <aside>
            <input type="radio" />
            <blockquote>
              {" "}
              <h4>Add your bank account</h4>
              <p>
                Get paid for future ticket sales by entering your bank details
              </p>
            </blockquote>
          </aside>
        </div>
        <div className="insidehomedashboard3">
          <h1>How can we help?</h1>
          <a>Go to Help Center</a>
          <div>
            <aside>
              <i class="fa-regular fa-calendar"></i>
              <h4>Creating an event</h4>
            </aside>
            <aside>
              <i class="fa-solid fa-circle-user"></i>
              <h4>Your account</h4>
            </aside>
            <aside>
              <i class="fa-solid fa-bullhorn"></i>
              <h4>Marketing an event</h4>
            </aside>
            <aside>
              <i class="fa-solid fa-money-bill"></i>
              <h4>Payouts and taxes</h4>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomeDashboard;
