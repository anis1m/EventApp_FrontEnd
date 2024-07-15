import React, { useEffect, useRef, useState } from "react";
import "./FindEvents.css";
import Navbar from "../EventAppLayout/Navbar";
import adventure from "../EventAppLayout/carousalImages/adventure.jpg";
import brunch from "../EventAppLayout/carousalImages/brunch.jpg";
import camping from "../EventAppLayout/carousalImages/camping.jpg";
import date_meet from "../EventAppLayout/carousalImages/date_meet.png";
import event_and_workshop from "../EventAppLayout/carousalImages/workshop.jpg";
import food_and_drink from "../EventAppLayout/carousalImages/food&Drink.jpg";
import food_and_music from "../EventAppLayout/carousalImages/food_and_music_festival.png";
import kids from "../EventAppLayout/carousalImages/kids.jpg";
import meetUp from "../EventAppLayout/carousalImages/meetup.jpg";
import parties from "../EventAppLayout/carousalImages/Parties.jpg";
import summer_camp from "../EventAppLayout/carousalImages/summer_camp.png";
import trek from "../EventAppLayout/carousalImages/trek.jpg";
import comedy from "../EventAppLayout/carousalImages/comedy.png";
import conference from "../EventAppLayout/carousalImages/conference.jpg";
import dance from "../EventAppLayout/carousalImages/dance.jpg";
import guided_walks from "../EventAppLayout/carousalImages/guided_walk.jpg";
import live_event from "../EventAppLayout/carousalImages/live_event.png";
import music from "../EventAppLayout/carousalImages/music.png";
import open_mic from "../EventAppLayout/carousalImages/open_mic.png";
import screening from "../EventAppLayout/carousalImages/screening.png";
import theatre from "../EventAppLayout/carousalImages/theatre.png";
import world_music_event_2024 from "../EventAppLayout/carousalImages/world_music_event_2024.png";
import cycling from "../EventAppLayout/carousalImages/cycling.jpg";
import games_and_quizzes from "../EventAppLayout/carousalImages/games&quizzes.jpg";
import gaming_and_entertainment from "../EventAppLayout/carousalImages/gaming&Entertainment.png";
import art from "../EventAppLayout/carousalImages/art.jpg";
import exhibition from "../EventAppLayout/carousalImages/exhibition.jpg";
import festival from "../EventAppLayout/carousalImages/festival.png";
import health_and_wellness from "../EventAppLayout/carousalImages/health&Wellness.png";
import literature from "../EventAppLayout/carousalImages/literature.png";
import techno from "../EventAppLayout/carousalImages/techno.jpg";
import workshops from "../EventAppLayout/carousalImages/workshops.jpg";

function FindEvents({ keyword }) {
  const locationOptionsToggle = useRef();
  const [isToggleOpen, setToggleOpen] = useState(false);
  const insideFindEventsCardTitle = useRef();

  const map = new Map();
  map.set("Adventure", adventure);
  map.set("Brunch", brunch);
  map.set("Camping", camping);
  map.set("Date Meet", date_meet);
  map.set("Events & Workshops", event_and_workshop);
  map.set("Food and Drink", food_and_drink);
  map.set("Food and Music Festival", food_and_music);
  map.set("Kids", kids);
  map.set("Meet Up", meetUp);
  map.set("Parties", parties);
  map.set("Summer Camp", summer_camp);
  map.set("Trek", trek);
  map.set("Comedy", comedy);
  map.set("Conference", conference);
  map.set("Dance", dance);
  map.set("Guided Walks", guided_walks);
  map.set("Live Event", live_event);
  map.set("Music", music);
  map.set("Open Mic", open_mic);
  map.set("Screening", screening);
  map.set("Theatre", theatre);
  map.set("World Music Week 2024", world_music_event_2024);
  map.set("Cycling", cycling);
  map.set("Games & Quizzes", games_and_quizzes);
  map.set("Gaming and Entertainment", gaming_and_entertainment);
  map.set("Art", art);
  map.set("Exhibition", exhibition);
  map.set("Festival", festival);
  map.set("Health & Wellness", health_and_wellness);
  map.set("Literature", literature);
  map.set("Techno", techno);
  map.set("Workshops", workshops);

  useEffect(() => {
    if (insideFindEventsCardTitle.current) {
      for (let key of map.keys()) {
        if (key === keyword) {
          insideFindEventsCardTitle.current.style.background = `url(${map.get(
            key
          )})`;

          insideFindEventsCardTitle.current.style.backgroundSize = "contain";
          insideFindEventsCardTitle.current.style.backgroundPosition = "center";
        }
      }
    }
  }, [keyword]);
  return (
    <>
      <section className="findEvents">
        <section className="insideFindEvents">
          <div
            className="insideFindEventsCardTitle"
            ref={insideFindEventsCardTitle}
          >
            <aside>
              <h2>Best events in</h2>
              <h1>{keyword}</h1>
              <p>
                Looking for things to do in {keyword}? Whether you're a local,
                new in town or just cruising through we've got loads of great
                tips and events. You can explore by location, what's popular,
                our top picks, free stuff... you got this. Ready?
              </p>
              <div>
                <i class="fa-solid fa-location-dot"></i>
                <h4>Maharashtra</h4>
                <i
                  class="fa-solid fa-angle-down"
                  onClick={() => {
                    if (!isToggleOpen) {
                      locationOptionsToggle.current.style.display = "block";
                      setToggleOpen(true);
                    } else {
                      locationOptionsToggle.current.style.display = "none";
                      setToggleOpen(false);
                    }
                  }}
                ></i>
              </div>
            </aside>
          </div>
          <div
            className="insideFindEventsLocationOptions"
            ref={locationOptionsToggle}
          >
            <aside id="insideFindEventsLocationsOptionsInside">
              <i class="fa-solid fa-location-crosshairs"></i>
              <p>Use My Current Location</p>
            </aside>
            <aside id="insideFindEventsLocationsOptionsInside">
              <i class="fa-solid fa-film"></i>
              <a>Browse online events</a>
            </aside>
            <aside id="insideFindEventsLocationsOptionsInside">
              <i class="fa-solid fa-clock-rotate-left"></i>
              <div>
                <p>Kolhapur</p>
                <p>India, Asia</p>
              </div>
            </aside>
          </div>
        </section>
      </section>
    </>
  );
}

export default FindEvents;
