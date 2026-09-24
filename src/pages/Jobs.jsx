import React from "react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import JobCard from "../components/JobCard";
import { jobs, categories } from "../data/data";

function Jobs() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);

  const filteredJobs = useMemo(() => {
    const query = search.toLowerCase().trim();

    return jobs.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.category.toLowerCase().includes(query) ||
        job.skills.some((skill) => skill.toLowerCase().includes(query));

      const matchesCategory = !category || job.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="container py-5">
      <div className="page-header mb-4">
        <span>Career opportunities</span>
        <h1>Find Your Next Job</h1>
        <p>Search and filter through our sample job listings.</p>
      </div>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-8">
              <label className="form-label fw-semibold">Search</label>
              <input
                className="form-control"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by title, company, skill..."
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Category</label>
              <select
                className="form-select"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <h5>{filteredJobs.length} Jobs Found</h5>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => {
            setSearch("");
            setCategory("");
          }}
        >
          Clear Filters
        </button>
      </div>

      <div className="row g-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="col-md-6 col-lg-4" key={job.id}>
              <JobCard job={job} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="empty-state">
              <div className="display-5">🔎</div>
              <h4>No jobs found</h4>
              <p>Try another keyword or category.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;