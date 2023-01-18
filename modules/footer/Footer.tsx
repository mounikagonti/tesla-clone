import React from "react";

const Footer = ({ bgColor, isHomePage }: any) => {
  return (
    <div
      className={
        isHomePage
          ? "footer_wrapper footer_wrapper_three"
          : bgColor
          ? "footer_wrapper footer_wrapper_two"
          : "footer_wrapper"
      }
    >
      <div className="footer_text">Tesla &copy; 2022</div>
      <div className="footer_text">Privacy & Legal</div>
      <div className="footer_text">Vehicle Recalls</div>
      <div className="footer_text">Contact</div>
      <div className="footer_text">Careers</div>
      <div className="footer_text">News</div>
      <div className="footer_text">Engage</div>
      <div className="footer_text">Locations</div>
    </div>
  );
};

export default Footer;
