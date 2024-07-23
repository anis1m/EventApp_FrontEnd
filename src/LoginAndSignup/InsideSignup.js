import React, { useEffect, useRef, useState } from "react";
import "./InsideSignup.css";
import { Link, Outlet, json, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../EventAppLayout/carousalImages/Image 328.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../EventAppLayout/Navbar";
import noimage from "../EventAppLayout/carousalImages/noImage.jpg";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import FacebookLogin from "@greatsumini/react-facebook-login";

function InsideSignup() {
  const url = "http://127.0.0.1:3500/api/v3/account/newAccount";
  const redirectnavigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fileinfo, setFileInfo] = useState(null);
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
    return axios
      .post(url, {
        name,
        address,
        email,
        password,
        phone: phonenumber,
        confirmPassword,
        imageurl: "",
        signedupby: "",
      })
      .then((res) => {
        if (email != null && email != "") {
          toast.success(
            "Otp has been sent to your email address. Enter it to verify Your Account",
            { position: "bottom-center" }
          );
        } else {
          toast.success(
            "Otp has been sent to your phone number. Enter it to verify your Account",
            {
              position: "bottom-center",
            }
          );
        }
        return res.status;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.request.status);

        toast.error(error.response.data.message, { position: "bottom-center" });
        return error.request.status;
      });
  }

  useEffect(() => {
    console.log(fileinfo);
  }, [fileinfo]);

  async function redirect(e) {
    e.preventDefault();

    if (!passwordRegex.test(password)) {
      if (errorPasswordMessage.current) {
        errorPasswordMessage.current.style.display = "block";
        errorPasswordMessage.current.innerHTML =
          "Please fulfil all conditions of creating password";
      }
    } else {
      if (email != null && email != "") {
        const statuscode = await postdata();
        console.log(statuscode);
        if (statuscode != 400) {
          redirectnavigate("/signup/otp-verification?email=" + email);
        }
      } else {
        const statuscode = await postdata();
        if (statuscode != 400) {
          const encodedPhoneNumber = encodeURIComponent(phonenumber);
          redirectnavigate(
            "/signup/otp-verification?phone=" + encodedPhoneNumber
          );
        }
      }
    }
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
            phone: response.data.data[0].phone,
            profile: response.data.data[0].imageurl,
          })
        );
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }

  function googleLogin(n, e, p, i) {
    if (getUserId(e) === true) {
      toast.warning(
        "There is already an account exists with this email, try with another mail",
        {
          position: "bottom-center",
        }
      );
    } else {
      axios
        .post(url, {
          name: n,
          email: e,
          imageurl: p,
          isVerified: i,
          signedupby: "google",
        })
        .then(() => {
          toast.success(
            "Successfully signed up, redirecting to home page in 5 seconds"
          );
          setTimeout(() => {
            redirectnavigate("/");
          }, 5000);
          getUserId(e);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message, { position: "bottom-center" });
        });
    }
  }

  return (
    <>
      <section className="insideSignup">
        <figure>
          <Link to={"/"}>
            <img src={logo} />
          </Link>
        </figure>
        <aside id="createAnAccountToSignUpinSite">
          <h2>Create an Account</h2>
          <p>Create an Account to Sign up in this site</p>
        </aside>
        <form onSubmit={redirect}>
          <aside ref={emailhidden}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              id="moresignupinputs"
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
            ----------------------------------- OR
            -----------------------------------
          </p>
          <aside ref={phonenumberhidden}>
            <label>Phone Number</label>
            <PhoneInput
              placeholder="9876543210"
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
              style={{ margin: "0 auto", width: "95%" }}
              onChange={setPhoneNumber}
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
                onChange={(e) => setAddress(e.target.value)}
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
                    <p>password should contain at least 1 special character</p>
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
              if (email != null && email != "") {
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
          <GoogleOAuthProvider clientId="612499545967-stapoup1hn5ba38j9km2un2d7kujceb2.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);

                googleLogin(
                  decoded.name,
                  decoded.email,
                  decoded.picture,
                  decoded.email_verified
                );
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              size="large"
              width={400}
              text="signup_with"
            />
          </GoogleOAuthProvider>
          <span id="loginWithGoogle">
            <i class="fa-brands fa-square-facebook"></i>
            <FacebookLogin
              appId="366500193140137"
              onSuccess={(response) => {
                console.log("Login Success!", response);
              }}
              onFail={(error) => {
                console.log("Login Failed!", error);
              }}
              onProfileSuccess={(response) => {
                console.log("Get Profile Success!", response);
              }}
              children="Signup With Facebook"
              style={{
                backgroundColor: "transparent",
                color: "black",
                textAlign: "center",
                fontWeight: 600,
              }}
            />
          </span>
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
          <a id="logininstead" href="/login/inside-login">
            Log in
          </a>
        </aside>
      </section>
    </>
  );
}

export default InsideSignup;
