import React from "react";
import { Link } from "react-router-dom";
import BgLogo from "../assets/pizza.jpeg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BgLogo})` }}>
      <div className="headerContainer">
        <h1>Crust & Co.</h1>
        <p>Where Every Slice is a Work of Art!</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
