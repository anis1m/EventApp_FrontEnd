import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "../EventAppLayout/Navbar";
import logo from "../EventAppLayout/carousalImages/Image 328.png";

function Login() {
  const url = "http://127.0.0.1:3500/api/v3/account/loginAccount";
  const toHomePage = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const hideonforgotpassword = useRef();
  const navigateToforgotpassword = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(url, { email, password })

      .then(() => {
        toast.success(
          "You have successfully Logged in. Redirecting in 5 Seconds",
          { position: "top-center" }
        );
        setTimeout(() => toHomePage("/"), 5000);
        sessionStorage.setItem("user", JSON.stringify({ email: email }));
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Failed to Login. Check Email or Password and try to login",
          { position: "top-center" }
        );
      });
  }

  return (
    <>
      <section className="login">
        <ToastContainer />
        <Navbar />
        <div className="insideLogin">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <figure>
              <img src={logo} />
            </figure>
          </Link>
          <aside id="loginWithEmailorPhoneNo">
            <h2>Login into account</h2>
            <p>Enter your Email and Password to Login</p>
          </aside>
          <form onSubmit={handleSubmit} ref={hideonforgotpassword}>
            <input
              type="email"
              placeholder="email@domain.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login Now</button>
          </form>
          <Outlet />
          <blockquote id="loginWithGoogle">
            <i class="fa-brands fa-google"></i>
            <p>Login with Google</p>
          </blockquote>
          <aside style={{ marginTop: "2.5rem" }} id="ifaccountnotexists">
            <p>Not Registered Yet?</p>
            <a href="/signup">Sign Up</a>
          </aside>
          <aside id="ifaccountnotexists">
            <p>Forgot Password</p>
            <h4
              onClick={() => {
                hideonforgotpassword.current.style.display = "none";
                navigateToforgotpassword("forgot-password");
              }}
            >
              Click here
            </h4>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Login;
