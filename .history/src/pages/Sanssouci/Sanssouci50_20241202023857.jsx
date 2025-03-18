import React from "react";
import styles from "../Pages.module.scss";
import Navigation from "../../components/Sanssouci/Navigation";

const Sanssouci50 = () => {
  return (
    <div>
      <div className='styles.changeImage'>
        <img
          src='../images/2050.png'
          alt='A changing forest landscape in Potsdam, year 2050. Beech and oak trees (Quercus robur) form smaller, fragmented clusters, their leaves sparse and dull. The spruce trees are nearly gone, their skeletal remains barely visible. Dominating the scene are mature walnut and ginkgo trees, their green foliage lush and vibrant, thriving in the warming climate. The forest floor is drier, covered with hardy shrubs and fewer wildflowers. The atmosphere reflects a slightly arid climate, with bright sunlight casting long shadows. The sky is clearer but warm, emphasizing a shift in seasonal patterns.'
        />
      </div>
      <Navigation></Navigation>
    </div>
  );
};

export default Sanssouci50;
