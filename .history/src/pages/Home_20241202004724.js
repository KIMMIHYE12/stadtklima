import React from "react";
import styles from "./Pages.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <img src='./images/map.png' alt='map of Potsdam' />
      <span className={styles.landmark01}>
        <img src='./images/landmark01.png' alt='Sanssouci' />
      </span>
      <span className={styles.landmark02}>
        <img src='./images/landmark02.png' alt='Sanssouci' />
      </span>
    </div>
  );
};

export default Home;
