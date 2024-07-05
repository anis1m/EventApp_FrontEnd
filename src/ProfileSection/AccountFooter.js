import React from "react";
import "./AccountFooter.css";

function AccountFooter() {
  return (
    <>
      <footer className="accountFooter">
        <div className="insideAccountFooter">
          <p id="EventDTL2024Footer">&copy; 2024 EventDTL</p>
          <p>About &#x2022;</p>
          <p>Blog &#x2022;</p>
          <p>Help &#x2022;</p>
          <p>Careers &#x2022;</p>
          <p>press &#x2022;</p>
          <p>Impact &#x2022;</p>
          <p>Investors &#x2022;</p>
          <p>Security &#x2022;</p>
          <p>Developers &#x2022;</p>
          <p>Status &#x2022;</p>
          <p>Terms &#x2022;</p>
          <p>Privacy &#x2022;</p>
          <p>Accessibility &#x2022;</p>
          <p>Cookies &#x2022;</p>
          <p>Manage Cookie Preferences</p>
        </div>
        <aside>
          <p>United States</p>
          <i className="fa-solid fa-angle-down"></i>
        </aside>
      </footer>
    </>
  );
}

export default AccountFooter;
