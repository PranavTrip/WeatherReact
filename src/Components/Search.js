import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ setSearch, fetchAPI }) => {
  return (
    <>
      <div className="input-group mb-3 my-4">
        <input
          type="text"
          className="form-control"
          id="city-search"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Enter city name"
        // onChange={(event) => setSearch(event.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={() => {
            setSearch(document.getElementById('city-search').value)
            fetchAPI()
          }}
        >
          < FaSearch />
        </button>
      </div>
    </>
  );
};

export default Search;
