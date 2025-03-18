import React from "react";
import styles from "../Pages.module.scss";
import NavHavel from "../../components/Sanssouci/NavHavel";

const Havel30 = () => {
  return (
    <div>
      <div className={styles.changeImage}>
        <img
          src='./images/h_2030.png'
          alt='The Havel River in 2030, with slightly elevated water levels, causing minor flooding along riverbanks, and nearby streets partially submerged under a cloudy, warming sky.'
        />
      </div>
      <NavHavel />
    </div>
  );
};

export default Havel30;
