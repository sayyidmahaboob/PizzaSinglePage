import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Crust & Co is a pizza company dedicated to crafting delicious pizzas
          with high-quality ingredients. We are passionate about creating unique
          and mouth-watering pizzas that satisfy every taste bud. We pride
          ourselves on providing exceptional customer service and a warm,
          welcoming atmosphere. Come and enjoy our freshly baked pizzas made
          with love and care.
          <p>
            Thank you for choosing Crust & Co. We hope you enjoy our pizza as
            much as we do!
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;
