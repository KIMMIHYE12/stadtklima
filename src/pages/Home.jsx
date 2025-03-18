import React from "react";
import styles from "./Pages.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <img src='./images/map.png' alt='map of Potsdam' />
      <Link to='/sanssouci'>
        <span className={styles.landmark01}>
          <img src='./images/landmark01.png' alt='Sanssouci' />
        </span>
      </Link>
      <Link to='/havel'>
        <span className={styles.landmark02}>
          <img src='./images/landmark02.png' alt='Havel' />
        </span>
      </Link>
    </div>
  );
};

export default Home;
