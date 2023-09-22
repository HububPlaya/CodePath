import React from "react";
import Card from "./components/Card.jsx"; // Corrected import path
import "./App.css";

function App() {
  return (
    <div className="background_container">
      <div className="main_container">
        <img src="src/assets/awning.png" alt="Awning" />
        <h1>Food Truck Favorites</h1>
      </div>
      <div className="card_container">
        <Card />
      </div>
    </div>
  );
}

export default App;
