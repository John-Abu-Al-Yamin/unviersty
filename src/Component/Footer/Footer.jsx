import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="card-top">
          <h1>Get Started With Assuit Unviersity</h1>
          <p>Subscribe and get the latest University news and activities</p>
          <button className="btn-footer">Get Started</button>
        </div>

        <div className="footer-link">
          <div className="footer-left">
            <h2>Assuit Unvierstiy</h2>
            <p className="secon-text">
              Our vision is to all people happu <br /> The best level of
              education.
            </p>
          </div>
          <div className="footer-right">
            <h1 className="primary-text">Information</h1>
            <p className="secon-text">
              145 Assuit,FL 5467
              <br />
              Asu
            </p>
          </div>
        </div>
        <ul>
          <li>Proprtty</li>
          <li>Services</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
