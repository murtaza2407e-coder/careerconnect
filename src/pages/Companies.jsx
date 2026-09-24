import React from "react";
import CompanyCard from "../components/CompanyCard";
import { companies } from "../data/data";

function Companies() {
  return (
    <div className="container py-5">
      <div className="page-header mb-5">
        <span>Explore employers</span>
        <h1>Companies</h1>
        <p>Learn about companies and explore their available opportunities.</p>
      </div>

      <div className="row g-4">
        {companies.map((company) => (
          <div className="col-md-6 col-lg-3" key={company.id}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;