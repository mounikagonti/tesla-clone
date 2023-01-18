import React from "react";

const ModelYBanner = () => {
  return (
    <div className="modelY_banner_wrapper">
      <div className="modelY_top">
        <div className="modelY_text">Model Y</div>
        <a href="#" className="modelY_small_text">
          Schedule a demo drive
        </a>
      </div>
      <div className="modelY_banner_bottom">
        <div className="modelY_speed_wrapper">
          <div className="modelY_speed">
            <div className="modelY_range_number">76 cu ft</div>
            <div className="modelY_range_text">Cargo Space</div>
          </div>
          <div className="modelY_speed">
            <div className="modelY_range_number">330 mi</div>
            <div className="modelY_range_text">Range (EPA est.)</div>
          </div>
          <div className="modelY_speed">
            <div className="modelY_range_number">AWD</div>
            <div className="modelY_range_text">Dual Motor</div>
          </div>
        </div>
        <div className="modelY_btn">Order Now</div>
      </div>
    </div>
  );
};

export default ModelYBanner;
