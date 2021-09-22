import React from "react";
import "./ResultSuggestions.css";

const ResultSuggestions = () => {
  return (
    <div className="results-suggestions">
      <ul className="suggestions">
        <li>
          <a href="" className="suggestion">
            Restaurants
            <i className="fas fa-caret-down" style={{ marginLeft: "2px" }}></i>
          </a>
        </li>
        <li>
          <a href="" className="suggestion">
            Home Services
            <i className="fas fa-caret-down" style={{ marginLeft: "2px" }}></i>
          </a>
        </li>
        <li>
          <a href="" className="suggestion">
            Auto Services
            <i className="fas fa-caret-down" style={{ marginLeft: "2px" }}></i>
          </a>
        </li>
        <li>
          <a href="" className="suggestion">
            More
            <i className="fas fa-caret-down" style={{ marginLeft: "2px" }}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ResultSuggestions;
