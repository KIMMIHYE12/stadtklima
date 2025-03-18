import React from "react";
import styles from "../Pages.module.scss";
import NavHavel from "../../components/Sanssouci/NavHavel";

const Havel50 = () => {
  return (
    <div>
      <div className={styles.changeImage}>
        <img
          src='../images/h_2050.png'
          alt='The Havel River in 2050, with rising water levels flooding riverside streets and parks, as small boats and water taxis become common for urban transport. Elevated pathways and flood barriers line the riverbanks, while modern floating buildings appear, integrating into the city’s adaptive landscape under a partially cloudy, warm sky.'
        />
      </div>
      <NavHavel />
    </div>
  );
};

export default Havel50;
