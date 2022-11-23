import React from "react";
import "./index.css";
import dog1 from "./images/rottweiler1.jpg";
import dog2 from "./images/rottweiler2.jpg";

const Index = () => {
  return (
    <div className="container">
      <div className="loginContainer">
        <div className="login-section">
          <div className="loginImg">
            <img id="doggie" alt="Dog" src={dog1} />
          </div>
          <div className="loginImg">
            <img id="dog" alt="Dog" src={dog2} />
          </div>
        </div>
      </div>

      <div className="form">
        <div className="form-content">
          <form>
            <label>Email:</label>
            <br />
            <input id="email" type="text" />
            <br />
            <label>Password:</label>
            <br />
            <input id="password" type="password" />

            <button className="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
