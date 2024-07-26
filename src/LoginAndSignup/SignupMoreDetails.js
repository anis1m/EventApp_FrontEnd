import React, { useState } from "react";
import "./SignupMoreDetails.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../EventAppLayout/carousalImages/Image 328.png";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function SignupMoreDetails() {
  const query = useQuery();

  const [otp, setOtp] = useState();

  const navigateToLogin = useNavigate();
  const email = query.get("email");
  const phone = query.get("phone");
  function verifyotp() {
    if (email != null && email != "") {
      const url = `${process.env.REACT_APP_API_URL}/api/v3/account/verifyAccount?email=${email}`;
      axios
        .post(url, {
          otp,
        })
        .then(() => {
          toast.success(
            "Verified Successfully. Now You Can Login. Redirecting in 5 Seconds",
            {
              position: "bottom-center",
            }
          );
          setTimeout(() => navigateToLogin("/login/inside-login"), 5000);
        })
        .catch((error) => {
          toast.error("Otp Verification Failed. Try again", {
            position: "bottom-center",
          });
        });
    } else {
      const encodedPhoneNumber = encodeURIComponent(phone);
      const url = `${process.env.REACT_APP_API_URL}/api/v3/account/verifyAccount?phone=${encodedPhoneNumber}`;
      axios
        .post(url, {
          otp,
        })
        .then(() => {
          toast.success(
            "Verified Successfully. Now You Can Login. Redirecting in 5 Seconds",
            {
              position: "bottom-center",
            }
          );
          setTimeout(() => navigateToLogin("/login/inside-login"), 5000);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "bottom-center",
          });
          console.log(error);
        });
    }
  }

  return (
    <>
      <div className="moresignupdetails">
        <aside>
          <img src={logo} />
          <p>Enter otp to verify your {email != null ? "email" : "phone"}</p>
        </aside>
        <input
          type="number"
          placeholder="Enter Otp to Continue"
          id="moresignupinputs"
          required
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={verifyotp}>Continue</button>
        <blockquote>
          <p>
            By clicking continue, you agree to our{" "}
            <strong>Terms of Service</strong> and{" "}
            <strong>Privacy Policy</strong>
          </p>
        </blockquote>
      </div>
    </>
  );
}

export default SignupMoreDetails;
