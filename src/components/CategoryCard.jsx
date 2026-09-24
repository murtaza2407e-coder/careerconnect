import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/jobs?category=${encodeURIComponent(category.name)}`}
      className="text-decoration-none"
    >
      <div className="card category-card h-100 border-0 shadow-sm text-center">
        <div className="card-body py-4">
          <div className="category-icon mb-3">{category.icon}</div>
          <h6 className="fw-bold text-dark">{category.name}</h6>
          <p className="text-muted mb-0">{category.jobs} jobs</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;