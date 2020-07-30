import React from "react";

import { Link } from "react-router-dom";
import "./Navigation.styles.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div>
        <h1>API BOSS</h1>
      </div>
      <div class="sidebar">
        <Link className="home nav-item" to="/">
          Home
        </Link>
        <div className="categories link-item">Categories</div>
        <Link className="about nav-item" to="/about">
          About
        </Link>
        <Link className="faq nav-item" to="/faq">
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
