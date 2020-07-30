import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import FAQPage from "./pages/FAQPage/FAQPage";

import "./App.css";

class App extends Component {
  state = {
    categories: [],
    searchField: "",
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/faq" component={FAQPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
