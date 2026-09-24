import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { jobs } from "../data/data";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);

  const job = jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div className="container py-5 text-center">
        <div className="display-3">404</div>
        <h2>Job Not Found</h2>
        <p className="text-muted">The job you requested does not exist.</p>
        <Link to="/jobs" className="btn btn-primary">
          Back to Jobs
        </Link>
      </div>
    );
  }

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className="container py-5">
      <Link to="/jobs" className="text-decoration-none">
        ← Back to Jobs
      </Link>

      <div className="row g-4 mt-2">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <span className="badge bg-primary-subtle text-primary mb-3">
                {job.category}
              </span>

              <h1 className="fw-bold">{job.title}</h1>
              <h5 className="text-primary">{job.company}</h5>

              <div className="job-meta my-4">
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
                <span>💰 {job.salary}</span>
                <span>🕒 {job.posted}</span>
              </div>

              <hr />

              <h4 className="mt-4">Job Description</h4>
              <p>{job.description}</p>

              <h4 className="mt-4">Required Skills</h4>
              <div className="mb-4">
                {job.skills.map((skill) => (
                  <span key={skill} className="badge bg-light text-dark me-2 mb-2 p-2">
                    {skill}
                  </span>
                ))}
              </div>

              <h4>Requirements</h4>
              <ul>
                {job.requirements.map((requirement) => (
                  <li key={requirement} className="mb-2">
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm sticky-lg-top job-action-card">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-3">Interested in this job?</h5>

              {applied ? (
                <div className="alert alert-success">
                  Application started successfully!
                </div>
              ) : null}

              <button
                className="btn btn-primary btn-lg w-100 mb-2"
                onClick={handleApply}
              >
                {applied ? "Application Started ✓" : "Apply Now"}
              </button>

              <button
                className={`btn w-100 ${
                  saved ? "btn-success" : "btn-outline-primary"
                }`}
                onClick={() => setSaved(!saved)}
              >
                {saved ? "Saved ✓" : "Save Job"}
              </button>

              <button
                className="btn btn-link w-100 mt-2"
                onClick={() => navigate("/profile")}
              >
                View My Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;