import React from "react";

const Search = ({ setSearch, fetchAPI }) => {
  return (
    <>
      <div className="input-group mb-3 my-4">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Enter city name"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={() => fetchAPI()}
        >
          Get Weather Report
        </button>
      </div>
    </>
  );
};

export default Search;
