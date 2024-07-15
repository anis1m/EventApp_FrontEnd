import React, { useRef } from "react";
import "./AccountNavigation.css";
import { Link } from "react-router-dom";
import logo from "../EventAppLayout/carousalImages/Add a heading (1).png";

function AccountNavigation({ email }) {
  const accountOptions = useRef();

  return (
    <>
      <nav className="accountNavigation">
        <Link to={"/"}>
          <img src={logo} />
        </Link>
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder="Search Events" />
        </div>
        <aside>
          <a>Browse Events</a>
        </aside>
        <aside>
          <p>Organize</p>
          <i class="fa-solid fa-angle-down"></i>
        </aside>
        <aside>
          <p>Help</p>
          <i class="fa-solid fa-angle-down"></i>
        </aside>
        <aside
          onMouseEnter={() => {
            accountOptions.current.style.display = "block";
          }}
        >
          <img src="/images_/empty.jpg" />
          <p>{email}</p>
          <i
            class="fa-solid fa-angle-down"
            onClick={() => {
              if (accountOptions.current.style.display === "block") {
                accountOptions.current.style.display = "none";
              } else {
                accountOptions.current.style.display = "block";
              }
            }}
          ></i>
        </aside>
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
          <a>Credits</a>
          <a>Liked</a>
          <a>Following</a>
          <a>Interests</a>
        </aside>
        <aside>
          <a href="/account-settings">Account Settings</a>
          <a>Logout</a>
        </aside>
      </div>
    </>
  );
}

export default AccountNavigation;
