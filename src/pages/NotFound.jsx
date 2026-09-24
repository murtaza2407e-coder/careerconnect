import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5">
      <div className="not-found text-center">
        <div className="display-1 fw-bold text-primary">404</div>
        <h1>Page Not Found</h1>
        <p className="text-muted">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;