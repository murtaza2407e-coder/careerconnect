import React from "react";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(keyword);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col-md-9">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search jobs, skills or companies..."
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button type="submit" className="btn btn-warning btn-lg w-100">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;