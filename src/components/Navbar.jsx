import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active fw-bold" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          CareerConnect
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={linkClass} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/jobs">Jobs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/companies">Companies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/applications">Applications</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/profile">Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;