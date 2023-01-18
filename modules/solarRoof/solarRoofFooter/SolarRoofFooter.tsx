import React from "react";
import Footer from "../../footer/Footer";

const SolarRoofFooter = ({ mainText, normalText, linkText }: any) => {
  return (
    <div className="solarRoof_footer">
      <div className="header_text">{mainText}</div>
      <div className="normal_text">{normalText}</div>
      <button className="order_now_btn">Order Now</button>
      <button className="energy_button">Chat With Energy Advisor</button>
      <a href="#" className="update">
        {linkText}
      </a>
      {/* <div className="solarRoof_footer_bottom">
        <Footer color={true} />
      </div> */}
    </div>
  );
};

export default SolarRoofFooter;
