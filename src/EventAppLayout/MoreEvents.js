import React, { useRef, useState } from "react";
import i7 from "./carousalImages/i7.png";
import "./MoreEvents.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MoreEvents({ moreEventsData, pageandlimitset }) {
  const showhideimage = useRef([]);
  const maskiconshowhide = useRef([]);
  const navigateCards = useNavigate();
  const [itemstoshow, setItemstoshow] = useState(2);
  const showhidedetails = useRef([]);

  return (
    <>
      <section className="moreeventBoxes">
        <h2 id="moretextEvent">More Events</h2>
        <section className="morecardBoxes">
          {moreEventsData.length === 0 ? (
            <i
              class="fa-solid fa-spinner fa-spin"
              style={{ fontSize: "5rem", margin: "8rem 45% 0 45%" }}
            ></i>
          ) : (
            moreEventsData.map((databox, index) => (
              <div key={index} className="more-card-body">
                <div className="more-card-content">
                  <div
                    className="more-card-details"
                    onClick={() =>
                      navigateCards(
                        `/event-interface/${databox._id}?location=Nagpur`
                      )
                    }
                  >
                    {/*<p>{databox.hostebylocation}</p>*/}
                    <figure>
                      <i class="fa-regular fa-heart"></i>
                      <i class="fa-solid fa-share"></i>
                    </figure>
                    <p>
                      <strong>Title: </strong>{" "}
                      {" " + databox.title.slice(0, 50) + "....."}
                    </p>
                    <aside>
                      <p>{databox.dateandtime}</p>
                      <blockquote>
                        <i class="fa-solid fa-ticket"></i>
                        <h4>
                          {databox.ticketprice === "" ||
                          databox.ticketprice === 0
                            ? "Free"
                            : databox.ticketprice}
                        </h4>
                      </blockquote>
                    </aside>
                    <article>
                      <p>
                        <strong>Short Description: </strong>
                        {" " + databox.short_description.slice(0, 40)}
                        <h4>&nbsp;read more .....</h4>
                      </p>
                    </article>
                    {/*
                    <blockquote>
                      <p>{databox.description.slice(0, 20)}</p>
                      <p
                        onMouseEnter={() => {
                          showhidedetails.current[index].style.display =
                            "block";
                        }}
                        onMouseLeave={() => {
                          showhidedetails.current[index].style.display = "none";
                        }}
                      >
                        ......
                      </p>
                    </blockquote>*/}
                    {/*
                    <aside
                      id="hovertoseefulldescription"
                      ref={(el) => (showhidedetails.current[index] = el)}
                    >
                      <p>{databox.description}</p>
                    </aside>*/}
                  </div>
                  {/*
                  <i
                    class="fa-regular fa-image"
                    id="maskImage"
                    ref={(el) => (maskiconshowhide.current[index] = el)}
                    onMouseEnter={() => {
                      maskiconshowhide.current[index].style.display = "none";
                      showhideimage.current[index].hidden = false;
                      showhideimage.current[index].src = databox.imageurl;
                    }}
                    onMouseLeave={() => {
                      maskiconshowhide.current[index].style.display = "block";
                      showhideimage.current[index].hidden = true;
                      showhideimage.current[index].src = "";
                    }}
                  ></i>*/}
                  <img src={databox.fullUrl} id="showhideimage" hidden />
                </div>
              </div>
            ))
          )}
        </section>

        {moreEventsData.length > 0 ||
        moreEventsData.length < moreEventsData.length ? (
          <button
            id="seeMore"
            onClick={() => {
              setItemstoshow(itemstoshow + 1);
              pageandlimitset(itemstoshow, 20);
            }}
          >
            See More
          </button>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default MoreEvents;
