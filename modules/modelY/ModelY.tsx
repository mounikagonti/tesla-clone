import React from "react";
import ModelYBanner from "./modelYBanner/ModelYBanner";
import Model3One from "../model3/model3One/Model3One";
import ModelSFive from "../modelS/modelSFive/ModelSFive";
import Model3Five from "../model3/model3Five/Model3Five";
import ModelYOne from "./modelYOne/ModelYOne";
import ModelYTwo from "./modelYTwo/ModelYTwo";
import ModelSEleven from "../modelS/modelSEleven/ModelSEleven";
import ModelYThree from "./modelYThree/ModelYThree";
import ModelSThirteenth from "../modelS/modelSThirteenth/ModelSThirteenth";
import ModelSFourteen from "../modelS/modelSFourteen/ModelSFourteen";

const ModelY = () => {
  const handleContent = () => {
    return (
      <div>
        Model Y provides maximum versatility—able to carry 7 passengers and
        their cargo. Each second row seat folds flat independently, creating
        flexible storage for skis, furniture, luggage and more. The liftgate
        opens to a low trunk floor that makes loading and unloading easy and
        quick. Chat with a Tesla Advisor to learn more about Model Y or schedule
        a demo drive today.
      </div>
    );
  };
  return (
    <div className="modelY_wrapper">
      <div className="modelY_banner">
        <ModelYBanner />
      </div>
      <div className="modelY_One">
        <Model3One headingText="Designed for Safety" />
      </div>
      <div className="modelY_Two">
        <Model3Five
          Content={handleContent}
          text="Utility"
          heading="A Place For Everything"
        />
      </div>
      <div className="modelY_Three">
        <ModelYOne />
      </div>
      <div className="modelY_Four">
        <ModelYTwo />
      </div>
      <div className="modelY_Five">
        <Model3Five
          Content={handleContent}
          text="All-Wheel Drive"
          heading="Dual Motor"
        />
      </div>
      <div className="modelY_Six">
        <ModelYThree />
      </div>
      <div className="modelY_Seven">
        <Model3Five
          Content={handleContent}
          text="Autopilot"
          heading="Future of Driving"
        />
      </div>
      <div className="modelX_Eight">
        <ModelSThirteenth
          modelText="Model Y"
          imgThree="https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD.svg"
        />
      </div>
      <div className="modelX_Nine">
        <ModelSFourteen
          textModel="Model Y"
          img="https://tesla-cdn.thron.com/delivery/public/image/tesla/71b23730-ad0d-4993-af25-e2bf033b1919/bvlatuR/std/1934x600/Model-Y-Order-Hero-Desktop-Mobile-Global?quality=auto-medium&amp;format=auto.svg"
        />
      </div>
    </div>
  );
};

export default ModelY;
