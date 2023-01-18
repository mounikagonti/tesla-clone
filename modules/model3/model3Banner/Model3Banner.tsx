import React from "react";
import Header from "../../header/Header";

const Model3Banner = () => {
  return (
    <div className="model3_banner_wrapper">
      <div className="model3_top">
        <div className="model3_text">Model 3</div>
        <a href="#" className="model3_small_text">
          Schedule a demo drive
        </a>
      </div>
      <div className="model3_banner_bottom">
        <div className="model3_speed_wrapper">
          <div className="model3_speed">
            <div className="model3_range_number">3.1 s</div>
            <div className="model3_range_text">0-60 mph*</div>
          </div>
          <div className="model3_speed">
            <div className="model3_range_number">358 mi</div>
            <div className="model3_range_text">Range (EPA est.)</div>
          </div>
          <div className="model3_speed">
            <div className="model3_range_number">AWD</div>
            <div className="model3_range_text">Dual Motor</div>
          </div>
        </div>
        <div className="model3_btn">Order Now</div>
      </div>
    </div>
  );
};

export default Model3Banner;
