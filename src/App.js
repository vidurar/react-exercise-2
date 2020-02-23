import React from "react";
import logoHorizontal from "./svgs/logo-horizontal.svg";
import userIcon from "./svgs/user-icon.svg";
import data from "./data/restaurants.json";
import styles from "./App.module.css";

function App() {
  const page1Results = data.restaurants.slice(0, 9);
  return (
    <div className={styles.container}>
      <div className={styles["top-bar"]}>
        <img src={logoHorizontal} alt="logo" />
        <div className={styles.user}>
          <img src={userIcon} alt="user" className={styles["user-icon"]} />
          <span className={styles["user-name"]}>Jane Smith</span>
        </div>
      </div>
      <div className={styles["location-container"]}>
        <div>
          <span className={styles["location-label"]}>Location</span>
          <div className={styles.location}>{data.neighborhood}</div>
        </div>
        <button className={styles["change-location-button"]}>
          Change location
        </button>
      </div>
      <div>
        <div className={styles["restaurant-number"]}>
          {data.restaurants.length} restaurants
        </div>
        <div className={styles["restaurant-list"]}>
          {page1Results.map(restaurant => (
            <div className={styles.restaurant}>
              <div>
                <img src={restaurant.image} alt="user" />
              </div>
              {restaurant.name}
              <div className={styles["retaurant-details"]}>
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
    </div>
  );
}

export default App;
