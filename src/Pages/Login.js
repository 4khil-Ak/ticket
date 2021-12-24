import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Login.css";
import { Alert } from "react-bootstrap";

const Login = () => {
  let navigate = useNavigate();
  const url = "https://apidev.ticketezy.com/users/login";
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
      Axios.post(url, {
        "email": userDetails.email,
        "password": userDetails.password,
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(res => {
        console.log(res);
        let email = userDetails.email;
        navigate("/")
        localStorage.setItem("userId", email);
      }).catch(axioserror => {
      })
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
            <form className="account-form" onSubmit={loginHandler}>
              <div className="form-group">
                <label htmlFor="email">
                  Email<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email"
                  required=""
                  onChange={onChangeHandler}
                  value={userDetails.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  required=""
                  onChange={onChangeHandler}
                  value={userDetails.password}
                />
              </div>
              {/* <div className="form-group checkgroup">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">remember password</label>
                <a href="#0" className="forget-pass">
                  Forget Password
                </a>
              </div> */}
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="form-group text-center">
                <button type="submit">Log In</button>
              </div>
            </form>
            <div className="option">
              Don't have an account? <Link to={`/signup`}>Sign up now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
