import React from "react";
import "./DashboardHome.css";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";

function DashboardHome() {
  const navigateunderdashboard = useNavigate();
  return (
    <>
      <section className="dashboardhome">
        <Navbar />
        <section className="insidedashboardhome">
          <nav className="sidenavigationdashboardhome">
            <figure>
              <i
                class="fa-solid fa-house"
                onClick={() =>
                  navigateunderdashboard("/manage-my-events/homepage")
                }
              ></i>
              <i
                class="fa-solid fa-calendar-days"
                onClick={() =>
                  navigateunderdashboard("/manage-my-events/events")
                }
              ></i>
              <i class="fa-solid fa-clipboard"></i>
              <i class="fa-solid fa-bullhorn"></i>
              <i class="fa-solid fa-chart-simple"></i>
              <i class="fa-solid fa-building-columns"></i>
              <i class="fa-solid fa-gear"></i>
            </figure>
            <figure>
              <i class="fa-solid fa-bars"></i>
              <i
                class="fa-solid fa-circle-info"
                onClick={() => navigateunderdashboard("/manage-my-events/help")}
              ></i>
            </figure>
          </nav>
          <div className="sidedashboardhomeinside">
            <Outlet />
          </div>
        </section>
      </section>
    </>
  );
}

export default DashboardHome;
