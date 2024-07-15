import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../EventAppLayout/carousalImages/Image 328.png";
import { Link, useNavigate } from "react-router-dom";
import "./InsideLogin.css";

function InsideLogin() {
  const url = "http://127.0.0.1:3500/api/v3/account/loginAccount";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const toHomePage = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(url, { email, password })

      .then(() => {
        toast.success(
          "You have successfully Logged in. Redirecting in 5 Seconds",
          { position: "bottom-center" }
        );
        setTimeout(() => toHomePage("/"), 5000);
        getUserId(email);
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Failed to Login. Check Email or Password and try to login",
          { position: "bottom-center" }
        );
      });
  }

  function getUserId(mail) {
    const url = `http://127.0.0.1:3500/api/v3/account/getAccountByMail/${mail}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.data);
        console.log(response.data.data[0]._id);
        sessionStorage.setItem("id", response.data.data[0]._id);
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            email: response.data.data[0].email,
            firstName: response.data.data[0].firstName,
            lastName: response.data.data[0].lastName,
            phone: response.data.data[0].phone,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function resetmapvaluestofalse(imap) {}
  return (
    <>
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
        <form onSubmit={handleSubmit}>
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
          <Link to={"/login/forgot-password"}>
            <h4>Click here</h4>
          </Link>
        </aside>
      </div>
    </>
  );
}

export default InsideLogin;
