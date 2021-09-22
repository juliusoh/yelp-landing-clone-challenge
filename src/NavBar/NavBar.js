import React from "react";
import "./NavBar.css";
import logo from "../assets/yelp_logo.svg";
import ResultSuggestions from "../ResultSuggestions/ResultSuggestions";

const NavBar = () => {
  return (
    <div className="search-landing">
      <div className="nav-bar" style={{ padding: "24px 0px 0px 40px" }}>
        <img
          src={logo}
          alt="yelp logo"

        />

        <div className="search-bar-result">
          <div className="field has-addons">
            <p className="control">
              <input
                className="input is-medium input-control-result"
                type="text"
                placeholder=""
              />
            </p>
            <p className="control">
              <input
                className="input is-medium input-control-result"
                type="text"
                placeholder=""
              />
            </p>
            <div className="button is-medium search-button-result">
              <span
                className="icon is-small"
                style={{ padding: "25px", borderRadius: "4px" }}
              >
                <i className="fas fa-search" style={{ color: "white" }}></i>
              </span>
            </div>
          </div>
        </div>

        <div className="side-right-items">
          <span className="right-item misc">
            <a href="">For Businesses</a>
          </span>
          <span className="right-item misc">
            <a href="">Write a Review</a>
          </span>

          <span className="right-item">
            <button
              className="button"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                textAlign: "center",
                lineHeight: "22px",
              }}
            >
              Log In
            </button>
          </span>
          <span className="right-item">
            <button
              className="button"
              style={{
                backgroundColor: "rgba(244,57,57,1)",
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Sign Up
            </button>
          </span>
        </div>
      </div>
      <ResultSuggestions />
    </div>
  );
};

export default NavBar;
