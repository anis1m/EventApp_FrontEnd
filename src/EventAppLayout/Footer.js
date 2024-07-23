import React from "react";
import "./Footer.css";
import logo from "./carousalImages/Image 328.png";
import logo1 from "./carousalImages/Image 343.png";
import logo2 from "./carousalImages/Image 344.png";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footer-top-section">
          <div className="footer-section-1">
            <img src={logo} />
            <aside>
              <h3>Date</h3>
              <h3>|</h3>
              <h3>Time</h3>
              <h3>|</h3>
              <h3>Location</h3>
            </aside>
            <figure>
              <img src={logo1} />
              <img src={logo2} />
            </figure>
          </div>
          <div className="footer-section-2">
            <h3>Important Links</h3>
            <aside>
              <blockquote>
                <i class="fa-solid fa-address-card"></i>
                <a>About Us</a>
              </blockquote>
              <blockquote>
                <i class="fa-solid fa-address-book"></i>
                <a>Contact Us</a>
              </blockquote>
              <blockquote>
                <i class="fa-solid fa-clipboard-question"></i>
                <a href="/manage-my-events/help">Help</a>
              </blockquote>
              <blockquote>
                <i class="fa-solid fa-person-circle-question"></i>
                <a>FAQ's</a>
              </blockquote>
              <blockquote>
                <i class="fa-solid fa-clipboard"></i>
                <a>Terms and Conditions</a>
              </blockquote>
              <blockquote>
                <i class="fa-solid fa-user-lock"></i>
                <a>Privacy Policy</a>
              </blockquote>
              <blockquote>
                <i class="fa-solid fa-square-rss"></i>
                <a>Blog</a>
              </blockquote>
              <blockquote>
                <i class="fa-solid fa-user-graduate"></i>
                <a>Career</a>
              </blockquote>
            </aside>
          </div>
          <div className="footer-section-3">
            <h3>Quick Links</h3>
            <aside>
              <blockquote>
                <i class="fa-solid fa-calendar-days"></i>
                <a>Events</a>
              </blockquote>
              <blockquote>
                <i class="fa-solid fa-circle-play"></i>
                <a>Plays</a>
              </blockquote>
              <blockquote>
                <i class="fa-solid fa-volleyball"></i>
                <a>Sports</a>
              </blockquote>
              <blockquote>
                <i class="fa-solid fa-chart-line"></i>
                <a>Activities</a>
              </blockquote>
            </aside>
            <h3>Our Parteners</h3>
          </div>
          <div className="footer-section-4">
            <h3>Feedback</h3>
            <p>Let us Know what can we do to improve your Event Experience</p>
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Enter Full Name" />
              <label>Email Address</label>
              <input type="email" placeholder="Enter Email Address" />
              <label>Feedback Message</label>
              <textarea
                placeholder="Enter Feedback Message"
                cols={5}
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
        <div className="footer-section-5">
          <p>
            &copy; Copyright 2024 at EventDTL. All Rights Reserved To EventDTL
          </p>
          <figure>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
          </figure>
        </div>
      </footer>
    </>
  );
}

export default Footer;
