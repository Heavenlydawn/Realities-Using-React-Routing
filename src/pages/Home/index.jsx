import React from "react";
import "./index.css";
import doggie from "./images/doggie.png";
import dog from "./images/Dog1.jpg";
import Header from "../../components/header";

const Index = () => {
  return (
    <div>
    <Header />

      <div className="hero-section">
        <div className="heroImg">
          <img alt="Dog" src={doggie} />
        </div>
        <div className="heroImg">
          <img id="dog" alt="Dog" src={dog} />
        </div>
        <div className="motto">
          <h1>IT's ALL ABOUT DOGS</h1>
          <p>
            Realities-Kennel is an Online platform where you get to see and make
            fastidious choices on the Dog you want and have it delivered to you
            in a matter of minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
