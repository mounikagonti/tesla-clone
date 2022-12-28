import React from "react";

const ModelSBanner = () => {
  return (
    <div className="modelS_banner_wrapper">
      <div className="modelS_top">
        <div className="modelS_text">Model S</div>
        <p className="modelS_small_text">Paid</p>
      </div>
      <div className="modelS_banner_bottom">
        <div className="modelS_speed_wrapper">
          <div className="modelS_speed">
            <div className="modelS_range_number">396 mi</div>
            <div className="modelS_range_text">Range (EPA est.)</div>
          </div>
          <div className="modelS_speed">
            <div className="modelS_range_number">1.99 s</div>
            <div className="modelS_range_text">0-60 mph*</div>
          </div>
          <div className="modelS_speed">
            <div className="modelS_range_number">200 mph</div>
            <div className="modelS_range_text">Top Speed+</div>
          </div>
          <div className="modelS_speed">
            <div className="modelS_range_number">1,020 hp</div>
            <div className="modelS_range_text">Peak Power</div>
          </div>
        </div>
        <div className="modelS_btn">Buy Now</div>
      </div>
    </div>
  );
};

export default ModelSBanner;
