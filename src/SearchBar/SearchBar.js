import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="field has-addons">
        <p className="control">
          <button className="button is-static is-medium">Find</button>
        </p>
        <p className="control">
          <input
            className="input is-medium input-control"
            type="text"
            placeholder="nail salons, plumbers, takeout..."
          />
        </p>
        <p className="control">
          <button className="button is-static is-medium">Near</button>
        </p>
        <p className="control">
          <input
            className="input is-medium input-control"
            type="text"
            placeholder="address, neighborhood, city, state or zip"
          />
        </p>
        <div className="button is-medium search-button">
          <span className="icon is-small" style={{padding: "25px", borderRadius: "4px"}}>
            <i className="fas fa-search" style={{color: "white"}}></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
