import React, { useRef, useState } from "react";
import "./EventRegisteration.css";
import { Link } from "react-router-dom";

function EventRegisteration() {
  const [options, setOptions] = useState(false);
  const optionsMore = useRef();
  const optionsAnother = useRef();
  const textChange = useRef();

  function moreOptions() {
    if (!options) {
      if (optionsMore.current && optionsAnother.current && textChange.current) {
        optionsMore.current.style.display = "none";
        optionsAnother.current.style.display = "block";
        textChange.current.innerHTML = "< Back ";

        setOptions(true);
      }
    } else {
      optionsMore.current.style.display = "block";
      optionsAnother.current.style.display = "none";
      textChange.current.innerHTML = "More Options +";
      setOptions(false);
    }
  }
  return (
    <>
      <section className="eventRegisteration">
        <section className="insideEventRegisteration">
          <div className="EventRegisterationProcess">
            <div className="insideEventRegisterationProcess">
              <h4>Step 1 of 3: About You</h4>
              <p id="know_You">Let's get to know you first!</p>
              <p>
                Tell us what kind of events you want to host and we’ll help make
                it happen.
              </p>
              <p id="kindOfEvent">What type of events do you host?*</p>
              <aside ref={optionsMore}>
                <button>Comedy</button>
                <button>Food & Drink</button>
                <button>Music</button>
                <button>Community & Culture</button>
                <button>Hobbies & Special Interest</button>
                <button>Performing & Visual Arts</button>
                <button>Parties</button>
              </aside>
              <aside ref={optionsAnother} style={{ display: "none" }}>
                <button>Fashion & Beauty</button>
                <button>Business & Professional</button>
                <button>Non-Profit</button>
                <button>Religion & Spirituality</button>
                <button>Family & Education</button>
                <button>Health & Wellness</button>
                <button>Events Company, Agency, or Promoter</button>
                <button>Sports & Fitness</button>
                <button>Other</button>
              </aside>
              <p id="moreOptions" ref={textChange} onClick={moreOptions}>
                More Options +
              </p>
              <aside id="numberOfEvents">
                <p>
                  How many events do you plan to organize in the next year?*
                </p>
                <select>
                  <option selected disabled hidden>
                    Number of events
                  </option>
                  <option>Just one event</option>
                  <option>2-5 events</option>
                  <option>5-10 events</option>
                  <option>10-25 events</option>
                  <option>More than 25 events</option>
                  <option>I'm not sure yet</option>
                </select>
              </aside>
              <aside id="numberOfEvents">
                <p>On average, how big are your events?*</p>
                <select>
                  <option selected disabled hidden>
                    Number of people
                  </option>
                  <option>Upto 25 people</option>
                  <option>Upto 100 people</option>
                  <option>Upto 250 people</option>
                  <option>More than 250 people</option>
                  <option>I'm not sure yet</option>
                </select>
              </aside>
              <Link to={"/event-create"} style={{ textDecoration: "none" }}>
                <button id="submitFirstStep">Continue</button>
              </Link>
            </div>
          </div>
          <div id="eventmanagementicon">
            <img src="/images_/eventmanagement.jpg" />
          </div>
        </section>
      </section>
    </>
  );
}

export default EventRegisteration;
