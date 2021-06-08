import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.SearchForm}
          onChange={props.handleInputChange}
          name="search"
          list="names"
          type="text"
          className="form-control"
          placeholder="Search By Name"
          id="search"
        />
        <br />
        <button className="btn btn-secondary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;