import React from "react";
import styles from "./location-bar.module.css";
import PropTypes from "prop-types";

const LocationBar = ({ neighborhood }) => (
  <div className={styles["location-container"]}>
    <div>
      <span className={styles["location-label"]}>Location</span>
      <div className={styles.location}>{neighborhood}</div>
    </div>
    <button className={styles["change-location-button"]}>
      Change location
    </button>
  </div>
);

LocationBar.displayName = "LocationBar";
LocationBar.propTypes = {
  neighborhood: PropTypes.string.isRequired
};

export default LocationBar;
