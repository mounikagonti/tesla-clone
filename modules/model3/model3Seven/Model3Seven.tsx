import React from "react";
import Model3Three from "../model3Three/Model3Three";

const Model3Seven = () => {
  return (
    <div className="model3_seven_wrapper">
      <div className="model3_speed_wrapper">
        <div className="model3_speed">
          <div className="model3_range_number">3.1 s</div>
          <div className="model3_range_text">0-60 mph*</div>
        </div>
        <div className="model3_speed">
          <div className="model3_range_number">162 mph</div>
          <div className="model3_range_text">Range (EPA est.)</div>
        </div>
        <div className="model3_speed">
          <div className="model3_range_number">AWD</div>
          <div className="model3_range_text">Dual Motor</div>
        </div>
      </div>
    </div>
  );
};

export default Model3Seven;