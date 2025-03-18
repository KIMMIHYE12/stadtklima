import React from "react";
import styles from "../Pages.module.scss";
import Navigation from "../../components/Sanssouci/Navigation";

const Sanssouci80 = () => {
  return (
    <div>
      <div className={styles.changeImage}>
        <img
          src='../images/2080.png'
          alt='A transformed forest in Potsdam in the year 2080. The landscape features drought-resistant ginkgo trees and walnut trees as dominant species, their leaves thick and adapted to arid conditions. Pine trees (Pinus sylvestris) and firethorn bushes (Pyracantha) thrive in the drier, sandy soil. The forest floor is barren in some areas, with patches of hardy grasses and succulents. Dead and fallen beech and oak trees lie scattered, remnants of a bygone era. The sky is bright with harsh sunlight, creating an almost savanna-like atmosphere, while the distant horizon shows a stark contrast of greenery and dry plains.'
        />
      </div>
      <Navigation></Navigation>
    </div>
  );
};

export default Sanssouci80;
