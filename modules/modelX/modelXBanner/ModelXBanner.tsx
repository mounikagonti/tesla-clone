import React from "react";

const ModelXBanner = () => {
  return (
    <div className="modelX_banner_wrapper">
      <div className="modelX_top">
        <div className="modelX_text">Model X</div>
        <a href="#" className="modelX_small_text">
          Plaid
        </a>
      </div>
      <div className="modelX_banner_bottom">
        <div className="modelX_speed_wrapper">
          <div className="modelX_speed">
            <div className="modelX_range_number">3.1 s</div>
            <div className="modelX_range_text">0-60 mph*</div>
          </div>
          <div className="modelX_speed">
            <div className="modelX_range_number">358 mi</div>
            <div className="modelX_range_text">Range (EPA est.)</div>
          </div>
          <div className="modelX_speed">
            <div className="modelX_range_number">AWD</div>
            <div className="modelX_range_text">Dual Motor</div>
          </div>
        </div>
        <div className="modelX_btn">Order Now</div>
      </div>
    </div>
  );
};

export default ModelXBanner;
