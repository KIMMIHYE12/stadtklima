import React from "react";
import styles from "../Pages.module.scss";
import NavHavel from "../../components/Sanssouci/NavHavel";

const Havel = () => {
  return (
    <div>
      <div className={styles.changeImage}>
        <img src='./images/h_2024.png' alt='Havel im Jahr 2024' />
      </div>
      <NavHavel />
    </div>
  );
};

export default Havel;
