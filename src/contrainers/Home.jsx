import React from "react";
import Characters from "../components/Characters";
import "../App.css";

export default function home(favoritos) {
  return (
    <div className="App">
      <Characters favoritos={favoritos} />
    </div>
  );
}
