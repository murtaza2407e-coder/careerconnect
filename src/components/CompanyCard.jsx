import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ company }) {
  return (
    <div className="card company-card h-100 border-0 shadow-sm">
      <div className="card-body text-center">
        <div className="company-logo mx-auto mb-3">{company.logo}</div>
        <h5 className="fw-bold">{company.name}</h5>
        <p className="text-muted mb-1">📍 {company.location}</p>
        <p className="text-primary small fw-semibold">{company.industry}</p>
        <p className="small">{company.description}</p>
        <span className="badge bg-primary mb-3">
          {company.openJobs} open jobs
        </span>
        <div>
          <Link to="/jobs" className="btn btn-outline-primary btn-sm">
            View Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;