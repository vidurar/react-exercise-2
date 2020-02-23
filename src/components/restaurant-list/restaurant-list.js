import React from "react";
import styles from "./restaurant-list.module.css";
import PropTypes from "prop-types";

const Restaurantlist = ({ totalRestaurants, restaurants }) => (
  <div>
    <div className={styles["restaurant-number"]}>
      {totalRestaurants} restaurants
    </div>
    <div className={styles["restaurant-list"]}>
      {restaurants.map(restaurant => (
        <div className={styles.restaurant} key={restaurant.name}>
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
);

Restaurantlist.displayName = "Restaurantlist";
Restaurantlist.propTypes = {
  totalRestaurants: PropTypes.number.isRequired,
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default Restaurantlist;
