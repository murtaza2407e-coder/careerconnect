import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function JobCard({ job }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="card job-card h-100 border-0 shadow-sm">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between gap-2 mb-3">
          <span className="badge bg-primary-subtle text-primary">
            {job.category}
          </span>
          <button
            className={`btn btn-sm ${saved ? "btn-success" : "btn-outline-secondary"}`}
            onClick={() => setSaved(!saved)}
          >
            {saved ? "Saved ✓" : "Save Job"}
          </button>
        </div>

        <h5 className="card-title fw-bold">{job.title}</h5>
        <p className="text-primary fw-semibold mb-1">{job.company}</p>
        <p className="text-muted small mb-2">📍 {job.location}</p>
        <p className="text-muted small mb-3">
          {job.type} · {job.salary}
        </p>
        <p className="card-text flex-grow-1">{job.description}</p>

        <div className="mb-3">
          {job.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="badge rounded-pill bg-light text-dark me-1 mb-1">
              {skill}
            </span>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{job.posted}</small>
          <Link to={`/jobs/${job.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;