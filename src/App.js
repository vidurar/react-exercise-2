import React from "react";
import { useStore } from "react-redux";
import TopBar from "./components/top-bar";
import LocationBar from "./components/location-bar";
import RestaurantList from "./components/restaurant-list";

function App() {
  const { user, neighborhood, restaurants } = useStore().getState();

  return (
    <div>
      <TopBar user={user} />
      <LocationBar neighborhood={neighborhood} />
      <RestaurantList
        totalRestaurants={restaurants.length}
        restaurants={restaurants.slice(0, 9)}
      />
    </div>
  );
}

export default App;
