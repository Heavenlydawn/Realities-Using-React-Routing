import { React, useState, useEffect } from "react";
import "./login.css";
import dog1 from "../../rottweiler1.jpg";
import dog2 from "../../rottweiler2.jpg";
import SignUp from "../Signup/signup";
import Header from "../../components/header";
import Quotes from "../../quotes.json";

const Index = () => {
  const [quote, setQuote] = useState(Quotes);
  const [randomQuote, setRandom] = useState({});

  useEffect(() => {
    setInterval(() => {
      let randomIndex = Math.floor(Math.random() * quote.length);
      let item = quote[randomIndex];
      setRandom(item);
    }, 2000);
  }, [quote, randomQuote]);
  return (
    <div>
      <Header />
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
              <div className="quote">
                <p> {randomQuote.quote} </p>
                <p>{randomQuote.author}</p>
              </div>
              <label>Email:</label>
              <br />
              <input id="email" type="text" required />
              <br />
              <label>Password:</label>
              <br />
              <input id="password" type="password" required />

              <button className="btn">Login</button>

              <p className="btn-log">
                {SignUp}
                No account? Sign-Up
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
