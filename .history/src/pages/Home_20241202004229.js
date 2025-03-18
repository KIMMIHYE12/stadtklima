import React from "react";
import styles from "./Pages.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <img src='./images/map.png' alt='map of Potsdam' />
      <span>
        <img src='./images/landmark01.png' alt='Sanssouci' />
      </span>
      <span></span>
    </div>
  );
};

export default Home;
