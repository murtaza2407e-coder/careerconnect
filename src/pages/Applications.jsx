import React from "react";
import { applications } from "../data/data";

function Applications() {
  const statusClass = (status) => {
    if (status === "Interview") return "bg-success";
    if (status === "Under Review") return "bg-warning text-dark";
    return "bg-primary";
  };

  return (
    <div className="container py-5">
      <div className="page-header mb-5">
        <span>Candidate dashboard</span>
        <h1>My Applications</h1>
        <p>Review the sample applications submitted through CareerConnect.</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Job</th>
                <th>Company</th>
                <th>Applied On</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id}>
                  <td className="fw-semibold">{application.jobTitle}</td>
                  <td>{application.company}</td>
                  <td>{application.date}</td>
                  <td>
                    <span className={`badge ${statusClass(application.status)}`}>
                      {application.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Applications;