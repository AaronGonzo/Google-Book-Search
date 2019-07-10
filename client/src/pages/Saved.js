import React from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card/Card";

function Saved() {
  return (
    <div>
      <Jumbotron>
        <h1>These Are Your Saved Books</h1>
      </Jumbotron>
      <div className="container">
        <h3>Saved Books</h3>
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Saved;
