import React, { useState } from "react";
import "./Filters.css";
import axios from "axios";

function Filters() {
  /*const url = "http://127.0.0.1:5000/students";
  fetch(url).then((data) => {
    console.log(JSON.parse(data));
  });*/

  const [filter, setFilter] = useState("All");

  return (
    <>
      <div className="Filters">
        <ul>
          <li
            onClick={() => setFilter("All")}
            style={{ color: filter === "All" ? "blue" : "gray" }}
          >
            All{filter === "All" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => setFilter("For you")}
            style={{ color: filter === "For you" ? "blue" : "gray" }}
          >
            For you{filter === "For you" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => setFilter("Online")}
            style={{ color: filter === "Online" ? "blue" : "gray" }}
          >
            Online{filter === "Online" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => setFilter("Today")}
            style={{ color: filter === "Today" ? "blue" : "gray" }}
          >
            Today{filter === "Today" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => setFilter("This Weekend")}
            style={{ color: filter === "This Weekend" ? "blue" : "gray" }}
          >
            This Weekend{filter === "This Weekend" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => setFilter("Juneteenth")}
            style={{ color: filter === "Juneteenth" ? "blue" : "gray" }}
          >
            Juneteenth{filter === "Juneteenth" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => setFilter("Pride")}
            style={{ color: filter === "Pride" ? "blue" : "gray" }}
          >
            Pride{filter === "Pride" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => setFilter("Free")}
            style={{ color: filter === "Free" ? "blue" : "gray" }}
          >
            Free{filter === "Free" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => setFilter("Music")}
            style={{ color: filter === "Music" ? "blue" : "gray" }}
          >
            Music{filter === "Music" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => setFilter("Food & Drink")}
            style={{ color: filter === "Food & Drink" ? "blue" : "gray" }}
          >
            Food & Drink{filter === "Food & Drink" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => setFilter("Charity & Causes")}
            style={{ color: filter === "Charity & Causes" ? "blue" : "gray" }}
          >
            Charity & Causes{filter === "Charity & Causes" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Filters;
