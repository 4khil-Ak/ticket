import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "../Css/Login.css";
import Select from "react-select";
import Loader from "../Ui/Loader";

const Signup = (props) => {
  const url = "https://apidev.ticketezy.com/users";
  let navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    password: "",
    confirm: "",
    gender: "",
  });

  const GenderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const onChangeHandler = (event,action) => {
    const tempInputs = JSON.parse(JSON.stringify(userDetails));
    if (event.target) {
      tempInputs[event.target.name] = event.target.value;
    } else if (action) {
      tempInputs[action.name] = event.value;
    }
    setUserDetails(tempInputs);
  };

  const creatUserHandler = (event) => {
    event.preventDefault();
    let atPos = userDetails.email.indexOf("@");
    let dotPos = userDetails.email.indexOf(".");
    let nextAtPos = userDetails.email.indexOf("@", atPos + 1);
    let nextDotPos = userDetails.email.indexOf(".", dotPos + 1);
    if (
      userDetails.fname === "" ||
      userDetails.lname === "" ||
      userDetails.email === "" ||
      userDetails.number === "" ||
      userDetails.password === "" ||
      userDetails.confirm === "" ||
      userDetails.gender
    ) {
      setError("Enter valid data !");
    } else if (
      userDetails.fname.match(/^[a-zA-Z]+$/) === null ||
      userDetails.lname.match(/^[a-zA-Z]+$/) === null
    ) {
      setError("Name cannot contain special character");
    } else if (userDetails.fname === userDetails.lname) {
      setError("First Name and Last Name cannot be the same");
    } else if (atPos > dotPos || nextAtPos !== -1 || nextDotPos !== -1) {
      setError("Enter valid email !");
    } else if (userDetails.number.length !== 10) {
      setError("Enter valid mobile number !");
    } else if (userDetails.password !== userDetails.confirm) {
      setError("Passwords mismatch");
    } else {
      setLoading(true);
      Axios.post(
        url,
        {
          user: {
            first_name: userDetails.fname,
            last_name: userDetails.lname,
            email: userDetails.email,
            mobile: userDetails.number,
            password: userDetails.password,
            identity: userDetails.gender,
          },
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setLoading(false);
          navigate("/login");
          setError(res.errors);
        })
        .catch((axioserror) => {
          setLoading(false);
          if (
            axioserror.response.data.errors.email !== null &&
            axioserror.response.data.errors.email
          ) {
            setError(axioserror.response.data.errors.email);
          } else if (
            axioserror.response.data.errors.mobile !== null &&
            axioserror.response.data.errors.mobile
          ) {
            setError(axioserror.response.data.errors.mobile);
          } else if (
            axioserror.response.data.errors.password !== null &&
            axioserror.response.data.errors.password
          ) {
            setError(axioserror.response.data.errors.password);
          } else {
            setError("Network Error!. Try again later");
          }
        });
    }
  };

  return (
    <section className="login-sect">
      <div className="container">
        <div className="padding-top padding-bottom">
          <div className="signup-form">
            <div className="header">
              <h2>Welcome</h2>
              <p>To TicketEzy</p>
            </div>
            <form className="account-form" onSubmit={creatUserHandler}>
              <div className="row" style={{ margin: "0 -15px" }}>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="fname">
                      First Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your First Name"
                      id="fname"
                      required=""
                      name="fname"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="lname">
                      Last Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Last Name"
                      id="lname"
                      required=""
                      name="lname"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email"
                  required=""
                  name="email"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="number">
                  Mobile Number<span>*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter Your Number"
                  id="number"
                  required=""
                  name="number"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">
                  Choose Gender<span>*</span>
                </label>
                <Select
                  options={GenderOptions}
                  id="gender"
                  required=""
                  name="gender"
                  value={GenderOptions.filter(function (option) {
                    return option.value === userDetails.gender;
                  })}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="row" style={{ margin: "0 -15px" }}>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="password">
                      Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      required=""
                      name="password"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="confirm">
                      Confirm Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      id="confirm"
                      required=""
                      name="confirm"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group checkgroup">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">
                  I agree to the <Link to={`/`}>Terms, Privacy Policy</Link> and{" "}
                  <Link to={`/`}>Fees</Link>
                </label>
              </div>
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="form-group text-center">
                <button type="submit">Sign Up</button>
              </div>
            </form>
            <div className="option">
              Already have an account? <Link to={`/login`}>Login</Link>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </section>
  );
};

export default Signup;
