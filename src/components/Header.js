import React from "react";
import { Link } from "react-router-dom";
import Food from "../assets/Food.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h2>New york</h2>

        <h3>Severing since 1930</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      
      </div>
      <div className="right-side">
        <img
          src={Food}
          alt="our cook holding a tablet with delicoues baguettes"
        />
      </div>
    </header>
  );
};

export default Header;
