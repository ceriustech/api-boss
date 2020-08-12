import React from "react";

import Card from "../Card/card";
import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.apiCategories.map((categories) => {
        return <Card categories={categories} />;
      })}
    </div>
  );
};

export default CardList;
