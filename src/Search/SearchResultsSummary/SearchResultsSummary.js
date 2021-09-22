import React from "react";
import { SearchResults } from "../SearchResults.js/SearchResults";
import "./SearchResultSummary.css";

export const SearchResultsSummary = () => {
  return (
    /*left */
    <div className="container">
      <div className="left-nav">
        <div className="filters-section">
          <p className="filters">Filters</p>
          <div className="buttons has-addons" style={{ padding: " 16px 0px " }}>
            <button className="button is-rounded">$</button>
            <button className="button">$$</button>
            <button className="button">$$$</button>
            <button className="button is-rounded">$$$$</button>
          </div>
        </div>
        <div className="suggestions_">
          <p className="suggested">Suggested</p>
          <label className="checkbox">
            <input type="checkbox" />
            Open Now{" "}
            <span style={{ color: "rgba(117, 114, 128, 1)" }}>10:27pm</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Yelp Delivery
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Yelp Takeout
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Reservations
          </label>
        </div>
        <div className="categories">
          <p className="category">Category</p>
          <div>
            <button className="category_button">
              <span className="category_button_text">Burgers</span>
            </button>

            <button className="category_button">
              <span className="category_button_text">Restaurants</span>
            </button>
          </div>
          <div>
            <button className="category_button">
              <span className="category_button_text">Food</span>
            </button>
            <button className="category_button">
              <span className="category_button_text">Fast Food</span>
            </button>
          </div>
          <p className="see-all">
            <a href="" className="see-all-link">
              See All
            </a>
          </p>
        </div>

        <div className="features">
          <p className="feature">Features</p>
          <label className="checkbox">
            <input type="checkbox" />
            Good for Groups
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Good for Kids
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Has TV
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            Good for Lunch
          </label>
          <p className="see-all">
            <a href="" className="see-all-link">
              See All
            </a>
          </p>
        </div>
        <div className="distance">
          <p className="distance_heading">Distance</p>
          <div className="radio-fields">
          <div className="field">
            <input
              className="is-checkradio"
              id="exampleRadioDefault"
              type="radio"
              name="exampleRadioDefault"
              checked="checked"
            />
            <label for="exampleRadioDefault">Birds-eye View</label>
          </div>
          <div className="field">
            <input
              className="is-checkradio"
              id="exampleRadioDefault"
              type="radio"
              name="exampleRadioDefault"
              checked="checked"
            />
            <label for="exampleRadioDefault">Driving (5 mi.)</label>
          </div>
          <div className="field">
            <input
              className="is-checkradio"
              id="exampleRadioDefault"
              type="radio"
              name="exampleRadioDefault"
              checked="checked"
            />
            <label for="exampleRadioDefault">Biking (2 mi.)</label>
          </div>
          <div className="field">
            <input
              className="is-checkradio"
              id="exampleRadioDefault"
              type="radio"
              name="exampleRadioDefault"
              checked="checked"
            />
            <label for="exampleRadioDefault">Walking (1 mi.)</label>
          </div>
          <div className="field">
            <input
              className="is-checkradio"
              id="exampleRadioDefault"
              type="radio"
              name="exampleRadioDefault"
              checked="checked"
            />
            <label for="exampleRadioDefault">Within 4 blocks</label>
          </div>
          </div>
        </div>
      </div>


      <div>
        <span className="result-inline">Fullerton</span>
        <span className="icon">
          <i className="fas fa-chevron-right small_icon"></i>
        </span>
        <span className="result-inline">Restaurants</span>
        <span className="icon">
          <i className="fas fa-chevron-right small_icon"></i>
        </span>
        <span className="result-inline">Burgers</span>
        <span className="icon">
          <i className="fas fa-chevron-right small_icon"></i>
        </span>
        <h1 className="subtitle">
          <strong>Best burgers in Fullerton, CA</strong>
        </h1>
        <div className="delivery_takeout">
          <button className="delivery">
            <div>
              <span>Delivery</span>
            </div>
            <div>
              <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_web/74612a9036a6/assets/img/svg_illustrations/delivery_70x56_v2.svg" alt="" />
            </div>
          </button>

          <button className="delivery" style={{marginLeft: "16px"}}>
            <div>
              <span>Takeout</span>
            </div>
            <div>
              <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_web/c0e9ce1a8aa7/assets/img/svg_illustrations/takeout_70x56_v2.svg" alt="" />
            </div>
          </button>
        </div>
        <div className="result-page-h3">
          <h3>Sponsored Results <i className="fas fa-info-circle"></i></h3>
        </div>
        <div className="result-page-h3">
          <h3>All Results</h3>
        </div>
        <SearchResults />
      </div>
    </div>
  );
};
