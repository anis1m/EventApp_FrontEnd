import React, { useState } from "react";
import "./ForgotPassword.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../EventAppLayout/carousalImages/Image 328.png";

function ForgotPassword() {
  const [forgotpasswordmail, setForgotpasswordmail] = useState("");

  const url = "http://127.0.0.1:3500/api/v3/account/forgotPassword";

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(url, {
        email: forgotpasswordmail,
      })
      .then(() => {
        toast.success("check your email for further instructions", {
          position: "bottom-center",
        });
      })
      .catch((err) => {
        toast.error("account not exists with this email", {
          position: "bottom-center",
        });
        console.log(err);
      });
  }

  return (
    <>
      <section className="forgotPassword">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <figure>
            <img src={logo} />
          </figure>
        </Link>
        <aside>
          <h2>Forgot Your Password</h2>
          <p>Enter your New Password to reset your password</p>
        </aside>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setForgotpasswordmail(e.target.value)}
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

export default ForgotPassword;
