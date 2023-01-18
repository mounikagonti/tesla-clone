import Image from "next/legacy/image";
import React from "react";

const Model3Six = () => {
  return (
    <div className="model3_six_wrapper">
      <div className="model3_six_left">
        <div className="model3_six_img">
          <Image
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b314365b-e41d-4682-b890-608bdbdfa49e/bvlatuR/std/2560x2204/Model-3-Range-Hero-Desktop-LHD.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="model3_six_content">
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
      </div>
      <div className="model3_six_right">
        <div className="model3_six_small_text">Range</div>
        <div className="model3_six_heading">Go Anywhere</div>
        <div className="model3_six_normal_text">
          Model 3 is fully electric, so you never need to visit a gas station
          again. If you charge overnight at home, you can wake up to a full
          battery every morning. And when you’re on the road, it’s easy to plug
          in along the way—at any public station or with the Tesla charging
          network. We currently have over 40,000 Superchargers worldwide, with
          six new locations opening every week. Chat with a Tesla Advisor to
          learn more about Model 3 or schedule a demo drive today.
        </div>
        <div className="model3_six_right_img">
          <Image
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/31a606f1-7ae2-456e-8588-f5a779759336/bvlatuR/std/0x0/model-3-range-map.svg"
            layout="fill"
            objectFit="contain"
            // width={1000}
            // height={700}
          />
        </div>
        <div className="model3_six_bottom_right">
          <div className="plus_btn">+</div>
          <div className="learn_more_btn">Learn More</div>
          <div className="order_now_btn">Order Now</div>
        </div>
      </div>
    </div>
  );
};

export default Model3Six;
