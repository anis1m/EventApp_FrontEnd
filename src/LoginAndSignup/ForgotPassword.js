import React, { useState } from "react";
import "./ForgotPassword.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setForgotpasswordmail(e.target.value)}
          />
          <button type="submit">Continue</button>
        </form>
      </section>
    </>
  );
}

export default ForgotPassword;
