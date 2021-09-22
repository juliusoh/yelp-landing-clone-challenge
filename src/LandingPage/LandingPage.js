import React from "react";
import "./LandingPage.css";
import TopNavBar from "./TopNavBar/TopNavBar";
import logo from "../assets/yelp_logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import SearchSuggestions from "./SearchSuggestions/SearchSuggestions";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="search-area">
        <TopNavBar />
        <img src={logo} className="logo" alt="logo" />
        <SearchBar />
        <SearchSuggestions />
      </div>
    </div>
  );
};

export default LandingPage;
