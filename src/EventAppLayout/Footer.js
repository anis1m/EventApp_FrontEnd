import React from "react";
import "./Footer.css";
import logo from "./carousalImages/Image 328.png";
import logo1 from "./carousalImages/Image 343.png";
import logo2 from "./carousalImages/Image 344.png";

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
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Help</p>
              <p>FAQ's</p>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
              <p>Blog</p>
              <p>Career</p>
            </aside>
          </div>
          <div className="footer-section-3">
            <h3>Quick Links</h3>
            <aside>
              <p>Events</p>
              <p>Plays</p>
              <p>Sports</p>
              <p>Activities</p>
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
