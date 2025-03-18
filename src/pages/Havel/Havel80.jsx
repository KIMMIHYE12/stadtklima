import React from "react";
import styles from "../Pages.module.scss";
import NavHavel from "../../components/Sanssouci/NavHavel";

const Havel80 = () => {
  return (
    <div>
      <div className={styles.changeImage}>
        <img
          src='../images/h_2080.png'
          alt='The Havel River in 2080, dramatically expanded by severe flooding, with entire districts submerged and replaced by vibrant water-based communities. Elevated platforms, interconnected floating neighborhoods, and bustling waterborne traffic create a dynamic cityscape, while massive flood walls and vegetation buffers guard remaining dry areas against relentless water encroachment under a stark, bright sky.'
        />
      </div>
      <NavHavel />
    </div>
  );
};

export default Havel80;
