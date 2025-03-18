import React from "react";
import styles from "./Pages.module.scss";
import Navigation from "../../components/Sanssouci/Navigation";

const Sanssouci = () => {
  return (
    <div>
      <div className={styles.three_img}>
        <div className='sketchfab-embed-wrapper'>
          <iframe
            className={styles.render}
            title='Park 3D Model'
            frameborder='0'
            allowfullscreen
            mozallowfullscreen='true'
            webkitallowfullscreen='true'
            allow='autoplay; fullscreen; xr-spatial-tracking'
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            src='https://sketchfab.com/models/179b80fe07c34ce2b4cb0c40b6c46cca/embed'
          ></iframe>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Sanssouci;
