import React from "react";
import logo from "../logo.PNG";
// import SignUp from "./pages/Signup";
// import Login from "../pages/Login";


function Header() {
  return (
    <div>
      <header className="header">
        <img alt="Logo" src={logo} />

        <nav className="navBar">
          <ul>
            <li className="btn">
              <a href="/home">Home</a>
            </li>
            <li className="btn">
              <a href="/login">Login</a>
             
            </li>
            <li className="btn">
              <a href="/signup">SignUp</a>
            </li>
          </ul>
        </nav>
      </header>

    </div>
  );
}

export default Header;
