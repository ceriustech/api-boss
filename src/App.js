import React, { useState, useEffect, useCallback, useMemo } from "react";

import { Switch, Route } from "react-router-dom";
import axios from "axios";

import CardList from "./components/Card-List/card-list";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import FAQPage from "./pages/FAQPage/FAQPage";

import "./reset.css";
import "./App.css";

const App = () => {
  const [apiCategories, setApiCategories] = useState([]);

  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.publicapis.org/categories`)
      .then((response) => response.data)
      .then((categories) => setApiCategories(categories.categories));
  }, []);

  const filteredApiCategories = useMemo(() => {
    apiCategories.filter((apiCategories) =>
      apiCategories.toLowerCase().includes(searchField.toLowerCase())
    );
  }, [apiCategories, searchField]);

  const onChange = useCallback((e) => {
    setSearchField(e.target.value);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <CardList apiCategories={filteredApiCategories} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <HomePage onChange={onChange} />}
        />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FAQPage} />
      </Switch>
    </div>
  );
};

export default App;
