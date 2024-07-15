import React, { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../EventAppLayout/carousalImages/Image 328.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../EventAppLayout/Navbar";
import noimage from "../EventAppLayout/carousalImages/noImage.jpg";

function SignUp() {
  const url = "http://127.0.0.1:3500/api/v3/account/newAccount";
  const redirectnext = useRef();
  const redirectnavigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [phonenumber, setPhoneNumber] = useState(0);
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [fileinfo, setFileInfo] = useState();
  const signupButton = useRef();
  const showmoreInputs = useRef();
  const emailhidden = useRef();
  const orLinehidden = useRef();
  const phonenumberhidden = useRef();
  const errorPassword = useRef();
  const validatePassword = useRef([]);
  const errorPasswordMessage = useRef();
  const [previewUrl, setPreviewUrl] = useState(false);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  function postdata() {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: name,
        lastName: lastname,
        email,
        password,
        confirmPassword,
      }),
    })
      .then(() => {
        toast.warning(
          "Otp has been sent to your email address. Enter it to verify Your Account",
          { position: "bottom-center" }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log(fileinfo);
  }, [fileinfo]);

  function redirect(e) {
    e.preventDefault();
    if (!passwordRegex.test(password)) {
      if (errorPasswordMessage.current) {
        errorPasswordMessage.current.style.display = "block";
        errorPasswordMessage.current.innerHTML =
          "Please fulfil all conditions of creating password";
      }
    } else {
      redirectnavigate("otp-verification?email=" + email);
      redirectnext.current.style.display = "none";
      postdata();
    }
  }

  return (
    <>
      <section className="signup">
        <ToastContainer />
        <Navbar />
        <div className="insideSignup">
          <figure>
            <Link to={"/"}>
              <img src={logo} />
            </Link>
          </figure>
          <aside id="createAnAccountToSignUpinSite">
            <h2>Create an Account</h2>
            <p>Create an Account to Sign up in this site</p>
          </aside>
          <form ref={redirectnext} onSubmit={redirect}>
            <aside ref={emailhidden}>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                id="moresignupinputs"
                required
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    showmoreInputs.current.style.display = "block";
                    orLinehidden.current.style.display = "none";
                    phonenumberhidden.current.style.display = "none";
                  }
                  if (e.key === "Tab") {
                    errorPassword.current.style.display = "none";
                    errorPasswordMessage.current.style.display = "none";
                  }
                }}
                onClick={() => {
                  errorPassword.current.style.display = "none";
                  errorPasswordMessage.current.style.display = "none";
                }}
              />
            </aside>
            <p ref={orLinehidden}>
              -------------------------------- OR
              ---------------------------------
            </p>
            <aside ref={phonenumberhidden}>
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="+91-9876543210"
                id="moresignupinputs"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    showmoreInputs.current.style.display = "block";
                    orLinehidden.current.style.display = "none";
                    emailhidden.current.style.display = "none";
                  }
                  if (e.key === "Tab") {
                    errorPassword.current.style.display = "none";
                    errorPasswordMessage.current.style.display = "none";
                  }
                }}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onClick={() => {
                  errorPassword.current.style.display = "none";
                  errorPasswordMessage.current.style.display = "none";
                }}
              />
            </aside>
            <aside style={{ display: "none" }} ref={showmoreInputs}>
              <figure id="profilepicuploadinsideSignup">
                <div>
                  <label>Upload Image</label>
                  <figure>
                    <i class="fa-solid fa-upload"></i>
                    <input
                      type="file"
                      onClick={() => {
                        errorPassword.current.style.display = "none";
                        errorPasswordMessage.current.style.display = "none";
                      }}
                      onChange={(e) => {
                        setFileInfo(e.target.files[0]);
                        setPreviewUrl(true);
                      }}
                    />
                  </figure>
                </div>
                {previewUrl ? (
                  <img src={URL.createObjectURL(fileinfo)} />
                ) : (
                  <img src={noimage} />
                )}

                <aside>
                  <h3>Crop</h3>
                  <i class="fa-solid fa-scissors"></i>
                </aside>
              </figure>
              <aside>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  id="moresignupinputs"
                  required
                  onChange={(e) => setName(e.target.value)}
                  onClick={() => {
                    errorPassword.current.style.display = "none";
                    errorPasswordMessage.current.style.display = "none";
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Tab") {
                      errorPassword.current.style.display = "none";
                      errorPasswordMessage.current.style.display = "none";
                    }
                  }}
                />
              </aside>
              <aside>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  id="moresignupinputs"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  onClick={() => {
                    errorPassword.current.style.display = "none";
                    errorPasswordMessage.current.style.display = "none";
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Tab") {
                      errorPassword.current.style.display = "block";
                      errorPasswordMessage.current.style.display = "none";
                    }
                  }}
                />
              </aside>
              <aside>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  id="moresignupinputs"
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    setPassword(value);

                    if (/.{8,}/.test(value)) {
                      validatePassword.current[0].classList.remove("fa-xmark");
                      validatePassword.current[0].classList.add("fa-check");
                      validatePassword.current[0].style.color = "green";
                    } else {
                      validatePassword.current[0].classList.remove("fa-check");
                      validatePassword.current[0].classList.add("fa-xmark");
                      validatePassword.current[0].style.color = "red";
                    }

                    if (/[A-Z]/.test(value)) {
                      validatePassword.current[1].classList.remove("fa-xmark");
                      validatePassword.current[1].classList.add("fa-check");
                      validatePassword.current[1].style.color = "green";
                    } else {
                      validatePassword.current[1].classList.remove("fa-check");
                      validatePassword.current[1].classList.add("fa-xmark");
                      validatePassword.current[1].style.color = "red";
                    }

                    if (/[a-z]/.test(value)) {
                      validatePassword.current[2].classList.remove("fa-xmark");
                      validatePassword.current[2].classList.add("fa-check");
                      validatePassword.current[2].style.color = "green";
                    } else {
                      validatePassword.current[2].classList.remove("fa-check");
                      validatePassword.current[2].classList.add("fa-xmark");
                      validatePassword.current[2].style.color = "red";
                    }

                    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                      validatePassword.current[3].classList.remove("fa-xmark");
                      validatePassword.current[3].classList.add("fa-check");
                      validatePassword.current[3].style.color = "green";
                    } else {
                      validatePassword.current[3].classList.remove("fa-check");
                      validatePassword.current[3].classList.add("fa-xmark");
                      validatePassword.current[3].style.color = "red";
                    }

                    if (/\d/.test(value)) {
                      validatePassword.current[4].classList.remove("fa-xmark");
                      validatePassword.current[4].classList.add("fa-check");
                      validatePassword.current[4].style.color = "green";
                    } else {
                      validatePassword.current[4].classList.remove("fa-check");
                      validatePassword.current[4].classList.add("fa-xmark");
                      validatePassword.current[4].style.color = "red";
                    }
                  }}
                  onClick={() => {
                    errorPassword.current.style.display = "block";
                    errorPasswordMessage.current.style.display = "none";
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Tab") {
                      errorPassword.current.style.display = "none";
                      errorPasswordMessage.current.style.display = "none";
                    }
                  }}
                />
                <div id="errorPassword" ref={errorPassword}>
                  <dl>
                    <dd>
                      <i
                        class="fa-solid fa-xmark"
                        ref={(el) => (validatePassword.current[0] = el)}
                      ></i>
                      <p>Password Should be at least 8 characters long</p>
                    </dd>
                    <dd>
                      <i
                        class="fa-solid fa-xmark"
                        ref={(el) => (validatePassword.current[1] = el)}
                      ></i>
                      <p>password should contain at least 1 uppercase letter</p>
                    </dd>
                    <dd>
                      <i
                        class="fa-solid fa-xmark"
                        ref={(el) => (validatePassword.current[2] = el)}
                      ></i>
                      <p>password should contain at least 1 lowecase letter</p>
                    </dd>
                    <dd>
                      <i
                        class="fa-solid fa-xmark"
                        ref={(el) => (validatePassword.current[3] = el)}
                      ></i>
                      <p>
                        password should contain at least 1 special character
                      </p>
                    </dd>
                    <dd>
                      <i
                        class="fa-solid fa-xmark"
                        ref={(el) => (validatePassword.current[4] = el)}
                      ></i>
                      <p>password should contain at least 1 number</p>
                    </dd>
                  </dl>
                </div>
                <span
                  ref={errorPasswordMessage}
                  style={{ margin: "1rem 0", color: "red" }}
                ></span>
              </aside>
              <aside>
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="moresignupinputs"
                  required
                  onChange={(e) => {
                    setconfirmPassword(e.target.value);
                    if (e.target.value != password) {
                      setErrorMessage("Passwords do not match");
                      signupButton.current.disabled = true;
                      signupButton.current.style.cursor = "not-allowed";
                    } else {
                      setErrorMessage("");
                      signupButton.current.disabled = false;
                      signupButton.current.style.cursor = "pointer";
                    }
                  }}
                  onClick={() => {
                    errorPassword.current.style.display = "none";
                    errorPasswordMessage.current.style.display = "none";
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Tab") {
                      errorPassword.current.style.display = "none";
                      errorPasswordMessage.current.style.display = "none";
                    }
                  }}
                />
              </aside>
            </aside>
            {errorMessage && (
              <p style={{ color: "red", margin: "1rem 0", fontSize: "16px" }}>
                {errorMessage}
              </p>
            )}
            <blockquote id="moresignupdetailsaside">
              <input
                type="checkbox"
                required
                onClick={() => {
                  errorPassword.current.style.display = "none";
                  errorPasswordMessage.current.style.display = "none";
                }}
                onKeyDown={(e) => {
                  if (e.key === "Tab") {
                    errorPassword.current.style.display = "none";
                    errorPasswordMessage.current.style.display = "none";
                  }
                }}
              />
              <label>I accept the terms and conditions</label>
            </blockquote>
            <button
              ref={signupButton}
              type="submit"
              style={{ margin: "1rem 0" }}
              onClick={() => {
                if (email != null) {
                  showmoreInputs.current.style.display = "block";
                  orLinehidden.current.style.display = "none";
                  phonenumberhidden.current.style.display = "none";
                } else {
                  showmoreInputs.current.style.display = "block";
                  orLinehidden.current.style.display = "none";
                  emailhidden.current.style.display = "none";
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Tab") {
                  errorPassword.current.style.display = "none";
                  errorPasswordMessage.current.style.display = "none";
                }
              }}
            >
              Signup Now
            </button>
            <blockquote id="loginWithGoogle">
              <i class="fa-brands fa-google"></i>
              <p>Signup with Google</p>
            </blockquote>
          </form>
          <Outlet />
          <blockquote>
            <p>
              By clicking continue, you agree to our{" "}
              <strong>Terms of Service</strong> and{" "}
              <strong>Privacy Policy</strong>
            </p>
          </blockquote>
          <aside>
            <p id="ifaccountexists">Already have An Account?</p>
            <a id="logininstead" href="/login">
              Log in
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}

export default SignUp;
