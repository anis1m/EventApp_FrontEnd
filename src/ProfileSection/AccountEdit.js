import React, { useRef, useState } from "react";
import "./AccountEdit.css";
import Address from "./Address";
import AccountFooter from "./AccountFooter";
import { Outlet, useNavigate } from "react-router-dom";

function AccountEdit() {
  const [shown, setShown] = useState(true);
  const sidenavoptions = useRef();
  const angleupdown = useRef();
  const accountNavigate = useNavigate();
  const insideaccountmainsection = useRef();
  function optionshowhide() {
    if (shown) {
      sidenavoptions.current.style.display = "none";
      angleupdown.current.classList.remove("fa-angle-up");
      angleupdown.current.classList.add("fa-angle-down");
      setShown(false);
    } else {
      sidenavoptions.current.style.display = "flex";
      angleupdown.current.classList.remove("fa-angle-down");
      angleupdown.current.classList.add("fa-angle-up");
      setShown(true);
    }
  }

  return (
    <>
      <section className="accountmain">
        <div className="accountsidenavigation">
          <aside id="sidenavtitle" onClick={optionshowhide}>
            <h3>Account</h3>
            <i class="fa-solid fa-angle-up" ref={angleupdown}></i>
          </aside>
          <aside id="sidenavoptions" ref={sidenavoptions}>
            <p
              onClick={() => {
                insideaccountmainsection.current.style.display = "block";
                accountNavigate("/account-settings");
              }}
            >
              Contact Info
            </p>
            <p
              onClick={() => {
                insideaccountmainsection.current.style.display = "none";
                accountNavigate("change-email");
              }}
            >
              Change Email
            </p>
            <p>Password</p>
            <p>Credit/Debit Cards</p>
            <p>Linked Accounts</p>
            <p>Email Preferences</p>
            <p>Close Account</p>
            <p>Personal Data</p>
          </aside>
        </div>
        <section className="accountmainsection">
          <main
            className="insideaccountmainsection"
            ref={insideaccountmainsection}
          >
            <div className="accountheader">
              <p id="accountheaderinfo">Account Information</p>
              <p>Member since jun 14, 2024</p>
            </div>
            <aside id="profilephoto">
              <p id="profileimage">Profile Photo</p>
              <input type="file" />
            </aside>
            <form className="contactform">
              <h1>Contact Information</h1>
              <aside>
                <label>Prefix</label>
                <select required>
                  <option selected disabled>
                    --
                  </option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                  <option>Miss.</option>
                  <option>Mx.</option>
                  <option>Dr.</option>
                  <option>Prof.</option>
                  <option>Rev.</option>
                </select>
              </aside>
              <div>
                <aside>
                  <label>First Name</label>
                  <input type="text" required />
                </aside>
                <aside>
                  <label>Last Name</label>
                  <input type="text" required />
                </aside>
              </div>
              <aside>
                <label>Suffix</label>
                <input type="text" />
              </aside>
              <div>
                <aside>
                  <label>Home Phone</label>
                  <input type="number" />
                </aside>
                <aside>
                  <label>Cell Phone</label>
                  <input type="number" required />
                </aside>
              </div>
              <div>
                <aside>
                  <label>Job Title</label>
                  <input type="text" />
                </aside>
                <aside>
                  <label>Company / Organization</label>
                  <input type="text" />
                </aside>
              </div>
              <div>
                <aside>
                  <label>Website</label>
                  <input type="url" />
                </aside>
                <aside>
                  <label>Blog</label>
                  <input type="text" />
                </aside>
              </div>
            </form>
            <div className="HomeBillingEtcAddresses">
              <Address address="Home" />
              <Address address="Billing" />
              <Address address="Shipping" />
              <Address address="Work" />
            </div>
            <button>Save</button>

            <AccountFooter />
          </main>
          <Outlet />
        </section>
      </section>
    </>
  );
}

export default AccountEdit;
