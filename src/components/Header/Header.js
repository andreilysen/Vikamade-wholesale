// import React from "react";
// import Navigation from "../Navigation";
import "./Header.scss";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="heder">
        <div>
          <a href="">
            <img src={logo} alt="logo" width="100" />
          </a>
        </div>
        <ul>
          <li>
            <a href="tel:+380686699051">+380686699051</a>
          </li>
          <li>
            <a href="mailto:vikamade74@gmail.com">vikamade74@gmail.com</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
