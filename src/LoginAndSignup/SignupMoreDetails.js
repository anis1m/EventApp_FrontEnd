import React, { useState } from "react";
import "./SignupMoreDetails.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function SignupMoreDetails() {
  const query = useQuery();
  const email = query.get("email");
  const [otp, setOtp] = useState();

  const navigateToLogin = useNavigate();
  const url =
    "http://127.0.0.1:3500/api/v3/account/verifyAccount/email=" + email;

  function verifyotp() {
    axios
      .post(url, {
        otp,
      })
      .then(() => {
        toast.success(
          "Verified Successfully. Now You Can Login. Redirecting in 5 Seconds",
          {
            position: "top-center",
          }
        );
        setTimeout(() => navigateToLogin("/login"), 5000);
      })
      .catch((error) => {
        toast.error("Otp Verification Failed. Try again", {
          position: "top-center",
        });
      });
  }

  return (
    <>
      <ToastContainer />
      <div className="moresignupdetails">
        <input
          type="number"
          placeholder="Enter Otp to Continue"
          id="moresignupinputs"
          required
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={verifyotp}>Continue</button>
      </div>
    </>
  );
}

export default SignupMoreDetails;
