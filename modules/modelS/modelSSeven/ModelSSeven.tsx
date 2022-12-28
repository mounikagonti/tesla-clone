import React from "react";
import ModelSFive from "../modelSFive/ModelSFive";

const ModelSSeven = () => {
  const withOutLink = () => {
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
    <div className="modelS_seven_wrapper">
      <div className="modelS_seven_img_wrapper"></div>
      <div className="modelS_seven_bottom_wrapper">
        <ModelSFive
          Content={withOutLink}
          text="Exterior"
          heading="Designed for Efficiency"
          btnOne={true}
          btnTwo={true}
        />
      </div>
    </div>
  );
};

export default ModelSSeven;
