import React, { useRef, useState } from "react";
import "./CreateEventForm.css";
import Navbar from "../EventAppLayout/Navbar";
import { useNavigate } from "react-router-dom";
import uploadimage from "../EventAppLayout/carousalImages/uploadImage.jpg";

function CreateEventForm() {
  const [fileinfo, setFileinfo] = useState(null);
  const [dateTimeFields, setDateTimeFields] = useState([
    { date: "", start: "", end: "" },
  ]);

  const priceFreeorNot = useRef();

  const [isShrunk, setIsShrunk] = useState(false);
  const fieldsDateTime = useRef([]);

  const addDateTimeField = (e) => {
    e.preventDefault();
    setDateTimeFields([...dateTimeFields, { date: "", start: "", end: "" }]);
    console.log(dateTimeFields.length);
    if (dateTimeFields.length > 1) {
      setIsShrunk(true);
    }
    if (dateTimeFields.length === 1) {
      setIsShrunk(false);
    }
  };

  const handleDateTimeChange = (index, field, value) => {
    const newFields = [...dateTimeFields];
    newFields[index][field] = value;
    setDateTimeFields(newFields);
  };

  const navigateTo = useNavigate();
  return (
    <>
      <section className="createEventForm">
        <Navbar />
        <form>
          <section className="insideCreateEventForm">
            <div className="leftsideinsideCreateEventForm">
              <h2>Create an Event</h2>
              <input type="text" placeholder="What's the name of event" />
              <textarea placeholder="Description of Event" rows={10}></textarea>
              <h3>Instructions of Event</h3>
              <textarea rows={15}></textarea>
            </div>
            <div className="rightsideinsideCreateEventForm">
              <figure className="part1rightsideinsideCreateEventForm">
                <aside>
                  <h3>Venue</h3>
                  <div>
                    {dateTimeFields.map((fields, index) => (
                      <dl ref={(el) => (fieldsDateTime.current[index] = el)}>
                        <dd>
                          <input type="date" placeholder="dd-MM-yyyy" />
                        </dd>
                        <dd>
                          <input type="time" placeholder="Start" />
                        </dd>
                        <dd>
                          <input type="time" placeholder="End" />
                        </dd>
                        <button onClick={addDateTimeField}>
                          <i class="fa-solid fa-plus"></i>
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (fieldsDateTime.current.length > 1) {
                              try {
                                fieldsDateTime.current[index].style.display =
                                  "none";
                              } catch (err) {
                                console.log(err);
                              }
                              if (fieldsDateTime.current.length > 1) {
                                fieldsDateTime.current.splice(index, 1);
                                console.log(fieldsDateTime.current.length);
                              }
                              if (fieldsDateTime.current.length === 1) {
                                setIsShrunk(false);
                              }
                            }
                          }}
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                      </dl>
                    ))}
                  </div>
                </aside>
                <aside>
                  <h3>Location</h3>
                  <blockquote>
                    <i class="fa-solid fa-search"></i>
                    <input type="search" placeholder="Location" />
                  </blockquote>
                </aside>
              </figure>
              <div className="part2part3rightsideinsideCreateEventForm">
                <figure className="part2rightsideinsideCreateEventForm">
                  <aside>
                    <h3>How much do you charge</h3>
                    <div>
                      <blockquote ref={priceFreeorNot}>
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        <input type="number" />
                      </blockquote>
                      <blockquote>
                        <input
                          type="checkbox"
                          style={{
                            display: "inline-block",
                            width: "1.2rem",
                            height: "1.2rem",
                          }}
                          onClick={(e) => {
                            if (e.target.checked === true) {
                              priceFreeorNot.current.style.backgroundColor =
                                "whitesmoke";
                              priceFreeorNot.current.querySelector(
                                "input"
                              ).disabled = true;
                              priceFreeorNot.current.querySelector(
                                "input"
                              ).value = 0;
                            } else {
                              priceFreeorNot.current.style.backgroundColor =
                                "white";
                              priceFreeorNot.current.querySelector(
                                "input"
                              ).disabled = false;
                            }
                          }}
                        />
                        <label>My Tickets are Free</label>
                      </blockquote>
                    </div>
                    <h3>Capacity of Event</h3>
                    <input
                      type="number"
                      placeholder="Total no. of tickets willing to sell"
                      style={{
                        padding: "0.5rem 1rem",
                        border: "1px solid lightgray",
                        width: "300px",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                      }}
                    />
                    <figure>
                      <img
                        src={
                          fileinfo ? URL.createObjectURL(fileinfo) : uploadimage
                        }
                      />
                      <h5>Drag and Drop or Click to choose image</h5>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setFileinfo(e.target.files[0])}
                      />
                    </figure>
                  </aside>
                </figure>
                <figure className="part3rightsideinsideCreateEventForm">
                  <aside>
                    <h3>Dignitary Details</h3>
                    <form>
                      <label>Name</label>
                      <input type="text" placeholder="Enter Name Here" />
                      <label>Email</label>
                      <input type="email" placeholder="Enter Email Here" />
                      <label>Phone No.</label>
                      <input type="number" placeholder="Enter Phone No. Here" />
                    </form>
                  </aside>
                </figure>
              </div>
              <figure className="part4rightsideinsideCreateEventForm">
                <aside>
                  <h3>Things to carry</h3>
                  <ul className={isShrunk ? "shrink" : ""}>
                    <li>
                      <input type="checkbox" value="Tickets" />
                      <label>Tickets</label>
                    </li>
                    <li>
                      <input type="checkbox" value="ID Proof" />
                      <label>ID Proof</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Event Schedule" />
                      <label>Event Schedule</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Invitation Cards" />
                      <label>Invitation Cards</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Water Bottle" />
                      <label>Water Bottle</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Snacks" />
                      <label>Snacks</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Mobile Phone" />
                      <label>Mobile Phone</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Charger" />
                      <label>Charger</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Power Bank" />
                      <label>Power Bank</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Cash" />
                      <label>Cash</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Credit/Debit Cards" />
                      <label>Credit/Debit Cards</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Sunscreen" />
                      <label>Sunscreen</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Sunglasses" />
                      <label>Sunglasses</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Hat" />
                      <label>Hat</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Umbrella" />
                      <label>Umbrella</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Jacket" />
                      <label>Jacket</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Comfortable Shoes" />
                      <label>Comfortable Shoes</label>
                    </li>
                    <li>
                      <input type="checkbox" value="First Aid Kit" />
                      <label>First Aid Kit</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Medications" />
                      <label>Medications</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Hand Sanitizer" />
                      <label>Hand Sanitizer</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Face Masks" />
                      <label>Face Masks</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Tissues" />
                      <label>Tissues</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Notepad" />
                      <label>Notepad</label>
                    </li>
                  </ul>
                </aside>
                <aside>
                  <h3>Food Arrangements</h3>
                  <ul className={isShrunk ? "shrink" : ""}>
                    <li>
                      <input type="checkbox" value="Appetizers" />
                      <label>Appetizers</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Salads" />
                      <label>Salads</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Main Courses" />
                      <label>Main Courses</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Vegetarian Options" />
                      <label>Vegetarian Options</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Vegan Options" />
                      <label>Vegan Options</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Gluten-Free Options" />
                      <label>Gluten-Free Options</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Seafood" />
                      <label>Seafood</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Meat Dishes" />
                      <label>Meat Dishes</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Side Dishes" />
                      <label>Side Dishes</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Bread and Rolls" />
                      <label>Bread and Rolls</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Desserts" />
                      <label>Desserts</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Fruits" />
                      <label>Fruits</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Cheese Platter" />
                      <label>Cheese Platter</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Beverages" />
                      <label>Beverages</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Soft Drinks" />
                      <label>Soft Drinks</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Water" />
                      <label>Water</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Juices" />
                      <label>Juices</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Coffee" />
                      <label>Coffee</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Tea" />
                      <label>Tea</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Alcoholic Beverages" />
                      <label>Alcoholic Beverages</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Wine" />
                      <label>Wine</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Beer" />
                      <label>Beer</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Cocktails" />
                      <label>Cocktails</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Specialty Drinks" />
                      <label>Specialty Drinks</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Snacks" />
                      <label>Snacks</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Chips" />
                      <label>Chips</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Nuts" />
                      <label>Nuts</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Dips and Sauces" />
                      <label>Dips and Sauces</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Finger Foods" />
                      <label>Finger Foods</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Pastries" />
                      <label>Pastries</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Sandwiches" />
                      <label>Sandwiches</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Wraps" />
                      <label>Wraps</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Pizza" />
                      <label>Pizza</label>
                    </li>
                    <li>
                      <input type="checkbox" value="BBQ" />
                      <label>BBQ</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Grilled Vegetables" />
                      <label>Grilled Vegetables</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Pasta" />
                      <label>Pasta</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Rice Dishes" />
                      <label>Rice Dishes</label>
                    </li>
                  </ul>
                </aside>
                <aside>
                  <h3>Utilities</h3>
                  <ul className={isShrunk ? "shrink" : ""}>
                    <li>
                      <input type="checkbox" value="Electricity" />
                      <label>Electricity</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Generators" />
                      <label>Generators</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Extension Cords" />
                      <label>Extension Cords</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Power Strips" />
                      <label>Power Strips</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Backup Batteries" />
                      <label>Backup Batteries</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Water" />
                      <label>Water</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Drinking Water Stations" />
                      <label>Drinking Water Stations</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Bottled Water" />
                      <label>Bottled Water</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Portable Restrooms" />
                      <label>Portable Restrooms</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Handwashing Stations" />
                      <label>Handwashing Stations</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Waste Disposal Bins" />
                      <label>Waste Disposal Bins</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Recycling Stations" />
                      <label>Recycling Stations</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Cleaning Supplies" />
                      <label>Cleaning Supplies</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Internet Access" />
                      <label>Internet Access</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Wi-Fi Hotspots" />
                      <label>Wi-Fi Hotspots</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Mobile Data Services" />
                      <label>Mobile Data Services</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Ethernet Cables" />
                      <label>Ethernet Cables</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Walkie-Talkies" />
                      <label>Walkie-Talkies</label>
                    </li>
                    <li>
                      <input type="checkbox" value="PA Systems" />
                      <label>PA Systems</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Backup Phones" />
                      <label>Backup Phones</label>
                    </li>
                    <li>
                      <input type="checkbox" value="First Aid Kits" />
                      <label>First Aid Kits</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Medical Personnel" />
                      <label>Medical Personnel</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Security Personnel" />
                      <label>Security Personnel</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Surveillance Cameras" />
                      <label>Surveillance Cameras</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        value="Emergency Evacuation Plans"
                      />
                      <label>Emergency Evacuation Plans</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Fire Extinguishers" />
                      <label>Fire Extinguishers</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Smoke Detectors" />
                      <label>Smoke Detectors</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Heaters" />
                      <label>Heaters</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Fans" />
                      <label>Fans</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Air Conditioning Units" />
                      <label>Air Conditioning Units</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Portable Coolers" />
                      <label>Portable Coolers</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Chairs" />
                      <label>Chairs</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Tables" />
                      <label>Tables</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Tents" />
                      <label>Tents</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Shade Structures" />
                      <label>Shade Structures</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Ramps" />
                      <label>Ramps</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Accessible Restrooms" />
                      <label>Accessible Restrooms</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Accessible Seating" />
                      <label>Accessible Seating</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Microphones" />
                      <label>Microphones</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Speakers" />
                      <label>Speakers</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Sound Systems" />
                      <label>Sound Systems</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Projectors" />
                      <label>Projectors</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Screens" />
                      <label>Screens</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Monitors" />
                      <label>Monitors</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Lighting Equipment" />
                      <label>Lighting Equipment</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Kitchen Equipment" />
                      <label>Kitchen Equipment</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Serving Utensils" />
                      <label>Serving Utensils</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Dishes" />
                      <label>Dishes</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Refrigeration Units" />
                      <label>Refrigeration Units</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Shuttle Services" />
                      <label>Shuttle Services</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Parking Attendants" />
                      <label>Parking Attendants</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Parking Signage" />
                      <label>Parking Signage</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Bike Racks" />
                      <label>Bike Racks</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Valet Services" />
                      <label>Valet Services</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        value="Event Management Software"
                      />
                      <label>Event Management Software</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Registration Platforms" />
                      <label>Registration Platforms</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Ticketing Platforms" />
                      <label>Ticketing Platforms</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Scheduling Tools" />
                      <label>Scheduling Tools</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Printing Facilities" />
                      <label>Printing Facilities</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Copying Facilities" />
                      <label>Copying Facilities</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Stationery" />
                      <label>Stationery</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Signage Materials" />
                      <label>Signage Materials</label>
                    </li>
                    <li>
                      <input type="checkbox" value="On-Site Staff" />
                      <label>On-Site Staff</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Volunteers" />
                      <label>Volunteers</label>
                    </li>
                    <li>
                      <input type="checkbox" value="Coordination Areas" />
                      <label>Coordination Areas</label>
                    </li>
                  </ul>
                </aside>
              </figure>
            </div>
          </section>
          <button
            id="ifCoHostcreateEventForm"
            onClick={() => {
              navigateTo("/create-event/co-host-form");
            }}
          >
            If Co-host
          </button>
          <button
            type="submit"
            id="ifCoHostcreateEventForm"
            onClick={() => {
              navigateTo("/create-event/organizer-form");
            }}
          >
            Continue
          </button>
        </form>
      </section>
    </>
  );
}

export default CreateEventForm;
