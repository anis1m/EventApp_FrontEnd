import React, { useRef, useState } from "react";
import "./Step2.css";
import logo from "../EventAppLayout/carousalImages/logo (1).png";
import { Link } from "react-router-dom";

function Step2() {
  const show = useRef();
  const hide = useRef();
  const pricefreeornot = useRef();
  const disabledenabled = useRef();
  const step2ticketprice = useRef();
  const onlineEventShowHide = useRef();
  const eventonvenue = useRef();
  const locationEvent = useRef();
  const onlineEvent = useRef();
  const tobeannounced = useRef();
  const [condition, setCondition] = useState("");

  function toshow() {
    show.current.style.display = "block";
    hide.current.style.display = "none";
  }

  function pricenotfree() {
    if (pricefreeornot.current.checked) {
      disabledenabled.current.disabled = true;
      disabledenabled.current.value = 0;
      step2ticketprice.current.style.backgroundColor = "whitesmoke";
      step2ticketprice.current.style.border = "1px solid lightgray";
    } else {
      disabledenabled.current.disabled = false;
      step2ticketprice.current.style.backgroundColor = "white";
      step2ticketprice.current.style.border = "1px solid black";
    }
  }

  const handleVenueClick = () => {
    setCondition("Venue Event");
    updateStyles("Venue Event");
  };

  const handleOnlineClick = () => {
    setCondition("Online Event");
    updateStyles("Online Event");
  };

  function handleTobeAnnouncedClick() {
    setCondition("To be announced");
    updateStyles("To be announced");
  }

  function updateStyles(condition) {
    if (condition === "Venue Event") {
      locationEvent.current.style.backgroundColor = "blue";
      locationEvent.current.style.color = "white";
      eventonvenue.current.style.display = "block";
      hide.current.style.display = "block";

      onlineEvent.current.style.backgroundColor = "white";
      onlineEvent.current.style.color = "black";
      onlineEventShowHide.current.style.display = "none";

      tobeannounced.current.style.backgroundColor = "white";
      tobeannounced.current.style.color = "black";
    } else if (condition === "Online Event") {
      onlineEvent.current.style.backgroundColor = "blue";
      onlineEvent.current.style.color = "white";
      onlineEventShowHide.current.style.display = "block";

      locationEvent.current.style.backgroundColor = "white";
      locationEvent.current.style.color = "black";
      eventonvenue.current.style.display = "none";
      hide.current.style.display = "none";
      show.current.style.display = "none";

      tobeannounced.current.style.backgroundColor = "white";
      tobeannounced.current.style.color = "black";
    } else if (condition === "To be announced") {
      tobeannounced.current.style.backgroundColor = "blue";
      tobeannounced.current.style.color = "white";

      locationEvent.current.style.backgroundColor = "white";
      locationEvent.current.style.color = "black";
      eventonvenue.current.style.display = "none";
      hide.current.style.display = "none";
      show.current.style.display = "none";

      onlineEvent.current.style.backgroundColor = "white";
      onlineEvent.current.style.color = "black";
      onlineEventShowHide.current.style.display = "none";
    }
  }

  return (
    <>
      <section className="step">
        <section>
          <section className="step2">
            <Link to={"/"}>
              <img src={logo} id="logo" />
            </Link>
            <div className="insideStep2">
              <h4>Step 2 of 3: Create your event</h4>
              <h2>Create An Event</h2>
              <h3>What's the name of your event?</h3>
              <input
                type="text"
                placeholder="Enter Event Title*"
                id="step2eventTitle"
              />
              <h3>What's the event description?</h3>
              <textarea rows="10" placeholder="Enter Event Description" />
              <h3>When does your event start and end?</h3>
              <aside id="step2DateTime">
                <input type="date" id="step2Date" />
                <input type="time" id="step2Time" />
                <input type="time" id="step2Time" />
              </aside>
              <h3>where is it located?</h3>
              <div id="step2located">
                <button onClick={handleVenueClick} ref={locationEvent}>
                  <p>
                    <i class="fa-solid fa-location-dot"></i>
                    Venue
                  </p>
                </button>
                <button ref={onlineEvent} onClick={handleOnlineClick}>
                  <p>
                    <i class="fa-solid fa-film"></i>
                    Online Event
                  </p>
                </button>
                <button ref={tobeannounced} onClick={handleTobeAnnouncedClick}>
                  <p>
                    <i class="fa-regular fa-calendar"></i>
                    To be announced
                  </p>
                </button>
              </div>
              <aside id="step2location" ref={eventonvenue}>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Location*" />
              </aside>
              <button id="step2morelocationdetail" ref={hide} onClick={toshow}>
                <h4>
                  <i class="fa-solid fa-house"></i> Add Location Details
                </h4>
              </button>
              <div
                style={{ display: "none" }}
                ref={show}
                id="step2aptregioncontainer"
              >
                <aside id="step2aptregion">
                  <input type="text" placeholder="Apartment, suite, etc." />
                  <input type="text" placeholder="Region" />
                </aside>
                <input type="text" placeholder="Venue name*" id="step2venue" />
              </div>

              <p style={{ display: "none" }} ref={onlineEventShowHide}>
                Online events have unique event pages where you can add links to
                livestreams and more
              </p>
              <h3>How much do you want to charge for tickets?</h3>
              <aside id="step2ticketprice" ref={step2ticketprice}>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <input type="number" placeholder="0.00" ref={disabledenabled} />
              </aside>
              <aside id="step2freetickets">
                <input
                  type="checkbox"
                  ref={pricefreeornot}
                  onChange={pricenotfree}
                />
                <h4>My tickets are free</h4>
              </aside>
              <h3 id="step2eventcapacity">Whats the capacity of your event?</h3>
              <p>
                Event capacity is the total number of tickets you're willing to
                sell.
              </p>
              <input type="number" placeholder="0" id="step2capacityNumber" />
              <h3>Whats the instructions for Event?</h3>
              <textarea
                type="text"
                placeholder="Enter Instructions Here"
                id="instructions"
                rows="5"
              />

              <h3>Select the Things to carry</h3>

              <div className="gridPanel">
                <aside>
                  <input type="checkbox" value="Tickets" />
                  <label>Tickets</label>
                </aside>
                <aside>
                  <input type="checkbox" value="ID Proof" />
                  <label>ID Proof</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Event Schedule" />
                  <label>Event Schedule</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Invitation Cards" />
                  <label>Invitation Cards</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Water Bottle" />
                  <label>Water Bottle</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Snacks" />
                  <label>Snacks</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Mobile Phone" />
                  <label>Mobile Phone</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Charger" />
                  <label>Charger</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Power Bank" />
                  <label>Power Bank</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Cash" />
                  <label>Cash</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Credit/Debit Cards" />
                  <label>Credit/Debit Cards</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Sunscreen" />
                  <label>Sunscreen</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Sunglasses" />
                  <label>Sunglasses</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Hat" />
                  <label>Hat</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Umbrella" />
                  <label>Umbrella</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Jacket" />
                  <label>Jacket</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Comfortable Shoes" />
                  <label>Comfortable Shoes</label>
                </aside>
                <aside>
                  <input type="checkbox" value="First Aid Kit" />
                  <label>First Aid Kit</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Medications" />
                  <label>Medications</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Hand Sanitizer" />
                  <label>Hand Sanitizer</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Face Masks" />
                  <label>Face Masks</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Tissues" />
                  <label>Tissues</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Notepad" />

                  <label>Notepad</label>
                </aside>
              </div>
              <h3>Select the Food needs to be arranged</h3>
              <div className="gridPanel">
                <aside>
                  <input type="checkbox" value="Appetizers" />
                  <label>Appetizers</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Salads" />
                  <label>Salads</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Main Courses" />
                  <label>Main Courses</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Vegetarian Options" />
                  <label>Vegetarian Options</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Vegan Options" />
                  <label>Vegan Options</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Gluten-Free Options" />
                  <label>Gluten-Free Options</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Seafood" />
                  <label>Seafood</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Meat Dishes" />
                  <label>Meat Dishes</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Side Dishes" />
                  <label>Side Dishes</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Bread and Rolls" />
                  <label>Bread and Rolls</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Desserts" />
                  <label>Desserts</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Fruits" />
                  <label>Fruits</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Cheese Platter" />
                  <label>Cheese Platter</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Beverages" />
                  <label>Beverages</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Soft Drinks" />
                  <label>Soft Drinks</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Water" />
                  <label>Water</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Juices" />
                  <label>Juices</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Coffee" />
                  <label>Coffee</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Tea" />
                  <label>Tea</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Alcoholic Beverages" />
                  <label>Alcoholic Beverages</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Wine" />
                  <label>Wine</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Beer" />
                  <label>Beer</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Cocktails" />
                  <label>Cocktails</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Specialty Drinks" />
                  <label>Specialty Drinks</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Snacks" />
                  <label>Snacks</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Chips" />
                  <label>Chips</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Nuts" />
                  <label>Nuts</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Dips and Sauces" />
                  <label>Dips and Sauces</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Finger Foods" />
                  <label>Finger Foods</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Pastries" />
                  <label>Pastries</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Sandwiches" />
                  <label>Sandwiches</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Wraps" />
                  <label>Wraps</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Pizza" />
                  <label>Pizza</label>
                </aside>
                <aside>
                  <input type="checkbox" value="BBQ" />
                  <label>BBQ</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Grilled Vegetables" />
                  <label>Grilled Vegetables</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Pasta" />
                  <label>Pasta</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Rice Dishes" />
                  <label>Rice Dishes</label>
                </aside>
              </div>
              <h3>Select the Utilities required</h3>
              <div className="gridPanel">
                <aside>
                  <input type="checkbox" value="Electricity" />
                  <label>Electricity</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Generators" />
                  <label>Generators</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Extension Cords" />
                  <label>Extension Cords</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Power Strips" />
                  <label>Power Strips</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Backup Batteries" />
                  <label>Backup Batteries</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Water" />
                  <label>Water</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Drinking Water Stations" />
                  <label>Drinking Water Stations</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Bottled Water" />
                  <label>Bottled Water</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Portable Restrooms" />
                  <label>Portable Restrooms</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Handwashing Stations" />
                  <label>Handwashing Stations</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Waste Disposal Bins" />
                  <label>Waste Disposal Bins</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Recycling Stations" />
                  <label>Recycling Stations</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Cleaning Supplies" />
                  <label>Cleaning Supplies</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Internet Access" />
                  <label>Internet Access</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Wi-Fi Hotspots" />
                  <label>Wi-Fi Hotspots</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Mobile Data Services" />
                  <label>Mobile Data Services</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Ethernet Cables" />
                  <label>Ethernet Cables</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Walkie-Talkies" />
                  <label>Walkie-Talkies</label>
                </aside>
                <aside>
                  <input type="checkbox" value="PA Systems" />
                  <label>PA Systems</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Backup Phones" />
                  <label>Backup Phones</label>
                </aside>
                <aside>
                  <input type="checkbox" value="First Aid Kits" />
                  <label>First Aid Kits</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Medical Personnel" />
                  <label>Medical Personnel</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Security Personnel" />
                  <label>Security Personnel</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Surveillance Cameras" />
                  <label>Surveillance Cameras</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Emergency Evacuation Plans" />
                  <label>Emergency Evacuation Plans</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Fire Extinguishers" />
                  <label>Fire Extinguishers</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Smoke Detectors" />
                  <label>Smoke Detectors</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Heaters" />
                  <label>Heaters</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Fans" />
                  <label>Fans</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Air Conditioning Units" />
                  <label>Air Conditioning Units</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Portable Coolers" />
                  <label>Portable Coolers</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Chairs" />
                  <label>Chairs</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Tables" />
                  <label>Tables</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Tents" />
                  <label>Tents</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Shade Structures" />
                  <label>Shade Structures</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Ramps" />
                  <label>Ramps</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Accessible Restrooms" />
                  <label>Accessible Restrooms</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Accessible Seating" />
                  <label>Accessible Seating</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Microphones" />
                  <label>Microphones</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Speakers" />
                  <label>Speakers</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Sound Systems" />
                  <label>Sound Systems</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Projectors" />
                  <label>Projectors</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Screens" />
                  <label>Screens</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Monitors" />
                  <label>Monitors</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Lighting Equipment" />
                  <label>Lighting Equipment</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Kitchen Equipment" />
                  <label>Kitchen Equipment</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Serving Utensils" />
                  <label>Serving Utensils</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Dishes" />
                  <label>Dishes</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Refrigeration Units" />
                  <label>Refrigeration Units</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Shuttle Services" />
                  <label>Shuttle Services</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Parking Attendants" />
                  <label>Parking Attendants</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Parking Signage" />
                  <label>Parking Signage</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Bike Racks" />
                  <label>Bike Racks</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Valet Services" />
                  <label>Valet Services</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Event Management Software" />
                  <label>Event Management Software</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Registration Platforms" />
                  <label>Registration Platforms</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Ticketing Platforms" />
                  <label>Ticketing Platforms</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Scheduling Tools" />
                  <label>Scheduling Tools</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Printing Facilities" />
                  <label>Printing Facilities</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Copying Facilities" />
                  <label>Copying Facilities</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Stationery" />
                  <label>Stationery</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Signage Materials" />
                  <label>Signage Materials</label>
                </aside>
                <aside>
                  <input type="checkbox" value="On-Site Staff" />
                  <label>On-Site Staff</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Volunteers" />
                  <label>Volunteers</label>
                </aside>
                <aside>
                  <input type="checkbox" value="Coordination Areas" />
                  <label>Coordination Areas</label>
                </aside>
              </div>
            </div>
          </section>
          <footer className="step2bottom">
            <Link to={"/create-event/organizer-form"}>
              <button>Continue</button>
            </Link>
          </footer>
        </section>
      </section>
    </>
  );
}

export default Step2;
