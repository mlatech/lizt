import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from "./images/IMG_8098.jpg";
import "./navbar.css";

export default function Navbar(props) {
  const facebookPageURL = "https://www.facebook.com/TomPeppersGeneralStore/"; // Replace this with your Facebook page URL

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-image" />
        <h3 className="h3">Tom Peppers General Store</h3>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        {/* <Link to="/plants" className="nav-link">Pre Order</Link> */}
        <Link to="/info" className="nav-link">Contact</Link>
      </div>
      <div className="nav-icons">
        {/* Facebook Icon Link */}
        <a href={facebookPageURL} className="nav-icon-link">
          <i className="fab fa-facebook-square"></i>
        </a>
      </div>
    </div>
  );
}

