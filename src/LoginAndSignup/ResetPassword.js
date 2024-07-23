import React, { useState } from "react";
import "./ResetPassword.css";
import Navbar from "../EventAppLayout/Navbar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "../EventAppLayout/carousalImages/Image 328.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function ResetPassword() {
  const query = useQuery();
  const email = query.get("email");
  const { token } = useParams();
  const [resetPassword, setResetPassword] = useState("");
  const [againresetPassword, setAgainResetpassword] = useState("");
  const url = `http://127.0.0.1:3500/api/v3/account/resetPassword/${token}?email=${email}`;
  const nav = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
    axios
      .patch(url, {
        password: resetPassword,
        confirmPassword: againresetPassword,
      })
      .then(() => {
        toast.success(
          "Password Reset Successful. Redirecting to login in 5 seconds",
          { position: "bottom-center" }
        );
        setTimeout(() => {
          nav("/login/inside-login");
        }, 5000);
      })
      .catch((err) => {
        toast.error(err, {
          position: "bottom-center",
        });
      });
  }

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
        <form onSubmit={handlesubmit}>
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
