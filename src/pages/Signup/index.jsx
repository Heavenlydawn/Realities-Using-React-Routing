import React from "react";
import "./index.css";
import rot1 from "./images/rot1.jpg";
import rot2 from "./images/img1.jpg";
import Login from "../Login";
import Header from "../../components/header";
import { useState } from "react";

const Index = () => {

  
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({...values, [name]: value }));
    console.log(inputs)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert('name:' + inputs.firstname);
    alert(`First-Name: ${inputs.firstname}
     Last-Name: ${inputs.lastname}
      Email-Address: ${inputs.email}`)
  };

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
              <input
              name="firstname"
                onChange={handleChange}
                value={inputs.firstname || ""}
                id="fName"
                type="text"
              />
              <br />

              <label>Last Name</label>
              <br />
              <input
              name="lastname"
                onChange={handleChange}
                value={inputs.lastname || ""}
                id="lName"
                type="text"
              />

              <label>Email</label>
              <br />
              <input
              name="email"
                onChange={handleChange}
                value={inputs.email || ""}
                id="email"
                type="email"
              />

              <label>Password</label>
              <br />
              <input
              name="password"
                onChange={handleChange}
                value={inputs.password || ""}
                id="password"
                type="password"
              />

              <button onClick={handleSubmit} type="submit" className="btn">
                Sign-Up
              </button>

              <a {...Login()}>
                <button className="btn-sign">Already registered? Login</button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
