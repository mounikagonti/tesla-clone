import Image from "next/legacy/image";
import React from "react";
import ModelSFive from "../modelSFive/ModelSFive";

const ModelSEleven = () => {
  const handleHtmlText = () => {
    return (
      <div>
        Autopilot enables your car to steer, accelerate and brake automatically
        within its lane under your active supervision, assisting with the most
        burdensome parts of driving. With over-the-air software updates, the
        latest enhancements are available instantly.
        <a href="#">Chat with a Tesla Advisor</a>to learn more about Model S or
        <a href="#">schedule a demo drive </a>today.
      </div>
    );
  };
  return (
    <div className="modelS_eleven_wrapper">
      <div className="modelS_eleven_img_container">
        <Image
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c960989c-3359-4caf-8cc7-afb07c372d6f/bvlatuR/std/4096x2560/Autopilot-Hero-Vision-Desktop.svg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="modelS_eleven_text_container">
        <div className="modelS_eleven_range_container">
          <div className="eleven_number_range">360°</div>
          <div className="eleven_text_range">
            Rear, side and forward-facing cameras provide maximum visibility
          </div>
        </div>
        <div className="modelS_eleven_range_container">
          <div className="eleven_number_range">250 m</div>
          <div className="eleven_text_range">
            Powerful visual processing at up to 250 meters of range
          </div>
        </div>
        <div className="modelS_eleven_range_container">
          <div className="eleven_number_range">Ultrasonic Sensor</div>
          <div className="eleven_text_range">
            Tesla Vision detects nearby cars, helps prevent potential collisions
            and assists with parking
          </div>
        </div>
      </div>
      <div className="modelS_seven_bottom_wrapper">
        <ModelSFive
          Content={handleHtmlText}
          text="Autopilot"
          heading="Future of Driving"
          // btnOne={false}
          // btnTwo={false}
        />
      </div>
    </div>
  );
};

export default ModelSEleven;
