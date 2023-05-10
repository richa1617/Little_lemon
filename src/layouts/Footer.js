import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Contact Us</h3>
        <ul>
          <li>Address: 1O1 Food Street</li>
          <li>Email: food@littlelemon.com</li>
          <li>Phone: 031 645 1703</li>
        </ul>
      </nav>
      <nav>
        <h3>Opening times</h3>
        <ul>
          <li>Monday - Friday: 9:00 - 21:00</li>
          <li>Saturday - Sunday: 10:00 - 23:00</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
