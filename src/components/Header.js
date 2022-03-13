//external deps
import React from "react";
import { Link } from "react-router-dom";
//internal deps

//css deps
import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <Link className="header__link" to="/">
        Home
      </Link>
      <Link className="header__link" to="/shop">
        Shop
      </Link>
    </div>
  );
};

export default Header;
