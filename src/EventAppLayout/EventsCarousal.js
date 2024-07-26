import React, { useEffect, useRef, useState } from "react";
import "./EventsCarousal.css";
import axios from "axios";
import noimage from "./carousalImages/noImage.jpg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EventsCarousal({ propKeyword, propCategory }) {
  const showhideimage = useRef([]);
  const showhidelocation = useRef([]);
  const showhidedetails = useRef([]);
  const navigateCards = useNavigate();
  const slideByButtons = useRef();
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const navigateToMoreDetails = useNavigate();
  const likeornot = useRef([]);
  const [likedEventCount, setLikedEventCount] = useState(0);
  let idmap = new Map();
  const [idMap, setIdMap] = useState(new Map());
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/api/v3/event/getEventsByProps/${propKeyword}?category=${propCategory}`;
    console.log(propKeyword);
    console.log(propCategory);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [propKeyword]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/api/v3/event/getAllEventIds`;

    axios
      .get(url)
      .then((response) => {
        response.data.data.forEach((d) => {
          idmap.set(d._id, false);
        });
        console.log(idmap);
        getTrueValues(idmap);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getTrueValues(imap) {
    console.log(sessionStorage.getItem("id"));
    if (sessionStorage.getItem("id") != null) {
      const url1 = `${
        process.env.REACT_APP_API_URL
      }/api/v3/account/getlikedEventIds/${sessionStorage.getItem("id")}`;
      axios
        .get(url1)
        .then((res) => {
          console.log(res.data.data);
          res.data.data.forEach((el) => {
            console.log(imap.has(el));
            imap.set(el, true);
          });
          console.log(imap);
          setIdMap(imap);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function likeanddislike(eventId, condition, accountId) {
    console.log(idMap);
    console.log(condition);
    const url = `${process.env.REACT_APP_API_URL}/api/v3/account/likedEvent/${eventId}/${accountId}`;
    axios
      .patch(url, {
        isLiked: condition,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {data.length === 0 ? (
        <></>
      ) : (
        <section className="eventsCarousal">
          <div id="eventsCarousalSideMenu">
            <h1>Events in</h1>
            <p>
              {propKeyword === "price" ? "Rs " + propCategory : propKeyword}
            </p>
            <blockquote>
              <p>VIEW ALL</p>
              <button
                onClick={() => {
                  navigateToMoreDetails(
                    `/see-all-events/${propKeyword}/${propCategory}`
                  );
                }}
              >
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </blockquote>
          </div>
          <section className="insideEventCarousalParent">
            <figure
              id="eventsCarousalChevronRight"
              onClick={() => {
                if (slideByButtons.current) {
                  setCount(count + 1);
                  console.log(slideByButtons.current.scrollWidth);
                  console.log(count);

                  if (
                    Math.abs((count + 1) * -500) >=
                    slideByButtons.current.scrollWidth
                  ) {
                    setCount(count);
                  } else {
                    slideByButtons.current.style.transform = `translateX(${
                      -500 * count
                    }px)`;
                    slideByButtons.current.style.transition =
                      "transform 0.5s ease";
                  }
                }
              }}
            >
              <i class="fa-solid fa-chevron-right"></i>
            </figure>
            <figure
              id="eventsCarousalChevronLeft"
              onClick={() => {
                if (slideByButtons.current) {
                  if (count <= 0) {
                    setCount(0);
                    console.log(count);
                  } else {
                    setCount(count - 1);
                    console.log(count);
                    slideByButtons.current.style.transform = `translateX(${
                      -500 * count
                    }px)`;
                    slideByButtons.current.style.transition =
                      "transform 0.5s ease";
                  }
                }
              }}
            >
              <i class="fa-solid fa-chevron-left"></i>
            </figure>

            <section className="insideEventsCarousal" ref={slideByButtons}>
              {data.slice(0, 10).map((databox, index) => (
                <div
                  className="more-card-bodyCarousal"
                  key={index}
                  ref={(el) => (showhidedetails.current[index] = el)}
                  onMouseOver={() => {
                    showhidedetails.current[index].style.width = "30rem";
                    showhidedetails.current[index].style.transition =
                      "width 0.5s ease";
                    showhideimage.current[index].style.display = "block";
                    showhideimage.current[index].style.transition =
                      "width 0.5s ease";
                    showhidelocation.current[index].style.display = "flex";
                    showhidedetails.current[index].style.height = "fit-content";
                  }}
                  onMouseLeave={() => {
                    showhidedetails.current[index].style.width = "30rem";
                    showhidedetails.current[index].style.transition =
                      "width 0.5s ease";
                    showhideimage.current[index].style.display = "none";
                    showhideimage.current[index].style.transition =
                      "width 0.5s ease";
                    showhidelocation.current[index].style.display = "none";
                    showhidedetails.current[index].style.height = "12.2rem";
                  }}
                >
                  <div className="more-card-contentCarousal">
                    <img
                      src={databox.imageurl === "" ? noimage : databox.imageurl}
                      id="showhideimage"
                      style={{ display: "none" }}
                      ref={(el) => (showhideimage.current[index] = el)}
                      onClick={() =>
                        navigateCards(
                          `/event-interface/${databox._id}?location=Nagpur`
                        )
                      }
                    />
                    <div className="more-card-detailsCarousal">
                      <aside>
                        <h4>{databox.title.slice(0, 50)}</h4>
                        <p>
                          {" "}
                          <i class="fa-regular fa-calendar"></i>&nbsp; &nbsp;
                          {databox.dateandtime}
                        </p>

                        <article>
                          <p>
                            <strong>Short Description: </strong>
                            {" " +
                              databox.short_description.slice(0, 50) +
                              "..."}
                            <h4
                              onClick={() =>
                                navigateCards(
                                  `/event-interface/${databox._id}?location=Nagpur`
                                )
                              }
                              style={{ cursor: "pointer" }}
                            >
                              &nbsp;read more
                            </h4>
                          </p>
                        </article>
                        <div
                          id="locationinblockquote"
                          ref={(el) => (showhidelocation.current[index] = el)}
                        >
                          <i class="fa-solid fa-location-dot"></i>
                          <p>{databox.location.replace("Venue", "")}</p>
                        </div>
                      </aside>
                      <figure>
                        <blockquote style={{ marginBottom: "1rem" }}>
                          <i
                            class="fa-solid fa-heart"
                            style={{
                              color:
                                idMap.get(databox._id) === true
                                  ? "red"
                                  : "black",
                            }}
                            ref={(el) => (likeornot.current[index] = el)}
                            onClick={() => {
                              if (sessionStorage.getItem("id") != null) {
                                if (idMap.get(databox._id) === false) {
                                  idMap.set(databox._id, true);
                                  toast.success("Liked Event Successfully", {
                                    position: "bottom-center",
                                  });
                                  likeornot.current[index].style.color = "red";
                                } else {
                                  idMap.set(databox._id, false);
                                  toast.warning("Like Removed Successfully", {
                                    position: "bottom-center",
                                  });
                                  likeornot.current[index].style.color =
                                    "black";
                                }
                                likeanddislike(
                                  databox._id,
                                  idMap.get(databox._id),
                                  sessionStorage.getItem("id")
                                );
                              } else {
                                toast.error(
                                  "Please login in order to Like an Event",
                                  {
                                    position: "bottom-center",
                                  }
                                );
                              }
                            }}
                          ></i>
                          <i class="fa-solid fa-share"></i>
                        </blockquote>

                        <blockquote>
                          <h3>
                            {databox.ticketprice === "" ||
                            databox.ticketprice === 0 ||
                            databox.ticketprice === null ? (
                              "Free"
                            ) : (
                              <h3>
                                {" "}
                                <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                                {databox.ticketprice}
                              </h3>
                            )}
                          </h3>
                        </blockquote>
                        <i class="fa-solid fa-ticket"></i>
                      </figure>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </section>
        </section>
      )}
    </>
  );
}

export default EventsCarousal;
