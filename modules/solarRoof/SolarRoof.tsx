import React from "react";
import SolarRoofBanner from "./solarRoofBanner/SolarRoofBanner";
import Model3Five from "../model3/model3Five/Model3Five";
import ModelSTen from "../modelS/modelSTen/ModelSTen";
import ModelSNine from "../modelS/modelSNine/ModelSNine";
import ModelSFourteen from "../modelS/modelSFourteen/ModelSFourteen";
import ModelSThirteenth from "../modelS/modelSThirteenth/ModelSThirteenth";
import SolarRoofFooter from "./solarRoofFooter/SolarRoofFooter";

const SolarRoof = () => {
  const handleContent = () => {
    return (
      <div>
        Install Solar Roof and power your home with a fully integrated solar and
        energy storage system. The glass solar tiles and steel roofing tiles
        look great up close and from the street, complementing your home’s
        natural styling. Schedule a virtual consultation with an Energy Advisor
        to learn more.{" "}
      </div>
    );
  };
  return (
    <div className="solar_roof_wrapper">
      <div className="solar_roof_banner">
        <SolarRoofBanner />
      </div>
      <div className="solar_roof_One"></div>
      <div className="solar_roof_Two">
        <Model3Five
          Content={handleContent}
          text="Design"
          heading="Complement Your Home’s Aesthetic"
        />
      </div>
      <div className="solar_roof_Three">
        <ModelSTen
          imgTwo="https://tesla-cdn.thron.com/delivery/public/image/tesla/039f3e04-61da-4144-a6fd-2af9787eebf1/bvlatuR/std/2880x1800/Solar-Roof-Energy-Desktop-Global?quality=auto-medium&format=auto.svg"
          name="Energy Storage"
          heading="Protection Against Outages"
        />
      </div>
      <div className="solar_roof_Four">
        <ModelSNine vid="https://www.tesla.com/sites/default/files/solarroof/v3/durability/SR-Durability-Desktop.mp4" />
      </div>
      <div className="solar_roof_Five">
        <Model3Five
          Content={handleContent}
          text="Installation"
          heading="Trusted Expertise"
        />
      </div>
      <div className="solar_roof_Six">
        <ModelSTen
          imgTwo="https://tesla-cdn.thron.com/delivery/public/image/tesla/1cb832af-ffc3-4cbc-93cb-6a1bf11d5398/bvlatuR/std/2880x1800/Solar-Roof-Value-Desktop-Global?quality=auto-medium&format=auto.svg"
          name="Energy Storage"
          heading="Protection Against Outages"
        />
      </div>
      <div className="solar_roof_Seven"></div>
      <div className="solar_roof_Eight">
        <Model3Five
          Content={handleContent}
          text="Control"
          heading="Monitor and Optimize"
        />
      </div>
      <div className="solar_roof_Nine">
        <ModelSThirteenth
          modelText="Solar Roof"
          imgThree="https://www.designboom.com/wp-content/uploads/2019/10/tesla-solarglass-solar-roof-tiles-hydrographically-printed-designboom-1.jpg"
        />
      </div>
      <div className="solar_roof_Ten">
        <SolarRoofFooter
          mainText="Transform Your Roof"
          normalText="Order now or chat with an Energy Advisor for more information"
          linkText="Get Updates"
        />
      </div>
    </div>
  );
};

export default SolarRoof;
