import React from "react";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";

const Navbar = () => {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $(".navbar").css("background", "#0a1e5e");
        $(".navbar").css("border", "none");
      } else {
        $(".navbar").css("background", "");
        $(".navbar").css("border", "");
      }
    });
  });

  return (
    <nav className="navbar header-section navbar-expand-md">
      {/* <!-- Brand --> */}
      <Link className="navbar-brand" to={`/`}>
        <img className="img-fluid" src="/images/logo.png" alt="ticketezy" />
      </Link>

      {/* <!-- Toggler/collapsibe Button --> */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* <!-- Navbar links --> */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={`/`} className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`/events`}>
              events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`/about`}>
              about
            </NavLink>
          </li>
          <li className="nav-item header-button">
            <Link className="nav-link" to={`/login`}>
              join us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
