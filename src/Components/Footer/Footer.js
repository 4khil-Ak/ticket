import React from "react";
import $ from "jquery";

const Footer = () => {
  $(document).ready(function () {
    $(".social-icons li a").hover(function () {
      $(".social-icons li a").removeClass("active");
      $(this).addClass("active");
    });
  });
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="logo">
            <img
              className="header-logo"
              src="/images/logo.png"
              alt="ticketezy"
            />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#0" className="active">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-google"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="left">
            <p>
              Copyright © 2020.All Rights Reserved By{" "}
              <a href="#0">Ticketezy </a>
            </p>
          </div>
          <ul className="links">
            <li>
              <a href="#0">About</a>
            </li>
            <li>
              <a href="#0">Terms Of Use</a>
            </li>
            <li>
              <a href="#0">Privacy Policy</a>
            </li>
            <li>
              <a href="#0">FAQ</a>
            </li>
            <li>
              <a href="#0">Feedback</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
