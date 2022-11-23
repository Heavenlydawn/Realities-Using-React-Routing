import React from "react";
import "./index.css";
import rot1 from "./images/rot1.jpg";
import rot2 from "./images/img1.jpg";
import Login from "../Login";
import Header from "../../components/header";

const Index = () => {
  return (
    <div className="sign-up-div">
    <Header />
      <div className="rot-container">
        <div className="rot-section">
          <div className="rotImg">
            <img alt="Dog" src={rot1} />
          </div>
          <div className="rotImg">
            <img id="dog" alt="Dog" src={rot2} />
          </div>
        </div>

        <div className="sign-in-form">
          <div className="sign-in-content">
            <form>
              <label>First Name</label>
              <br />
              <input id="fName" type="text" />
              <br />

              <label>Last Name</label>
              <br />
              <input id="lName" type="text" />

              <label>Email</label>
              <br />
              <input id="email" type="email" />

              <label>Password</label>
              <br />
              <input id="password" type="password" />

              <button className="btn">Sign-Up</button>
              <a href={Login}><button className="btn-sign">Already registered? Login</button></a>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );

  
};

export default Index;
