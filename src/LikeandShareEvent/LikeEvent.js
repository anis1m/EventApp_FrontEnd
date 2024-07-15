import React, { useEffect, useState, useRef } from "react";
import AccountNavigation from "../ProfileSection/AccountNavigation";
import axios from "axios";
import noimage from "../EventAppLayout/carousalImages/noImage.jpg";
import { useNavigate } from "react-router-dom";
import "./LikeEvent.css";
import { InfinitySpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LikeEvent() {
  let idmap = new Map();
  const [idMap, setIdMap] = useState(new Map());
  const [likedCardData, setLikedCardData] = useState([]);
  const showhidedetails = useRef([]);
  const showhideimage = useRef([]);
  const showhidelocation = useRef([]);
  const navigateCards = useNavigate();
  const likeornot = useRef([]);
  useEffect(() => {
    setLikedCardData([]);
  }, []);

  useEffect(() => {
    const url = "http://127.0.0.1:3500/api/v3/event/getAllEventIds";

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
      const url1 = `http://127.0.0.1:3500/api/v3/account/getlikedEventIds/${sessionStorage.getItem(
        "id"
      )}`;
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
          fetchEventbyId(imap);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function fetchEventbyId(imp) {
    console.log(imp);
    for (const key of imp.keys()) {
      if (imp.get(key) === true) {
        console.log(key);
        const url = `http://127.0.0.1:3500/api/v3/event/getEventByEventId/${key}`;
        axios
          .get(url)
          .then((res) => {
            console.log(res.data.data);
            setLikedCardData((prev) => [...prev, res.data.data]);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  function likeanddislike(eventId, condition, accountId) {
    console.log(idMap);
    console.log(condition);
    const url = `http://127.0.0.1:3500/api/v3/account/likedEvent/${eventId}/${accountId}`;
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
      <section className="likeEvent">
        <AccountNavigation />
        <ToastContainer />
        <section className="insideLikeEvent">
          <h1>Liked Events</h1>
          {likedCardData.map((databox, index) => (
            <div
              key={index}
              className="more-card-body"
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
              <div className="more-card-content">
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
                <div className="more-card-details">
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
                        {" " + databox.short_description.slice(0, 50) + "....."}
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
                    <blockquote style={{ marginBottom: "2rem" }}>
                      <i
                        class="fa-solid fa-heart"
                        ref={(el) => (likeornot.current[index] = el)}
                        style={{
                          color:
                            idMap.get(databox._id) === true ? "red" : "black",
                        }}
                        onClick={() => {
                          if (sessionStorage.getItem("id") != null) {
                            if (idMap.get(databox._id) === false) {
                              idMap.set(databox._id, true);
                              likeornot.current[index].style.color = "red";
                              toast.success("Liked Successfully", {
                                position: "bottom-center",
                              });
                            } else {
                              idMap.set(databox._id, false);
                              likeornot.current[index].style.color = "black";
                              toast.warning("Like Removed Successfully", {
                                position: "bottom-center",
                              });
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
    </>
  );
}

export default LikeEvent;
