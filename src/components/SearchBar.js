import React from "react";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="search__bar">
      <label className="search__label">Search for product</label>
      <input className="search__input" type="text" />
    </div>
  );
};

export default SearchBar;
