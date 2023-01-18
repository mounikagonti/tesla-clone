import React from "react";

const Model3Five = ({ Content, text, heading, btnOne, btnTwo }: any) => {
  return (
    <div className="model3_five_wrapper">
      <div className="model3_five_left">
        <div className="model3_five_text">{text}</div>
        <div className="model3_five_heading">
          <div className="model3_heading_left">{heading}</div>
          <div className="model3_heading_right">
            <Content />
          </div>
        </div>
        <div className="model3_five_btn_wrapper">
          <button className={btnOne ? "buy_now_btn_one" : "buy_now_btn"}>
            Order Now
          </button>
          <button className={btnTwo ? "order_btn_one" : "order_btn"}>
            View Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model3Five;
