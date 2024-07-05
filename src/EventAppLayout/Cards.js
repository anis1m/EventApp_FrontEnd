import React, { useRef } from "react";
import "./Cards.css";
import i6 from "./carousalImages/i6.png";

function Cards() {
  const slider = useRef();

  function slideforward() {
    if (slider.current) {
      slider.current.style.transform = "translateX(-600px)";
    }
  }

  return (
    <>
      <section className="card">
        <div className="eventOffer">
          <h2>Events $30 and under</h2>
          <button id="lefty">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button id="righty">
            <i class="fa-solid fa-angle-right" onClick={slideforward}></i>
          </button>
        </div>
        <section className="slideLeftRight">
          <div className="card-header" ref={slider}>
            <div className="card-body">
              <div className="card-content">
                <img src={i6} />
                <div className="card-details">
                  <h4 id="sales-and-arrivation">Sales end soon</h4>
                  <h2>Global Startups Club | Startup Networking</h2>
                  <p>Sat, Jun 15 • 1:30 PM</p>
                  <p>KoDesk | CoWorking Space In Baner Balewadi</p>
                  <p>From $9.05</p>
                  <p>MOJO STARTUP PVT LTD</p>
                  <div className="followers">
                    <i class="fa-regular fa-circle-user"></i>
                    <p>1.6k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img src={i6} />
                <div className="card-details">
                  <h4 id="sales-and-arrivation">Sales end soon</h4>
                  <h2>Global Startups Club | Startup Networking</h2>
                  <p>Sat, Jun 15 • 1:30 PM</p>
                  <p>KoDesk | CoWorking Space In Baner Balewadi</p>
                  <p>From $9.05</p>
                  <p>MOJO STARTUP PVT LTD</p>
                  <div className="followers">
                    <i class="fa-regular fa-circle-user"></i>
                    <p>1.6k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img src={i6} />
                <div className="card-details">
                  <h4 id="sales-and-arrivation">Sales end soon</h4>
                  <h2>Global Startups Club | Startup Networking</h2>
                  <p>Sat, Jun 15 • 1:30 PM</p>
                  <p>KoDesk | CoWorking Space In Baner Balewadi</p>
                  <p>From $9.05</p>
                  <p>MOJO STARTUP PVT LTD</p>
                  <div className="followers">
                    <i class="fa-regular fa-circle-user"></i>
                    <p>1.6k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img src={i6} />
                <div className="card-details">
                  <h4 id="sales-and-arrivation">Sales end soon</h4>
                  <h2>Global Startups Club | Startup Networking</h2>
                  <p>Sat, Jun 15 • 1:30 PM</p>
                  <p>KoDesk | CoWorking Space In Baner Balewadi</p>
                  <p>From $9.05</p>
                  <p>MOJO STARTUP PVT LTD</p>
                  <div className="followers">
                    <i class="fa-regular fa-circle-user"></i>
                    <p>1.6k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img src={i6} />
                <div className="card-details">
                  <h4 id="sales-and-arrivation">Sales end soon</h4>
                  <h2>Global Startups Club | Startup Networking</h2>
                  <p>Sat, Jun 15 • 1:30 PM</p>
                  <p>KoDesk | CoWorking Space In Baner Balewadi</p>
                  <p>From $9.05</p>
                  <p>MOJO STARTUP PVT LTD</p>
                  <div className="followers">
                    <i class="fa-regular fa-circle-user"></i>
                    <p>1.6k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img src={i6} />
                <div className="card-details">
                  <h4 id="sales-and-arrivation">Sales end soon</h4>
                  <h2>Global Startups Club | Startup Networking</h2>
                  <p>Sat, Jun 15 • 1:30 PM</p>
                  <p>KoDesk | CoWorking Space In Baner Balewadi</p>
                  <p>From $9.05</p>
                  <p>MOJO STARTUP PVT LTD</p>
                  <div className="followers">
                    <i class="fa-regular fa-circle-user"></i>
                    <p>1.6k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img src={i6} />
                <div className="card-details">
                  <h4 id="sales-and-arrivation">Sales end soon</h4>
                  <h2>Global Startups Club | Startup Networking</h2>
                  <p>Sat, Jun 15 • 1:30 PM</p>
                  <p>KoDesk | CoWorking Space In Baner Balewadi</p>
                  <p>From $9.05</p>
                  <p>MOJO STARTUP PVT LTD</p>
                  <div className="followers">
                    <i class="fa-regular fa-circle-user"></i>
                    <p>1.6k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img src={i6} />
                <div className="card-details">
                  <h4 id="sales-and-arrivation">Sales end soon</h4>
                  <h2>Global Startups Club | Startup Networking</h2>
                  <p>Sat, Jun 15 • 1:30 PM</p>
                  <p>KoDesk | CoWorking Space In Baner Balewadi</p>
                  <p>From $9.05</p>
                  <p>MOJO STARTUP PVT LTD</p>
                  <div className="followers">
                    <i class="fa-regular fa-circle-user"></i>
                    <p>1.6k followers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img src={i6} />
                <div className="card-details">
                  <h4 id="sales-and-arrivation">Sales end soon</h4>
                  <h2>Global Startups Club | Startup Networking</h2>
                  <p>Sat, Jun 15 • 1:30 PM</p>
                  <p>KoDesk | CoWorking Space In Baner Balewadi</p>
                  <p>From $9.05</p>
                  <p>MOJO STARTUP PVT LTD</p>
                  <div className="followers">
                    <i class="fa-regular fa-circle-user"></i>
                    <p>1.6k followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Cards;
