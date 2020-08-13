import React from "react";

import "./HomePage.styles.css";

const HomePage = (props) => (
  <div className="main-content_wrapper">
    <section className="main-content">
      <h1>Welcome to API BOSS</h1>
      <input
        className="search"
        placeholder="search here for api's..."
        handleSearch={props.onChange}
      />
    </section>
  </div>
);

export default HomePage;
