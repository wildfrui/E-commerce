//external deps
import React from "react";
import { Link } from "react-router-dom";

//internal deps
import GoogleAuth from "./GoogleAuth";
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
      <GoogleAuth></GoogleAuth>
    </div>
  );
};

export default Header;
