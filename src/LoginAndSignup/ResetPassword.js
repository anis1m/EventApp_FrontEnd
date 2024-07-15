import React, { useState } from "react";
import "./ResetPassword.css";
import Navbar from "../EventAppLayout/Navbar";
import { Link } from "react-router-dom";
import logo from "../EventAppLayout/carousalImages/Image 328.png";

function ResetPassword() {
  const [resetPassword, setResetPassword] = useState("");
  const [againresetPassword, setAgainResetpassword] = useState("");

  return (
    <>
      <section className="insideResetPassword">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <figure>
            <img src={logo} />
          </figure>
        </Link>
        <aside id="loginWithEmailorPhoneNo">
          <h2>Reset your password</h2>
          <p>Enter your new password</p>
        </aside>
        <form>
          <input
            type="password"
            placeholder="Enter New Password"
            onChange={(e) => setResetPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter New Password Again"
            onChange={(e) => setAgainResetpassword(e.target.value)}
          />
          <button type="submit">Continue</button>
        </form>
        <blockquote>
          <p>
            By clicking continue, you agree to our{" "}
            <strong>Terms of Service</strong> and{" "}
            <strong>Privacy Policy</strong>
          </p>
        </blockquote>
      </section>
    </>
  );
}

export default ResetPassword;
