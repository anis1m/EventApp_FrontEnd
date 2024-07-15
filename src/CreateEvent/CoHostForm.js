import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../EventAppLayout/Navbar";

function CoHostForm() {
  const navigateToCreateEvent = useNavigate();
  return (
    <>
      <section className="organizerForm">
        <Navbar />
        <section className="insideOrganizerForm">
          <form>
            <aside>
              <h1>Are You Co-Host</h1>
              <select>
                <option selected disabled hidden>
                  Select
                </option>
                <option>Individual</option>
                <option>Organization</option>
                <option>Company</option>
                <option>Groups/Clubs</option>
                <option>Trust</option>
                <option>Classes</option>
                <option>Temples</option>
                <option>Others</option>
              </select>
            </aside>
            <div>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="email@domain.com" />
              <input type="number" placeholder="Enter Otp You Received" />
              <input type="text" placeholder="Address" />
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Pan Number" />
              <input type="number" placeholder="Aadhar Number" />
              <figure>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
              </figure>

              <input type="url" placeholder="Social Media Links" />

              <button
                type="submit"
                onClick={() => navigateToCreateEvent("/event-create")}
              >
                Continue
              </button>

              <p>
                By clicking continue, you agree to our{" "}
                <strong>Terms of Service</strong> and{" "}
                <strong>Privacy Policy</strong>
              </p>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default CoHostForm;
