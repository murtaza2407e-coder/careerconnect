import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CategoryCard from "../components/CategoryCard";
import JobCard from "../components/JobCard";
import CompanyCard from "../components/CompanyCard";
import { categories, jobs, companies } from "../data/data";

function Home() {
  const navigate = useNavigate();

  const handleSearch = (keyword) => {
    navigate(keyword.trim() ? `/jobs?search=${encodeURIComponent(keyword)}` : "/jobs");
  };

  return (
    <>
      <HeroSection onSearch={handleSearch} />

      <section className="py-5">
        <div className="container">
          <div className="section-heading">
            <span>Explore</span>
            <h2>Popular Job Categories</h2>
            <p>Find opportunities by the area that matches your interests.</p>
          </div>

          <div className="row g-4">
            {categories.map((category) => (
              <div className="col-6 col-md-4 col-lg-2" key={category.id}>
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="section-heading d-flex flex-column flex-md-row justify-content-between align-items-md-end">
            <div>
              <span>Opportunities</span>
              <h2>Featured Jobs</h2>
              <p>Explore some of our latest sample job opportunities.</p>
            </div>
            <button
              className="btn btn-primary mb-3"
              onClick={() => navigate("/jobs")}
            >
              View All Jobs
            </button>
          </div>

          <div className="row g-4">
            {jobs.filter((job) => job.featured).map((job) => (
              <div className="col-md-6 col-lg-4" key={job.id}>
                <JobCard job={job} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="section-heading">
            <span>Employers</span>
            <h2>Top Companies</h2>
            <p>Discover companies hiring across different industries.</p>
          </div>

          <div className="row g-4">
            {companies.map((company) => (
              <div className="col-md-6 col-lg-3" key={company.id}>
                <CompanyCard company={company} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;