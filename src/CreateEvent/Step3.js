import React from "react";
import "./Step3.css";
import { Link } from "react-router-dom";
import logo from "../EventAppLayout/carousalImages/logo (1).png";

function Step3() {
  return (
    <>
      <section className="step">
        <section className="step3">
          <Link to={"/"}>
            <img src={logo} id="logo" />
          </Link>
          <div className="insideStep3">
            <form>
              <aside>
                <label>Name</label>
                <input type="text" placeholder="Enter Name" />
              </aside>
              <aside>
                <label>Address</label>
                <input type="text" placeholder="Enter Address" />
              </aside>
              <aside>
                <label>Date of Formation</label>
                <input type="date" />
              </aside>
              <aside>
                <label>Social Media Handles</label>
                <input
                  type="text"
                  placeholder="Enter Facebook Profile Url or Handle Id "
                />
                <input
                  type="text"
                  placeholder="Enter Instagram Profile Url or Handle Id "
                />
                <input
                  type="text"
                  placeholder="Enter X Profile Url or Handle Id "
                />
                <input
                  type="text"
                  placeholder="Enter Linkedin Profile Url or Handle Id "
                />
              </aside>
              <aside>
                <label>Registration Number (Optional)</label>
                <input type="number" placeholder="Enter Registration Number " />
              </aside>
              <aside>
                <label>Select Co-host</label>
                <select>
                  <option>Null</option>
                </select>
              </aside>
              <aside>
                <label>Email Address</label>
                <input type="email" placeholder="Enter Email Address " />
              </aside>
              <aside>
                <label>Website (Optional)</label>
                <input type="url" placeholder="Enter Website " />
              </aside>
              <div>
                <p>Select Languages</p>
                <dl className="languages">
                  <dd>
                    <input type="checkbox" value="English" />
                    <label>English</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Spanish" />
                    <label>Spanish</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="French" />
                    <label>French</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="German" />
                    <label>German</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Chinese" />
                    <label>Chinese</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Japanese" />
                    <label>Japanese</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Korean" />
                    <label>Korean</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Italian" />
                    <label>Italian</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Portuguese" />
                    <label>Portuguese</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Russian" />
                    <label>Russian</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Arabic" />
                    <label>Arabic</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Hindi" />
                    <label>Hindi</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Bengali" />
                    <label>Bengali</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Urdu" />
                    <label>Urdu</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Punjabi" />
                    <label>Punjabi</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Tamil" />
                    <label>Tamil</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Telugu" />
                    <label>Telugu</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Marathi" />
                    <label>Marathi</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Gujarati" />
                    <label>Gujarati</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Malayalam" />
                    <label>Malayalam</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Kannada" />
                    <label>Kannada</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Swahili" />
                    <label>Swahili</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Dutch" />
                    <label>Dutch</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Turkish" />
                    <label>Turkish</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Greek" />
                    <label>Greek</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Hebrew" />
                    <label>Hebrew</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Swedish" />
                    <label>Swedish</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Norwegian" />
                    <label>Norwegian</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Danish" />
                    <label>Danish</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Finnish" />
                    <label>Finnish</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Polish" />
                    <label>Polish</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Czech" />
                    <label>Czech</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Hungarian" />
                    <label>Hungarian</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Thai" />
                    <label>Thai</label>
                  </dd>
                  <dd>
                    <input type="checkbox" value="Vietnamese" />
                    <label>Vietnamese</label>
                  </dd>
                </dl>
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}

export default Step3;
