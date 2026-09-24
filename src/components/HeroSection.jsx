import React from "react";
import SearchBar from "./SearchBar";

function HeroSection({ onSearch }) {
  return (
    <section className="hero-section py-5">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <span className="badge bg-light text-primary mb-3 px-3 py-2">
              Find your next opportunity
            </span>
            <h1 className="display-4 fw-bold mb-3">
              Build Your Career With CareerConnect
            </h1>
            <p className="lead mb-4">
              Discover jobs, explore companies, and connect with opportunities
              that match your skills.
            </p>
            <SearchBar onSearch={onSearch} />
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-card shadow">
              <div className="hero-icon">💼</div>
              <h3>Thousands of opportunities</h3>
              <p className="mb-0">
                Explore roles across technology, design, marketing, finance,
                data and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;