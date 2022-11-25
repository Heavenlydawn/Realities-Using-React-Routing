import React from "react";
import logo from "../logo.PNG";
import {NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <img alt="Logo" src={logo} />

        <nav className="navBar">
          <ul>
            <li className="btn">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="btn">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="btn">
              <NavLink to="/signup">SignUp</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
