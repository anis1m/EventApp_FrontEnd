import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "../EventAppLayout/Navbar";


function Login() {
  const toHomePage = useNavigate();

  return (
    <>
      <section className="login">
        <ToastContainer />
        <Navbar />
        <Outlet />
      </section>
    </>
  );
}

export default Login;
