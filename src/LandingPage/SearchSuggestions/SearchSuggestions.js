import React from "react";
import "./SearchSuggestions.css";

const SearchSuggestions = () => {
  return (
    <div>
      <ul className="suggestions">
        <li>
          <span className="icon is-small">
            <i className="fas fa-wrench"></i>
          </span>
          <a href="" className="suggestion">
            Plumbers
          </a>
        </li>
        <li>
          <span className="icon is-small">
            <i className="fas fa-utensils"></i>
          </span>
          <a href="" className="suggestion">
            Restaurants
          </a>
        </li>
        <li>
          <span className="icon is-small">
            <i className="fas fa-home"></i>
          </span>
          <a href="" className="suggestion">
            Home Services
            <i className="fas fa-caret-down" style={{marginLeft: "2px"}}></i>
          </a>
        </li>
        <li>
          <span className="icon is-small">
            <i className="fas fa-motorcycle"></i>
          </span>
          <a href="" className="suggestion">
            Delivery
          </a>
        </li>
        <li>
          <span className="icon is-small">
            <i className="fas fa-home"></i>
          </span>
          <a href="" className="suggestion">
            Black Owned
            <i className="fas fa-caret-down" style={{marginLeft: "2px"}}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SearchSuggestions;
