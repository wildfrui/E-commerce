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
      <h2 className="header__title">smile</h2>

      <div className="header__options">
        <Link className="header__link" to="/">
          home
        </Link>
        <Link className="header__link" to="/about">
          about us
        </Link>
        <Link className="header__link" to="/shop">
          shop
        </Link>
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  );
};

export default Header;
