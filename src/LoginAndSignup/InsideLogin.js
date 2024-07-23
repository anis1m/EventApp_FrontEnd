import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../EventAppLayout/carousalImages/Image 328.png";
import { Link, useNavigate } from "react-router-dom";
import "./InsideLogin.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { width } from "@mui/system";

function InsideLogin() {
  const url = "http://127.0.0.1:3500/api/v3/account/loginAccount";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const toHomePage = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(phoneNumber);
    if (email != null && email != "") {
      axios
        .post(url, { email, password, loggedinby: "" })

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
          toast.error(error.response.data.message, {
            position: "bottom-center",
          });
        });
    } else {
      axios
        .post(url, { phone: phoneNumber, password, loggedinby: "" })

        .then(() => {
          toast.success(
            "You have successfully Logged in. Redirecting in 5 Seconds",
            { position: "bottom-center" }
          );
          setTimeout(() => toHomePage("/"), 5000);
          getUserPhone(phoneNumber);
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Failed to Login. Check Phone Number or Password and try to login",
            { position: "bottom-center" }
          );
        });
    }
  }

  function getUserPhone(phoneNo) {
    const url = `http://127.0.0.1:3500/api/v3/account/getAccountByPhone/${phoneNo}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.data);
        console.log(response.data.data[0]._id);
        sessionStorage.setItem("id", response.data.data[0]._id);
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            name: response.data.data[0].name,
            address: response.data.data[0].address,
            phone: response.data.data[0].phone,
            profile: response.data.data[0].imageurl,
          })
        );
      })
      .catch((err) => {
        console.log(err);
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
            name: response.data.data[0].name,
            address: response.data.data[0].address,
            profile: response.data.data[0].imageurl,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          <h4>
            -------------------------------- OR --------------------------------
          </h4>
          <PhoneInput
            placeholder="9876543210"
            value={phoneNumber}
            onChange={setPhoneNumber}
            style={{ margin: "0 auto", width: "95%" }}
          />

          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login Now</button>
        </form>
        <GoogleOAuthProvider clientId="612499545967-stapoup1hn5ba38j9km2un2d7kujceb2.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);

              axios
                .post(url, {
                  email: decoded.email,
                  loggedinby: "google",
                })
                .then(() => {
                  getUserId(decoded.email);
                  toast.success(
                    "You have successfully logged in, redirecting in 5 seconds",
                    {
                      position: "bottom-center",
                    }
                  );
                  setTimeout(() => toHomePage("/"), 5000);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            width={380}
            size="large"
          />
        </GoogleOAuthProvider>
        <span id="loginWithGoogle">
          <i class="fa-brands fa-square-facebook"></i>
          <p>Login with Facebook</p>
        </span>

        <aside style={{ marginTop: "2.5rem" }} id="ifaccountnotexists">
          <p>Not Registered Yet?</p>
          <a href="/signup/inside-signup">Sign Up</a>
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
