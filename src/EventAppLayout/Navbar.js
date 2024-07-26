import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import logo from "./carousalImages/Image 328.png";
import CitySelection from "./CitySelection";
import Calendar from "react-calendar";
import noimage from "../EventAppLayout/carousalImages/noImage.jpg";
import logo1 from "./carousalImages/Image 416.png";

function Navbar({ locationName, imagedata }) {
  const [location, setLocation] = useState();
  const accountOptions = useRef();
  const findparticularevent = useNavigate();
  const [visible, setVisible] = useState(false);
  const updateTime = useRef();
  const [calenderVisible, setCalenderVisible] = useState(false);
  const [calender, setCalender] = useState(new Date());
  const navigateRandom = useNavigate();

  const user = sessionStorage.getItem("user");

  function getVisible(visibility) {
    setVisible(visibility);
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${day}- ${month}- ${year}`;
  }

  function formatTimeManually(date) {
    let hours = date.getHours();
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert hours to 12-hour format
    const formattedTime = `${hours}:${minutes}:${seconds} ${period}`;
    if (updateTime.current) {
      updateTime.current.innerHTML = formattedTime;
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const events = [
    "",
    "Adventure",
    "Brunch",
    "Camping",
    "Date Meet",
    "Events & Workshops",
    "Food and Drink",
    "Food and Music Festival",
    "Kids",
    "Meet Up",
    "Parties",
    "Summer Camp",
    "Trek",
  ];
  const plays = [
    "Comedy",
    "Conference",
    "Dance",
    "Guided Walks",
    "Live Event",
    "Music",
    "Open Mic",
    "Screening",
    "Theatre",
    "World Music Week 2024",
  ];
  const sports = ["Cycling", "Games & Quizzes", "Gaming and Entertainment"];
  const activities = [
    "Art",
    "Exhibition",
    "Festival",
    "Health & Wellness",
    "Literature",
    "Techno",
    "Workshops",
  ];
  return (
    <section style={{ position: "relative" }}>
      <nav className="navbar">
        <Link to={"/"}>
          <img src={logo} />
        </Link>
        {/*<div className="navSearch">
          
        </div>*/}
        <header id="navbarHeaderSection">
          <div className="navbaruppermenu">
            <aside id="navbaruppermenuDateTimeLocation">
              <h2>Date</h2>
              <h2>|</h2>
              <h2 ref={updateTime}>Time</h2>
              <h2>|</h2>
              <h2>Location</h2>
            </aside>
            <div id="i1">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Events"
                onClick={() => findparticularevent("/find-event-extra")}
              />
            </div>
            <aside>
              <i
                class="fa-regular fa-calendar"
                id="FaCalender"
                onClick={() => {
                  if (!calenderVisible) {
                    setCalenderVisible(true);
                  } else {
                    setCalenderVisible(false);
                  }
                }}
              ></i>
            </aside>
            <div id="i2" onClick={() => setVisible(true)}>
              <i class="fa-solid fa-location-dot"></i>
              <h3>{locationName === "" ? "Location" : locationName}</h3>
              <i class="fa-solid fa-angle-down"></i>
              {/*<input
              type="search"
              placeholder="Type Location Here"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  try {
                    onlocationChange(location);
                  } catch (err) {
                    console.log(err);
                  }
                }
              }}
            />*/}
            </div>
            <blockquote>
              <i class="fa-solid fa-ticket"></i>
              <a href="/create-event">Create Event</a>
            </blockquote>
            <aside>
              {user == null ? (
                <>
                  <aside>
                    <i class="fa-solid fa-circle-user" id="fa-CircleUser"></i>
                    <a href="/login/inside-login">Log In</a>
                    <h2>/</h2>
                    <a href="/signup/inside-signup">Sign Up</a>
                  </aside>
                </>
              ) : (
                <aside
                  id="afterloginhomepage"
                  onMouseEnter={() => {
                    accountOptions.current.style.display = "block";
                  }}
                >
                  <img
                    src={
                      imagedata
                        ? URL.createObjectURL(imagedata)
                        : (JSON.parse(user).profile = ""
                            ? noimage
                            : JSON.parse(user).profile)
                    }
                  />

                  <h4>{JSON.parse(user).name}</h4>
                  <i
                    className="fa-solid fa-angle-down"
                    onClick={() => {
                      if (accountOptions.current.style.display === "block") {
                        accountOptions.current.style.display = "none";
                      } else {
                        accountOptions.current.style.display = "block";
                      }
                    }}
                  ></i>
                </aside>
              )}
            </aside>
          </div>
          <div className="menus">
            <blockquote>
              <a
                onClick={() => {
                  const randomEvent =
                    events[getRandomInt(0, events.length - 1)];
                  navigateRandom(`/see-all-events/${randomEvent}/Events`);
                }}
              >
                Events
              </a>
              <a
                onClick={() => {
                  const randomPlays = plays[getRandomInt(0, plays.length - 1)];
                  navigateRandom(`/see-all-events/${randomPlays}/Plays`);
                }}
              >
                Plays
              </a>
              <a
                onClick={() => {
                  const randomSports =
                    sports[getRandomInt(0, sports.length - 1)];
                  navigateRandom(`/see-all-events/${randomSports}/Sports`);
                }}
              >
                Sports
              </a>
              <a
                onClick={() => {
                  const randomActivities =
                    activities[getRandomInt(0, activities.length - 1)];
                  navigateRandom(
                    `/see-all-events/${randomActivities}/Activities`
                  );
                }}
              >
                Activities
              </a>
            </blockquote>
            <blockquote>
              <a>Lets Make it Personal</a>
            </blockquote>
            <aside>
              <a>Corporate</a>
              <a>FAQ</a>
              <div id="navbarHeaderHelpRedirect">
                <a>Help</a>
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </aside>
          </div>
        </header>
      </nav>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
        {visible && <CitySelection getVisible={getVisible} />}
      </div>
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "37%",
          width: "400px",
          backgroundColor: "white",
          zIndex: 1,
        }}
      >
        {calenderVisible && (
          <Calendar onChange={setCalender} value={calender} />
        )}
      </div>
      <div
        className="accountOptions"
        ref={accountOptions}
        onMouseLeave={() => {
          accountOptions.current.style.display = "none";
        }}
      >
        <aside>
          <a>Browse events</a>
          <a href="/manage-my-events/homepage">Manage my events</a>
        </aside>
        <aside>
          <a>Tickets (0)</a>
          <a href="/like-event">Liked</a>
          <a>Following</a>
          <a>Interests</a>
        </aside>
        <aside>
          <a href="/account-settings">Account Settings</a>
          <a
            onClick={() => {
              sessionStorage.removeItem("id");
              sessionStorage.removeItem("user");
            }}
            href="/"
          >
            Logout
          </a>
        </aside>
      </div>
    </section>
  );
}

export default Navbar;
