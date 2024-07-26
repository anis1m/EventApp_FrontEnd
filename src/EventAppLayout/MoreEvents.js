import React, { useEffect, useRef, useState } from "react";
import i7 from "./carousalImages/i7.png";
import "./MoreEvents.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import noimage from "./carousalImages/noImage.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FindEvents from "../FindEvents.js/FindEvents";
import { InfinitySpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";

function MoreEvents() {
  const showhideimage = useRef([]);
  const showhidelocation = useRef([]);
  const navigateCards = useNavigate();
  const showhidedetails = useRef([]);
  const likeornot = useRef([]);
  const [loading, setLoading] = useState(false);

  const { keyword, category } = useParams();
  console.log("Keyword " + keyword + " " + "Category " + category);

  const [pageNumber, setPageNumber] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [idMap, setIdMap] = useState(new Map());
  const [totalPages, setTotalPages] = useState(0);
  let idmap = new Map();

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
  function formatDate(date) {
    const options = { year: "2-digit", month: "short", day: "2-digit" };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    setLoading(true);
    const url = `${process.env.REACT_APP_API_URL}/api/v3/event/?page=${pageNumber}&limit=21&keyword=${keyword}&category=${category}`;

    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setTotalPages(data.totalPages);
        setCardData(data.data);

        console.log(cardData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber, keyword, category]);

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
      <section className="moreeventBoxes">
        <Navbar />
        <ToastContainer />
        <FindEvents keyword={keyword} />
        <h2 id="moretextEvent">
          All Events{" "}
          {keyword === "All"
            ? ""
            : keyword === "price"
            ? "in Rs " + category
            : "in " + keyword}
        </h2>
        <section className="morecardBoxes">
          {loading ? (
            <aside style={{ margin: "5rem 45%" }}>
              <InfinitySpin
                visible={true}
                width="200"
                color="purple"
                ariaLabel="infinity-spin-loading"
              />
            </aside>
          ) : cardData.length === 0 ? (
            <h2 style={{ margin: "5rem 45%" }}>Nothing Here</h2>
          ) : (
            cardData.map((databox, index) => (
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
                          {" " +
                            databox.short_description.slice(0, 50) +
                            "....."}
                          {/* <h4
                            onClick={() =>
                              navigateCards(
                                `/event-interface/${databox._id}?location=Nagpur`
                              )
                            }
                            style={{ cursor: "pointer" }}
                          >
                            &nbsp;read more
                          </h4> */}
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() =>
                              navigateCards(
                                `/event-interface/${databox._id}?location=Nagpur`
                              )
                            }
                            style={{ cursor: "pointer" }}
                          >
                            Read More
                          </Button>
                        </p>
                      </article>
                      <div
                        id="locationinblockquote"
                        ref={(el) => (showhidelocation.current[index] = el)}
                      >
                        <i class="fa-solid fa-location-dot"></i>
                        <p>{databox.location}</p>
                      </div>
                    </aside>
                    <figure>
                      <blockquote style={{ marginBottom: "2rem" }}>
                        <i
                          class="fa-solid fa-heart"
                          style={{
                            color:
                              idMap.get(databox._id) === true ? "red" : "black",
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
                                likeornot.current[index].style.color = "black";
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
            ))
          )}
        </section>
        <aside id="seeMore">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              style={{
                transform: pageNumber === index + 1 ? "scale(1.3)" : "",
                backgroundColor:
                  pageNumber === index + 1 ? "whitesmoke" : "white",
                color: pageNumber === index + 1 ? "black" : "gray",
                borderColor: pageNumber === index + 1 ? "black" : "gray",
              }}
              onClick={() => {
                setPageNumber(index + 1);
              }}
            >
              {index + 1}
            </button>
          ))}
        </aside>
        <Footer />
      </section>
    </>
  );
}

export default MoreEvents;
