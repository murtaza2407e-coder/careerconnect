import React from "react";
import { profile } from "../data/data";

function Profile() {
  return (
    <div className="container py-5">
      <div className="page-header mb-5">
        <span>Candidate profile</span>
        <h1>My Profile</h1>
        <p>Sample candidate information for the CareerConnect portal.</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm text-center h-100">
            <div className="card-body p-4">
              <div className="profile-avatar mx-auto mb-3">MA</div>
              <h3 className="fw-bold">{profile.name}</h3>
              <p className="text-primary fw-semibold">{profile.title}</p>
              <p className="text-muted">📍 {profile.location}</p>
              <hr />
              <p className="small mb-2">📧 {profile.email}</p>
              <p className="small">📱 {profile.phone}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h4 className="fw-bold">About Me</h4>
              <p>{profile.about}</p>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-3">Skills</h4>
              {profile.skills.map((skill) => (
                <span key={skill} className="badge bg-primary-subtle text-primary me-2 mb-2 p-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;