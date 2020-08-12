import React from "react";

const Card = (props) => {
  return (
    <div className="card-container">
      <h1>{props.categories}</h1>
    </div>
  );
};

export default Card;
