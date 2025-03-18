import React from "react";
import styles from "./Pages.module.scss";

const Sanssouci = () => {
  return (
    <div>
      <div className={styles.three_img}>
        <div className='sketchfab-embed-wrapper'>
          <iframe
            className={styles.render}
            frameborder='0'
            allow='autoplay; fullscreen; xr-spatial-tracking'
            src='https://sketchfab.com/models/179b80fe07c34ce2b4cb0c40b6c46cca/embed'
          ></iframe>
        </div>
      </div>
      <nav>
        <button>2024</button>
        <button>2030</button>
        <button>2050</button>
        <button>2080</button>
      </nav>
    </div>
  );
};

export default Sanssouci;
