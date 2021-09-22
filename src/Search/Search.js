import React from 'react'
import NavBar from '../NavBar/NavBar';
import "./Search.css";
import { SearchResultsSummary } from './SearchResultsSummary/SearchResultsSummary';

const Search = () => {
  return (
    <div>
      <NavBar />
      <SearchResultsSummary />
    </div>
  )
}

export default Search
