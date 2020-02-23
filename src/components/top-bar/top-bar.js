import React from "react";
import logoHorizontal from "../../svgs/logo-horizontal.svg";
import userIcon from "../../svgs/user-icon.svg";
import styles from "./top-bar.module.css";

const TopBar = ({ user }) => (
  <div className={styles["top-bar"]}>
    <img src={logoHorizontal} alt="logo" />
    <div className={styles.user}>
      <img src={userIcon} alt="user" className={styles["user-icon"]} />
      <span className={styles["user-name"]}>{user}</span>
    </div>
  </div>
);

export default TopBar;
