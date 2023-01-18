import Image from "next/legacy/image";
import React from "react";

const ModelSThirteenth = ({ modelText, imgThree }: any) => {
  return (
    <div className="modelS_thirteenth_wrapper">
      <div className="modelS_thirteenth_top">
        <div className="modelS_thirteenth_left">
          <Image src={imgThree} layout="fill" objectFit="contain" />
        </div>
        <div className="modelS_thirteenth_right">
          <div className="thirteen_right_heading">{modelText} Specs</div>
          <div className="thirteen_left_right_wrapper">
            <div className="thirteen_right_left_side">
              <button className="thirteen_left_btn">Model S Plaid</button>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">Range (EPA est.)</div>
                <div className="thirteen_range_number">396 mi</div>
              </div>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">1/4 Mile</div>
                <div className="thirteen_range_number">
                  9.23@155 mph trap speed
                </div>
              </div>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">Peak Power</div>
                <div className="thirteen_range_number">1,020 hp</div>
              </div>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">Wheels</div>
                <div className="thirteen_range_number">19" or 21"</div>
              </div>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">Cargo</div>
                <div className="thirteen_range_number">28 cu ft</div>
              </div>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">Weight</div>
                <div className="thirteen_range_number">4,766 lbs</div>
              </div>
            </div>
            <div className="thirteen_right_right_side">
              <button className="thirteen_left_btn">Model S</button>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">*Acceleration</div>
                <div className="thirteen_range_number">1.99 s 0-60 mph</div>
                <div className="thirteen_range_normal_text">
                  with rollout subtracted
                </div>
              </div>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">†Top Speed</div>
                <div className="thirteen_range_number">200 mph</div>
                <div className="thirteen_range_normal_text">
                  when equipped with paid hardware upgrades
                </div>
              </div>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">Drag Coefficient</div>
                <div className="thirteen_range_number">0.208 Cd</div>
              </div>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">Powertrain</div>
                <div className="thirteen_range_number">Tri Motor</div>
              </div>
              <div className="range_wrapper">
                <div className="thirteen_line"></div>
                <div className="thirteen_range_text">Supercharging Max</div>
                <div className="thirteen_range_number">250 kW</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modelS_thirteenth_bottom">Compare</div>
    </div>
  );
};

export default ModelSThirteenth;
