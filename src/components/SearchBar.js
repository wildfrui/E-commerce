import { React, useState } from "react";
import { connect } from "react-redux";
import "./SearchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
    console.log(term);
  };

  return (
    <div className="search__bar">
      <label className="search__label">Search for product</label>
      <input onChange={handleChange} className="search__input" type="text" />
    </div>
  );
};

export default SearchBar;
