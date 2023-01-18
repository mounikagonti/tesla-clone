import React from "react";
import SolarPanelBanner from "./solarPanelBanner/SolarPanelBanner";
import ModelSTen from "../modelS/modelSTen/ModelSTen";
import Model3Five from "../model3/model3Five/Model3Five";
import ModelSFourteen from "../modelS/modelSFourteen/ModelSFourteen";
import ModelSThirteenth from "../modelS/modelSThirteenth/ModelSThirteenth";
import SolarRoofFooter from "../solarRoof/solarRoofFooter/SolarRoofFooter";

const SolarPanel = () => {
  const handleContent = () => {
    return (
      <div>
        Your Powerwall can be bundled with solar, allowing you to generate clean
        energy and store it for use anytime—at night or during an outage.
      </div>
    );
  };
  return (
    <div className="solar_panel_wrapper">
      <div className="solarPanel_banner">
        <SolarPanelBanner />
      </div>
      <div className="solarPanel_One">
        <ModelSTen
          imgTwo="https://tesla-cdn.thron.com/delivery/public/image/tesla/60a584f9-7ae3-4cd5-9fa8-6251715df25b/bvlatuR/std/2880x1800/Solar-Roof-Design-Desktop-Global?quality=auto-medium&format=auto.svg"
          name="Savings"
          heading="Electricity For Less"
        />
      </div>
      <div className="solarPanel_Two">
        <ModelSTen
          imgTwo="https://tesla-cdn.thron.com/delivery/public/image/tesla/4ebaa03a-92ce-4d40-b878-eaf6c848aafd/bvlatuR/std/2880x1800/_25-solar-panels-support.svg"
          name="Design"
          heading="Sleek and Durable"
        />
      </div>
      <div className="solarPanel_Three"></div>
      <div className="solarPanel_Four">
        <Model3Five
          Content={handleContent}
          text="Powerwall"
          heading="Home Battery Backup"
        />
      </div>
      <div className="solarPanel_Five">
        <video autoPlay loop muted className="video">
          <source
            src="https://www.tesla.com/sites/default/files/solarpanels/power-on/solar-assessment-desktop.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="solarPanel_Six">
        <Model3Five
          Content={handleContent}
          text="Power On"
          heading="Order and Installation"
        />
      </div>
      <div className="solarPanel_Seven"></div>
      <div className="solarPanel_Eight">
        <Model3Five
          Content={handleContent}
          text="Experience"
          heading="24/7 Monitoring"
        />
      </div>
      <div className="solarPanel_Nine">
        <ModelSThirteenth
          modelText="Solar Panel"
          imgThree="https://tesla-cdn.thron.com/delivery/public/image/tesla/2e1f9207-01b8-4455-a9c8-b4ca95b7afb4/bvlatuR/std/2880x1800/_25-Specs-D.svg"
        />
      </div>
      <div className="solarPanel_Ten">
        <SolarRoofFooter
          mainText="Power Your Home"
          normalText="Order now or talk to a Tesla Advisor if you have any questions"
          linkText="Get Energy Updates"
        />
      </div>
    </div>
  );
};

export default SolarPanel;
