import React, { useRef, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import logo from "./carousalImages/Image 328.png";

function Navbar({ onlocationChange }) {
  const [location, setLocation] = useState();
  const accountOptions = useRef();
  const findparticularevent = useNavigate();

  const user = sessionStorage.getItem("user");
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
            <aside>
              <h2>Date</h2>
              <h2>|</h2>
              <h2>Time</h2>
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
              <i class="fa-regular fa-calendar" id="FaCalender"></i>
            </aside>
            <div id="i2">
              <i class="fa-solid fa-location-dot"></i>
              <select>
                <option selected disabled>
                  Location
                </option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Delhi</option>
                <option>Kolkata</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Vishakhapatnam</option>
                <option>Nagpur</option>
                <option>Bhopal</option>
              </select>
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
                    <a href="/login">Log In</a>
                    <h2>/</h2>
                    <a href="/signup">Sign Up</a>
                  </aside>
                </>
              ) : (
                <aside
                  id="afterloginhomepage"
                  onMouseEnter={() => {
                    accountOptions.current.style.display = "block";
                  }}
                >
                  <img src="images_/empty.jpg" />
                  <h4>{JSON.parse(user).email}</h4>
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
              <a href="/find-events">Events</a>
              <a>Plays</a>
              <a>Sports</a>
              <a>Activities</a>
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
      <div
        className="accountOptions"
        ref={accountOptions}
        onMouseLeave={() => {
          accountOptions.current.style.display = "none";
        }}
      >
        <aside>
          <a>Browse events</a>
          <a>Manage my events</a>
        </aside>
        <aside>
          <a>Tickets (0)</a>
          <a>Liked</a>
          <a>Following</a>
          <a>Interests</a>
        </aside>
        <aside>
          <a href="/account-settings">Account Settings</a>
          <a onClick={() => sessionStorage.removeItem("user")} href="/">
            Logout
          </a>
        </aside>
      </div>
    </section>
  );
}

export default Navbar;
