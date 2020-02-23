import React from "react";
import logoHorizontal from "./svgs/logo-horizontal.svg";
import userIcon from "./svgs/user-icon.svg";
import data from "./data/restaurants.json";
import TopBar from "./components/top-bar";
import LocationBar from "./components/location-bar";
import RestaurantList from "./components/restaurant-list";

function App() {
  return (
    <div>
      <TopBar />
      <LocationBar neighborhood={data.neighborhood} />
      <RestaurantList
        totalRestaurants={data.restaurants.length}
        restaurants={data.restaurants.slice(0, 9)}
      />
    </div>
  );
}

export default App;
