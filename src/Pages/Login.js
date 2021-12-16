import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Login.css";
import { Alert } from "react-bootstrap";

const Login = () => {
  const [error, setError] = useState();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    let val = event.target.value;
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [event.target.id]: val
      }
    })
  }
  console.log(userDetails);

  const loginHandler = (event) => {
    event.preventDefault();
    let atPos = userDetails.email.indexOf("@");
    let dotPos = userDetails.email.indexOf(".");
    let nextAtPos = userDetails.email.indexOf("@", atPos + 1);
    let nextDotPos = userDetails.email.indexOf(".", dotPos + 1);
    if (userDetails.email === "" || userDetails.password === "") {
      setError("Enter valid data !");
    } else if (atPos > dotPos || nextAtPos !== -1 || nextDotPos !== -1) {
      setError("Enter valid email !")
    } else {
      console.log("success")
    }
  }

  return (
    <section className="login-sect">
    <div className="container">
      <div className="padding-top padding-bottom">
        <div className="signup-form">
          <div className="header">
            <h2>Hello</h2>
            <p>Welcome Back</p>
          </div>
          <form class="account-form" onSubmit={loginHandler}>
            <div class="form-group">
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                id="email"
                required=""
                onChange={onChangeHandler}
                value = {userDetails.name}
              />
            </div>
            <div class="form-group">
              <label htmlFor="password">
                Password<span>*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                required=""
                onChange={onChangeHandler}
                value= {userDetails.password}
              />
            </div>
            <div class="form-group checkgroup">
              <input type="checkbox" id="remember" />
              <label for="remember">remember password</label>
              <a href="#0" class="forget-pass">
                Forget Password
              </a>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <div class="form-group text-center">
            <button type="submit">Log In</button>
            </div>
          </form>
          <div class="option">
            Don't have an account? <Link to={`/signup`}>Sign up now</Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;
