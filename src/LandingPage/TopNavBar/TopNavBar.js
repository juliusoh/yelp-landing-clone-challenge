import React from "react";
import "./TopNavBar.css";

const TopNavBar = () => {
  return (
    <div className='top-nav'>
      <div className="left">
        <span>Write a Review</span>
        <span>Events</span>
        <span>Talk</span>
      </div>
      <div className="right">
        <span>Log In</span>
        <button className="button">Sign Up</button>
      </div>
    </div>
    );
};

export default TopNavBar;
