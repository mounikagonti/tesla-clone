import Image from "next/legacy/image";
import React from "react";

const PowerTrain = () => {
  return (
    <div className="power_train_wrapper">
      <div className="power_train_text_wrapper">
        <div className="power_train_heading">Electric Powertrain</div>
        <div className="power_train_text">
          Model S platforms unite powertrain and battery technologies for
          unrivaled performance, range and efficiency. New module and pack
          thermal architecture allows faster charging and gives you more power
          and endurance in all conditions.
        </div>
      </div>
      <div className="power_train_img_container">
        <Image
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/0f44fadf-7d40-43b6-b94d-de289b38840c/bvlatuR/std/1920x900/model-s-performance-dual-motor-desktop_carousel-new.svg"
          layout="fill"
          objectFit="contain"
          style={{ borderRadius: "5px", overflow: "hidden" }}
        />
      </div>
      <div className="power_train_range_wrapper">
        <div className="power_train_range-left">
          <div className="line"></div>
          <div className="power_train_model_text">Model S</div>
          <div className="power_train_model_normal_text">
            Dual Motor All-Wheel Drive unlocks more range than any other vehicle
            in our current lineup, with insane power and maximum control.
          </div>
          <div className="power_train_range_wrapper">
            <div className="power_train_speed">
              <div className="power_train_range_number">3.1 s</div>
              <div className="power_train_range_text">0-60 mph</div>
            </div>
            <div className="power_train_speed">
              <div className="power_train_range_number">405 mi</div>
              <div className="power_train_range_text">Range (EPA est.)</div>
            </div>
            <div className="power_train_speed">
              <div className="power_train_range_number">670 hp</div>
              <div className="power_train_range_text">Peak Power</div>
            </div>
          </div>
        </div>
        <div className="power_train_range-right">
          <div className="line"></div>
          <div className="power_train_model_text">Model S Plaid</div>
          <div className="power_train_model_normal_text">
            Dual Motor All-Wheel Drive unlocks more range than any other vehicle
            in our current lineup, with insane power and maximum control.
          </div>
          <div className="power_train_range_wrapper">
            <div className="power_train_speed">
              <div className="power_train_range_number">3.1 s</div>
              <div className="power_train_range_text">0-60 mph</div>
            </div>
            <div className="power_train_speed">
              <div className="power_train_range_number">405 mi</div>
              <div className="power_train_range_text">Range (EPA est.)</div>
            </div>
            <div className="power_train_speed">
              <div className="power_train_range_number">670 hp</div>
              <div className="power_train_range_text">Peak Power</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerTrain;
