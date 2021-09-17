import React from "react";
import "./LandingPage.css";
import TopNavBar from "./TopNavBar/TopNavBar";
import logo from "../assets/yelp_logo.svg";
import SearchBar from "../SearchBar/SearchBar";

const LandingPage = () => {
  return (
    <div>
      <TopNavBar />
      <img src={logo} className="logo" alt="logo" />
      <SearchBar />
    </div>
  );
};

export default LandingPage;
