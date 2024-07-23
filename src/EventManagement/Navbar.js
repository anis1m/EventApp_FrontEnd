import React from "react";
import "./Navbar.css";
import logo from "../EventAppLayout/carousalImages/Image 328.png";
import noimage from "../EventAppLayout/carousalImages/noImage.jpg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="dashboardhomenavbar">
        <NavLink to={"/"}>
          <img src={logo} />
        </NavLink>
        <aside>
          <img src={noimage} />
          <p>Anis Mahat</p>
          <i class="fa-solid fa-angle-down"></i>
        </aside>
      </nav>
    </>
  );
}

export default Navbar;
