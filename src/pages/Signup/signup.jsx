import React from "react";
import "./signup.css";
import rot1 from "../../images/rot1.jpg";
import rot2 from "../../images/img1.jpg";
import Header from "../../components/header";
import { useState } from "react";
import { Link } from "react-router-dom";

// storing input values
const Signup = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  // Handling the submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`First-Name: ${inputs.firstname}
     Last-Name: ${inputs.lastname}
      Email-Address: ${inputs.email}`);
  };

  return (
    // Header Image Section
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

        {/* Form Section */}
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
                required
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
                required
              />

              <label>Email</label>
              <br />
              <input
                name="email"
                onChange={handleChange}
                value={inputs.email || ""}
                id="email"
                type="email"
                required
              />

              <label>Password</label>
              <br />
              <input
                name="password"
                onChange={handleChange}
                value={inputs.password || ""}
                id="password"
                type="password"
                required
              />

              {/* Button section handling the onClick function */}
              <button onClick={handleSubmit} type="submit" className="btn">
                Sign-Up
              </button>
              {/* Linking signup to login page */}
              <Link to="/login">Already registered? Login</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
