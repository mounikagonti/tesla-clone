import React from "react";
import Accessor from "../accessor/Accessor";
import Banner from "../banner/Banner";

const BgScroll = () => {
  return (
    <div className="scroll_wrapper">
      <div className="One">
        <Banner
          model="Model 3"
          test="Schedule a Test Drive"
          btnOne="Customer Order"
          btnTwo="Existing Inventory"
        />
      </div>
      <div className="One">
        <Banner
          model="Model Y"
          test="Schedule a Test Drive"
          btnOne="Customer Order"
          btnTwo="Existing Inventory"
        />
      </div>
      <div className="One">
        <Banner
          model="Model S"
          test="Schedule a Test Drive"
          btnOne="Customer Order"
          btnTwo="Existing Inventory"
        />
      </div>
      <div className="One">
        <Banner
          model="Model X"
          test="Schedule a Test Drive"
          btnOne="Customer Order"
          btnTwo="Existing Inventory"
        />
      </div>
      <div className="One">
        <Banner
          model="Solar Panels"
          test="Lowest Cost Solar Panels in America"
          btnOne="Order Now"
          btnTwo="Learn More"
        />
      </div>
      <div className="One">
        <Banner
          model="Solar Roof"
          test="Produce Clean Energy From Your Roof"
          btnOne="Order Now"
          btnTwo="Learn More"
        />
      </div>
      <div className="One">
        <Accessor />
      </div>
    </div>
  );
};

export default BgScroll;
