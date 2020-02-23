import React from "react";
import logoHorizontal from "./svgs/logo-horizontal.svg";
import userIcon from "./svgs/user-icon.svg";
import data from "./data/restaurants.json";
import "./App.css";

function App() {
  const page1Results = data.restaurants.slice(0, 9);
  return (
    <div>
      <div>
        <img src={logoHorizontal} alt="logo" />
        <img src={userIcon} alt="user" />
        Jane Smith
      </div>
      <div>
        Location: {data.neighborhood} <button>Change location</button>
      </div>
      <div>
        {data.restaurants.length} restaurants
        {page1Results.map(restaurant => (
          <div>
            <div>
              <img src={restaurant.image} alt="user" />
            </div>
            {restaurant.name}
            <div>
              {restaurant.tags
                .concat(
                  Array(restaurant.price)
                    .fill("£")
                    .join("")
                )
                .join(" · ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
