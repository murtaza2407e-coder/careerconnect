import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <h4 className="fw-bold">CareerConnect</h4>
            <p className="text-light-emphasis">
              A ReactJS job portal created for the Frontend Web Development
              Sessions 1–12 assignment.
            </p>
          </div>

          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/">Home</Link></li>
              <li><Link className="footer-link" to="/jobs">Jobs</Link></li>
              <li><Link className="footer-link" to="/companies">Companies</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6>Candidate</h6>
            <ul className="list-unstyled">
              <li><Link className="footer-link" to="/applications">Applications</Link></li>
              <li><Link className="footer-link" to="/profile">Profile</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        <p className="text-center text-light-emphasis mb-0">
          © 2026 CareerConnect. Educational project.
        </p>
      </div>
    </footer>
  );
}

export default Footer;