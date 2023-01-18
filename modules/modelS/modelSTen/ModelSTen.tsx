import Image from "next/legacy/image";
import React from "react";

const ModelSTen = ({ imgTwo, name, heading }: any) => {
  return (
    <div className="modelS_ten_wrapper">
      <div className="modelS_ten_left">
        <div className="modelS_ten_text">{name}</div>
        <div className="modelS_ten_heading">
          <div className="modelS_ten_heading_left">{heading}</div>
          <div className="modelS_ten_heading_right">
            Model S is built from the ground up as an electric vehicle, with a
            high-strength architecture and floor-mounted battery pack for
            incredible occupant protection and low rollover risk. Every new
            Model S includes Tesla’s latest active safety features, such as
            Automatic Emergency Braking, at no extra cost.
          </div>
        </div>
        <div className="modelS_ten_btn_wrapper">
          <button className="buy_now_btn">Order Now</button>
          <button className="order_btn">View Inventory</button>
        </div>
      </div>
      <div className="modelS_ten_right">
        <div className="high_impact_img_container">
          <Image src={imgTwo} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default ModelSTen;
