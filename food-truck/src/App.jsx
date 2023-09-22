import React from "react";
import Card from './components/Card'
import "./App.css";

function App() {
  return (
  <div id="root">
    <div className="App">
      <div className="Header">
        <img src="src/assets/awning.png"/>
        <h1>Food Truck Favorites</h1>
      </div>
        <div className="Card">
        <div className="card_info"><Card img="src/assets/baked_bear_truck.jpg" restaurant="Baked Bear Food Truck" food_type="Icecream Sandwhiches" link="https://www.thebakedbear.com/locations/the-colony/"/></div>
        <div className="card_info"><Card img="src/assets/bombay_junkie.jpg" restaurant="Bombay Food Junkie" food_type="Vegan, Indian" link="https://www.bombayfoodjunkies.com/"/></div>
        <div className="card_info"><Card img="src/assets/cinnamon_snail.jpg" restaurant="Cinnamon Snail Food Truck" food_type="Vegan" link="https://cinnamonsnail.com/"/></div>
        <div className="card_info"><Card img="src/assets/cow_curd.jpg" restaurant="Cow & Curd Food Truck" food_type="Chicken, Curds" link="https://www.bestfoodtrucks.com/truck/the-cow-and-the-curd/menu"/></div>
        <div className="card_info"><Card img="src/assets/cowtown_dogs.jpg" restaurant="Cowtown Dogs Food Truck" food_type="Hotdogs" link="https://www.cowtowndogs.com/wp-content/uploads/2022/12/CowtownDogs-Reg-Menu.pdf"/></div>
        <div className="card_info"><Card img="src/assets/grilled_cheese_truck.jpg" restaurant="Grilled Cheeserie" food_type="Grilled Cheese, Diner" link="https://grilledcheeserie.com/"/></div>
        <div className="card_info"><Card img="src/assets/main_lobster.jpg" restaurant="Cousins Main Lobster Food Truck" food_type="Seafood" link="https://www.cousinsmainelobster.com/shop/?location=dallas_tx&type=truck"/></div>
        <div className="card_info"><Card img="src/assets/nong_khao_truck.jpg" restaurant="Nong Khao Man Gai Food Truck" food_type="Asian, Khao Man Gai" link="https://khaomangai.com/"/></div>
        <div className="card_info"><Card img="src/assets/Pupusas_and_tacos.jpg" restaurant="Pupusas & Tacos To Go Food Truck" food_type="Mexican" link="https://www.yelp.com/biz/pupusas-and-tacos-to-go-dallas"/></div>
        <div className="card_info"><Card img="src/assets/palmers.jpg" restaurant="Palmers Food Truck" food_type="Cajun, Soul Food" link="https://www.palmershotchicken.com/menu"/></div>
      </div>
    </div>
  </div>
  );
}

export default App;
