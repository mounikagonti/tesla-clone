import React from "react";
import { GiSolarPower } from "react-icons/gi";

const SolarRoofBanner = () => {
  return (
    <div className="solarRoof_banner_wrapper">
      <div className="modelS_top">
        <div className="modelS_text">Solar for Existing Roof</div>
        <p className="modelS_small_text">
          Transform your roof and produce clean energy
        </p>
      </div>
      <div className="modelS_banner_bottom">
        <div className="modelS_speed_wrapper">
          <div className="modelS_speed">
            <div className="modelS_range_number">
              <GiSolarPower />
            </div>
            <div className="modelS_range_text">Beautiful Solar</div>
          </div>
          <div className="modelS_speed">
            <div className="modelS_range_number">25 -Year</div>
            <div className="modelS_range_text">Tile Warranty</div>
          </div>
          <div className="modelS_speed">
            <div className="modelS_range_number">24/7</div>
            <div className="modelS_range_text">Outage Protection</div>
          </div>
        </div>
        <div className="modelS_btn">Order Now</div>
      </div>
    </div>
  );
};

export default SolarRoofBanner;
