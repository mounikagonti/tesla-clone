import React from "react";
import ModelXBanner from "./modelXBanner/ModelXBanner";
import Features from "../modelS/features/Features";
import ModelXOne from "./modelXOne/ModelXOne";
import ModelXTwo from "./modelXTwo/ModelXTwo";
import PowerTrain from "../modelS/powerTrain/PowerTrain";
import Model3Five from "../model3/model3Five/Model3Five";
import ModelSThirteenth from "../modelS/modelSThirteenth/ModelSThirteenth";
import ModelSFourteen from "../modelS/modelSFourteen/ModelSFourteen";

const ModelX = () => {
  const handleContent = () => {
    return (
      <div>
        Model X has a drag coefficient of just .24 Cd, the lowest of any
        production SUV on the planet. Refined aerodynamic elements work together
        with new wheels and tires to help you travel farther, with sharper
        handling and better ride comfort.
      </div>
    );
  };

  return (
    <div className="modelX_wrapper">
      <div className="modelX_banner">
        <ModelXBanner />
      </div>
      <div className="modelX_One">
        <div className="interior">Interior of the Future</div>
      </div>
      <div className="modelX_Two">
        <Features
          featureOneImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/fe0bb67d-b4cc-4050-999d-ae088b3d6c01/bvlatuR/std/4096x2300/MX-Interior-Grid-B-Desktop-LHD.svg"
          featureTwoImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/b2e30e61-96ae-4e0a-813d-fa39f35c5797/bvlatuR/std/1040x584/MX-Interior-Grid-C-Desktop.svg"
          featureThreeImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop.svg"
          featureOneText="Stay Connected"
          featureOneHeadText="Instantly connect with multi-device Bluetooth, or fast charge
          devices with wireless and 36-watt USB-C charging."
          featureTwoText="Immersive Sound"
          featureTwoHeadText="A 22-speaker, 960-watt audio system with Active Road Noise Reduction
          offers immersive listening and studio-grade sound quality."
          featureThreeText="Room for Everything"
          featureThreeHeadText="With front and rear trunks and fold-flat seats you can fit your bike
          without taking the wheel off—and your luggage too."
        />
      </div>
      <div className="modelX_Three">
        <ModelXOne />
      </div>
      <div className="modelX_Four">
        <ModelXTwo />
      </div>
      <div className="modelX_Five">
        <PowerTrain />
      </div>
      <div className="modelX_Six"></div>
      <div className="modelX_Seven">
        <Model3Five
          Content={handleContent}
          text="Exterior"
          heading="Designed for Efficiency"
        />
      </div>
      <div className="modelX_Eight">
        <Features
          featureOneImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/80ca0ff7-30a7-4758-8ecb-235f4f63a0b9/bvlatuR/std/2880x1620/Model-X-Exterior-Grid-A-Desktop-Global?quality=auto-medium&amp;format=auto.svg"
          featureTwoImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/d4fb7781-ec21-4823-b489-bde0a25e102b/bvlatuR/std/3949x2218/Model-X-Exterior-Grid-B-Desktop-Global.svg"
          featureThreeImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/99237086-33fb-438b-9381-f8f5e0f32444/bvlatuR/std/2880x1620/Model-X-Exterior-Grid-C-Desktop-Global?quality=auto-medium&amp;format=auto.svg"
          featureOneText="Relentless Performance"
          featureOneHeadText="Performance wheels and tires keep the SUV planted, transferring even more power down to the road."
          featureTwoText="Optimized Aerodynamics"
          featureTwoHeadText="Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth."
          featureThreeText="Refined Styling"
          featureThreeHeadText="Exterior design combines an iconic look with elegant details."
        />
      </div>
      <div className="modelX_Nine">
        <ModelSThirteenth
          modelText="Model X"
          imgThree="https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD.svg"
        />
      </div>
      <div className="modelX_Ten">
        <ModelSFourteen
          textModel="Model X"
          img="https://tesla-cdn.thron.com/delivery/public/image/tesla/c0fa4ff3-0c69-4915-bbe3-60a85cb0fc68/bvlatuR/std/3840x2160/Model-X-Order-Hero-Desktop-Mobile-Global.svg"
        />
      </div>
    </div>
  );
};

export default ModelX;
