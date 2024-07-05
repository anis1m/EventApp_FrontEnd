import React, { useEffect, useRef, useState } from "react";
import "./FindParticularEvents.css";
import Navbar from "../EventAppLayout/Navbar";
import { useNavigate, useParams } from "react-router-dom";

function FindParticularEvents() {
  const { location, keyword } = useParams();
  const leftPartOfInsideFilter = useRef();
  const [optionsExpand, setOptionsExpand] = useState(false);
  const seeMoreLess = useRef();
  const [detailsCard, setDetailsCard] = useState([]);
  const navigateToSeeMore = useNavigate();

  const url = `http://127.0.0.1:3500/api/v3/event/getEvent/${location}/${keyword}`;
  useEffect(() => {
    fetch(url)
      .then((response) => {
        const d = response.json();
        return d;
      })
      .then((data) => {
        setDetailsCard(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return (
    <>
      <section className="findParticularEvents">
        <Navbar />
        <aside className="breadCrumb">
          <a>Home</a>
          <p>/</p>
          <a>India</a>
          <p>/</p>
          <a>{location}</a>
          <p>/</p>
          <a>{keyword} Events</a>
        </aside>
        <section className="insideFindParticularEvents">
          <div className="leftPartofFindParticularEvents">
            <aside id="titlePartofFindParticularEvents">
              <h1>
                {keyword} Events in {location}, India
              </h1>
            </aside>
            <div className="leftRightParticular">
              <div className="leftPartofInsideFindParticularEvents">
                <h1>Filters</h1>
                <h4>Category</h4>

                <dl>
                  <dd>
                    <i class="fa-solid fa-business-time"></i>
                    <p>Business</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-burger"></i>
                    <p>Food And Drink</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-notes-medical"></i>
                    <p>Health</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-music"></i>
                    <p>Music</p>
                  </dd>
                </dl>
                <dl id="leftPartOfInsideFilter" ref={leftPartOfInsideFilter}>
                  <dd>
                    <i class="fa-solid fa-car"></i>
                    <p>Auto, Boat & Air</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-gift"></i>
                    <p>Charity & Causes</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-group-arrows-rotate"></i>
                    <p>Community</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-school"></i>
                    <p>Family & Education</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-shirt"></i>
                    <p>Fashion</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-film"></i>
                    <p>Film & Media</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-gamepad"></i>
                    <p>Hobbies</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-house"></i>
                    <p>Home & Lifestyle</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-masks-theater"></i>
                    <p>Performing & Visual Arts</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-tower-broadcast"></i>
                    <p>Government</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-star-of-life"></i>
                    <p>Spirituality</p>
                  </dd>
                  <dd>
                    <i class="fa-regular fa-clipboard"></i>
                    <p>School Activities</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-flask"></i>
                    <p>Science & Tech</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-mug-hot"></i>
                    <p>Holidays</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-dumbbell"></i>
                    <p>Sports & Fitness</p>
                  </dd>
                  <dd>
                    <i class="fa-solid fa-bag-shopping"></i>
                    <p>Travel & Outdoor</p>
                  </dd>
                  <dd>
                    <i class="fa-regular fa-star"></i>
                    <p>Others</p>
                  </dd>
                </dl>
                <button
                  onClick={() => {
                    if (!optionsExpand) {
                      leftPartOfInsideFilter.current.style.display = "block";
                      seeMoreLess.current.textContent = "View Less";
                      setOptionsExpand(true);
                    } else {
                      leftPartOfInsideFilter.current.style.display = "none";
                      seeMoreLess.current.textContent = "View More";
                      setOptionsExpand(false);
                    }
                  }}
                  ref={seeMoreLess}
                >
                  View More
                </button>
                <h4>Date</h4>
                <ul>
                  <li>
                    <input type="radio" />
                    <label>Today</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>Tomorrow</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>This Weekend</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>Pick a Date</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>This Week</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>Next Week</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>This Month</label>
                  </li>
                  <li>
                    <input type="radio" />
                    <label>Next Month</label>
                  </li>
                </ul>
              </div>
              <div className="RightPartofInsideFindParticularEvents">
                {detailsCard.length === 0 ? (
                  <p
                    style={{
                      margin: "19rem 22rem",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                    }}
                  >
                    Nothing to Show
                  </p>
                ) : (
                  detailsCard.map((databox, index) => (
                    <div style={{ position: "relative" }}>
                      <div
                        className="detailTileLayoutofParticularEvent"
                        key={index}
                      >
                        <img
                          src={databox.imageurl}
                          onClick={() =>
                            navigateToSeeMore(`/event-interface/${databox._id}`)
                          }
                        />
                        <aside>
                          <h2
                            onClick={() =>
                              navigateToSeeMore(
                                `/event-interface/${databox._id}`
                              )
                            }
                            style={{ cursor: "pointer" }}
                          >
                            {databox.title}
                          </h2>
                          <p>{databox.dateandtime}</p>
                          <p>{databox.hostebylocation}</p>
                          <p>{databox.ticketPrice}</p>
                        </aside>
                      </div>
                      <figure>
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-upload"></i>
                      </figure>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="rightPartofFindParticularEvents"></div>
        </section>
      </section>
    </>
  );
}

export default FindParticularEvents;
