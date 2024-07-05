import React from "react";
import "./Destinations.css";
import atlanta from "./carousalImages/atlanta.png";
import boston from "./carousalImages/boston.jpg";
import charlotte from "./carousalImages/charlotte.jpg";
import chicago from "./carousalImages/chicago.jpg";
import dallas from "./carousalImages/dallas.png";
import houston from "./carousalImages/houston.jpg";
import las_vegas from "./carousalImages/las_vegas.png";
import los_angeles from "./carousalImages/los_angeles.png";
import miami from "./carousalImages/miami.jpg";
import new_york from "./carousalImages/new_york.jpg";
import orlando from "./carousalImages/orlando.jpg";
import philadelphia from "./carousalImages/philadelphia.png";
import san_diego from "./carousalImages/san_diego.png";
import san_francisco from "./carousalImages/san_francisco.png";
import washington from "./carousalImages/washington.jpg";

function Destinations() {
  return (
    <>
      <section className="destinations">
        <div className="destinationOffer">
          <h2 id="DestinationText">Top Destinations in United States</h2>
          <button id="left">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button id="right">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
        <div className="destinationCarousal">
          <div className="destinationInside">
            <div className="destinationContent">
              <img src={atlanta} />
              <h1>Atlanta</h1>
            </div>
            <div className="destinationContent">
              <img src={boston} />
              <h1>Boston</h1>
            </div>
            <div className="destinationContent">
              <img src={charlotte} />
              <h1>Charlotte</h1>
            </div>
            <div className="destinationContent">
              <img src={chicago} />
              <h1>Chicago</h1>
            </div>
            <div className="destinationContent">
              <img src={dallas} />
              <h1>Dallas</h1>
            </div>
            <div className="destinationContent">
              <img src={houston} />
              <h1>Houston</h1>
            </div>
            <div className="destinationContent">
              <img src={las_vegas} />
              <h1>Las Vegas</h1>
            </div>
            <div className="destinationContent">
              <img src={los_angeles} />
              <h1>Los Angeles</h1>
            </div>
            <div className="destinationContent">
              <img src={miami} />
              <h1>Miami</h1>
            </div>
            <div className="destinationContent">
              <img src={new_york} />
              <h1>New York</h1>
            </div>
            <div className="destinationContent">
              <img src={orlando} />
              <h1>Orlando</h1>
            </div>
            <div className="destinationContent">
              <img src={philadelphia} />
              <h1>Philadelphia</h1>
            </div>
            <div className="destinationContent">
              <img src={san_diego} />
              <h1>San Diego</h1>
            </div>
            <div className="destinationContent">
              <img src={san_francisco} />
              <h1>San Francisco</h1>
            </div>
            <div className="destinationContent">
              <img src={washington} />
              <h1>Washington</h1>
            </div>
          </div>
        </div>
        <div className="popularCities">
          <h2>Popular Cities</h2>
          <div className="cities">
            <aside>
              <a>
                Things to do in Austin{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Denver{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Seattle{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Nashville{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Detroit{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Baltimore{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Indianapolis{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Portland{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in San Antonio{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Phoenix{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Columbus{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Minneapolis{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Tampa{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
          </div>
        </div>
        <div className="Thingstodo">
          <h2>Things to do in Maharashtra</h2>
          <div className="insideThingstodo">
            <aside>
              <a>
                Things to do in Pune{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Nashik{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Solapur{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>{" "}
              </a>
            </aside>
            <aside>
              <a>
                Things to do in Ahmadnagar{" "}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default Destinations;
