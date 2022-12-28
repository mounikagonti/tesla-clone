import React from "react";
import ModelSBanner from "./modelsBanner/ModelSBanner";
import Features from "./features/Features";
import Image from "next/legacy/image";
import ModelSFive from "./modelSFive/ModelSFive";
import PowerTrain from "./powerTrain/PowerTrain";
import ModelSSeven from "./modelSSeven/ModelSSeven";
import ModelSNine from "./modelSNine/ModelSNine";

const ModelS = () => {
  const sec = () => {
    return (
      <div>
        Model S Plaid has the quickest acceleration of any vehicle in
        production. Updated battery architecture for all Model S trims enables
        back-to-back track runs without performance degradation.
        <a href="#">Chat with a Tesla Advisor</a> to learn more about Model S or
        back-to-back track runs without performance degradation.
        <a href="#">schedule a demo drive</a> today.
      </div>
    );
  };
  return (
    <div className="modelS_wrapper">
      <div className="modelS_One">
        <ModelSBanner />
      </div>
      <div className="modelS_Two">
        <div className="interior">Interior of the Future</div>
        {/* <div className="future_interior_img">
          <Image
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c0c475f7-2856-46e1-87ab-dd67ec8dd43f/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop"
            layout="fill"
            objectFit="contain"
          />
        </div> */}
      </div>
      <div className="modelS_Three">
        <Features
          featureOneImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/180e927c-0542-4428-beb7-1411502fe3bb/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop.svg"
          featureTwoImg="https://teslatap.com/wp-content/uploads/2022/01/Model-S-Plaid-Speakers-1440.jpg"
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
      <div className="modelS_Four">
        <div className="modelS_Four_bottom">
          <div className="modelS_four_speed">
            <div className="modelS_four_range_number">396 mi</div>
            <div className="modelS_four_range_text">Range (EPA est.)</div>
          </div>
          <div className="modelS_four_speed">
            <div className="modelS_four_range_number">1.99 s</div>
            <div className="modelS_four_range_text">0-60 mph*</div>
          </div>
          <div className="modelS_four_speed">
            <div className="modelS_four_range_number">200 mph</div>
            <div className="modelS_four_range_text">Top Speed+</div>
          </div>
        </div>
      </div>
      <div className="modelS_Five">
        <ModelSFive Content={sec} text="Plaid" heading="Beyond Ludicrous" />
      </div>
      <div className="modelS_Six">
        <div className="power_train">
          <PowerTrain />
        </div>
      </div>
      <div className="modelS_Seven">
        <ModelSSeven />
      </div>
      <div className="modelS_eight">
        <Features
          featureOneImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/fe86a447-03fe-43ce-bf53-daff2a81210d/bvlatuR/std/3949x2217/Model-S-Exterior-Grid-A-Desktop-Global.svg"
          featureTwoImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/1020d97e-9a6f-4932-9914-0ce889ecfaa6/bvlatuR/std/3840x2156/Model-S-Exterior-Grid-B-Desktop-Global.svg"
          featureThreeImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/b592fbac-9ccd-4951-94b8-f5c5157dfe5b/bvlatuR/std/3657x2039/Model-S-Exterior-Grid-C-Desktop-Global.svg"
          featureOneText="Relentless Performance"
          featureOneHeadText="IStaggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road."
          featureTwoText="Optimized Aerodynamics"
          featureTwoHeadText="Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth."
          featureThreeText="Refined Styling"
          featureThreeHeadText="An iconic silhouette meets refreshed, elegant proportions."
        />
      </div>
      <div className="modelS_nine">
        <ModelSNine />
      </div>
    </div>
  );
};

export default ModelS;
