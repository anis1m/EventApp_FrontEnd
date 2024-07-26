import React, { useEffect, useRef, useState } from "react";
import "./EventsInArea.css";
import i7 from "./carousalImages/i7.png";
import { useNavigate } from "react-router-dom";

function EventsInArea({ locationName }) {
  const showhideimage = useRef([]);
  const maskiconshowhide = useRef([]);
  const [moreEventsData, setMoreEventsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/api/v3/event/getEventByLocation/${locationName}`;
    console.log(locationName);
    fetch(url)
      .then((response) => {
        const d = response.json();

        return d;
      })
      .then((data) => {
        console.log(data);
        if (data.status === "Error") {
          setMoreEventsData([]);
        } else {
          setMoreEventsData(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [locationName]);

  return (
    <>
      {locationName && (
        <section className="eventBoxes">
          <h2 id="textEvent">Events in {locationName}</h2>

          <section className="cardBoxes">
            {moreEventsData.length === 0 ? (
              <i
                class="fa-solid fa-spinner fa-spin"
                style={{ fontSize: "5rem", margin: "5rem 45%" }}
              ></i>
            ) : (
              moreEventsData.map((databox, index) => (
                <div key={index} className="card-bodies">
                  <div
                    className="card-contents"
                    onClick={() => navigate(`/event-interface/${databox._id}`)}
                  >
                    <div className="card-detailed">
                      {/*<p>{databox.hostebylocation}</p>*/}
                      <h4>{databox.title}</h4>
                      <p>{databox.dateandtime}</p>
                      <p>{databox.hostedbydepartment}</p>
                      {/*<p>
                      {databox.howToReach
                        .replaceAll("\\n", " ")
                        .replaceAll("KMs", " km")}
                    </p>*/}
                      <p>{databox.hostedbyName}</p>

                      <div className="followers">
                        <i class="fa-regular fa-envelope"></i>
                        <p>
                          {databox.OrganizerContact.replace(
                            "[at]",
                            "@"
                          ).replaceAll("[dot]", ".")}
                        </p>
                      </div>
                    </div>
                    <i
                      class="fa-regular fa-image"
                      id="maskImages"
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
                    ></i>
                    <img
                      src=""
                      ref={(el) => (showhideimage.current[index] = el)}
                      id="showhideimages"
                      hidden
                    />
                  </div>
                </div>
              ))
            )}
            ;
          </section>
        </section>
      )}
    </>
  );
}

export default EventsInArea;
