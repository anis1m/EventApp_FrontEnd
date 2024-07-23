import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../EventAppLayout/Navbar";
import { Outlet } from "react-router-dom";

function SignUp() {
  return (
    <>
      <section className="signup">
        <ToastContainer />
        <Navbar />
        <Outlet />
      </section>
    </>
  );
}

export default SignUp;
