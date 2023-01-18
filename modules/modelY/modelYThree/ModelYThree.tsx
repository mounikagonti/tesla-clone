import Image from "next/legacy/image";
import React from "react";

const ModelYThree = () => {
  return (
    <div className="modelY_three_wrapper">
      <div className="modelY_three_img_container">
        <Image
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c960989c-3359-4caf-8cc7-afb07c372d6f/bvlatuR/std/4096x2560/Autopilot-Hero-Vision-Desktop.svg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="modelY_three_text_container">
        <div className="modelY_three_range_container">
          <div className="eleven_number_range">360°</div>
          <div className="eleven_text_range">
            Rear, side and forward-facing cameras provide maximum visibility
          </div>
        </div>
        <div className="modelY_three_range_container">
          <div className="eleven_number_range">250 m</div>
          <div className="eleven_text_range">
            Powerful visual processing at up to 250 meters of range
          </div>
        </div>
        <div className="modelY_three_range_container">
          <div className="eleven_number_range">Ultrasonic Sensor</div>
          <div className="eleven_text_range">
            Tesla Vision detects nearby cars, helps prevent potential collisions
            and assists with parking
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelYThree;
