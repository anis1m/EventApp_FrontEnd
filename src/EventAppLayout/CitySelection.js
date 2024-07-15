import React from "react";
import "./CitySelection.css";
import logo from "./carousalImages/Image 328.png";
import CityNames from "./CityNames";

function CitySelection({ getVisible }) {
  return (
    <>
      <header className="citySelection">
        <div className="insideCitySelectionLogo">
          <img src={logo} />
          <i
            class="fa-solid fa-xmark"
            onClick={() => {
              getVisible(false);
            }}
          ></i>
        </div>
        <section className="insideCitySelection">
          <aside>
            <h3>Choose Your location</h3>
            <blockquote>
              <input type="search" placeholder="Select Your City or Pincode" />
              <i class="fa-solid fa-search"></i>
            </blockquote>
          </aside>

          <div className="insideCitySelectionList">
            <CityNames getVisible={getVisible} />
          </div>
        </section>
      </header>
    </>
  );
}

export default CitySelection;
