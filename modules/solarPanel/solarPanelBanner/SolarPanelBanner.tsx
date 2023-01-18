import React from "react";
import { GiSolarPower } from "react-icons/gi";

const SolarPanelBanner = () => {
  return (
    <div className="solar_panel_banner">
      <div className="modelS_top">
        <div className="modelS_text">Solar Panels</div>
        <p className="modelS_small_text">
          Lowest Cost Solar Panels in America—Money-back guarantee
        </p>
      </div>
      <div className="modelS_banner_bottom">
        <div className="modelS_speed_wrapper">
          <div className="modelS_speed">
            <div className="modelS_range_number">
              <GiSolarPower />
            </div>
            <div className="modelS_range_text">Convert Sunlight to Energy</div>
          </div>
          <div className="modelS_speed">
            <div className="modelS_range_number">$</div>
            <div className="modelS_range_text">
              Guaranteed Lowest Price for Solar
            </div>
          </div>
          <div className="modelS_speed">
            <div className="modelS_range_number">24/7</div>
            <div className="modelS_range_text">Energy Monitoring</div>
          </div>
        </div>
        <div className="modelS_btn">Order Now</div>
      </div>
    </div>
  );
};

export default SolarPanelBanner;
