import React from "react";
import Model3Banner from "../model3Banner/Model3Banner";
import Model3One from "../model3One/Model3One";
import Model3Two from "../model3Two/Model3Two";
import Model3Three from "../model3Three/Model3Three";
import Model3Four from "../model3Four/Model3Four";
import Model3Five from "../model3Five/Model3Five";
import Model3Six from "../model3Six/Model3Six";
import ModelSEleven from "../../modelS/modelSEleven/ModelSEleven";
import Model3Seven from "../model3Seven/Model3Seven";
import ModelSThirteenth from "../../modelS/modelSThirteenth/ModelSThirteenth";
import ModelSFourteen from "../../modelS/modelSFourteen/ModelSFourteen";

const Model3Wrapper = () => {
  const handleContent = () => {
    return (
      <div>
        With a drag coefficient of just .208 Cd, the lowest on the planet, Model
        S is built for speed, endurance and range. Improved aerodynamics and a
        wider chassis offer more responsive performance so you can take corners
        quicker and with more confidence.
      </div>
    );
  };
  return (
    <div className="model3_wrapper">
      <div className="model3_banner">
        <Model3Banner />
      </div>
      <div className="model3_One">
        <Model3One headingText="Built for Safety" />
      </div>
      <div className="model3_Two">
        <Model3Two />
      </div>
      <div className="model3_Three">
        <Model3Three />
      </div>
      <div className="model3_Four">
        <Model3Four />
      </div>
      <div className="model3_Five">
        <Model3Five
          Content={handleContent}
          text="All-Wheel Drive"
          heading="Dual Motor"
        />
      </div>
      <div className="model3_Six">
        <Model3Six />
      </div>
      <div className="model3_Seven">
        <ModelSEleven />
      </div>
      <div className="model3_Eight">
        <Model3Seven />
      </div>
      <div className="model3_nine">
        <Model3Three />
      </div>
      <div className="model3_ten">
        <ModelSThirteenth
          modelText="Model 3"
          imgThree="https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD.svg"
        />
      </div>
      <div className="model3_Eleven">
        <ModelSFourteen
          textModel="Model 3"
          img="https://tesla-cdn.thron.com/delivery/public/image/tesla/1275ab15-9ad9-473c-a329-8e3eb6ebd5de/bvlatuR/std/2266x734/Model-3-Order-Hero-Desktop-Mobile-Global?quality=auto-medium&amp;format=auto.svg"
        />
      </div>
    </div>
  );
};

export default Model3Wrapper;
