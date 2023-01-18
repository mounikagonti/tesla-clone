import Image from "next/legacy/image";
import React from "react";
import Footer from "../../footer/Footer";

const ModelSFourteen = ({ textModel, img }: any) => {
  return (
    <div className="modelS_fourteen_Wrapper">
      <div className="modelS_fourteen_container">
        <div className="modelS_fourteen_left">
          <div className="modelS_fourteen_left_heading">{textModel}</div>
          <div className="modelS_fourteen_left_btn_wrapper">
            <div className="modelS_fourteen_left_btnOne">Order Now</div>
            <div className="modelS_fourteen_left_btnTwo">View Inventory</div>
          </div>
        </div>
        <div className="modelS_fourteen_right">
          <Image src={img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="modelS_fourteen_normal_text">
        Certain high data usage vehicle features require at least Standard
        Connectivity, including maps, navigation and voice commands. Access to
        features that use cellular data and third-party licenses are subject to
        change.
        <a href="#">
          Learn more about Standard Connectivity and any limitations.
        </a>
      </div>
      {/* <div className="modelS_fourteen_footer">
        <Footer color={false} />
      </div> */}
    </div>
  );
};

export default ModelSFourteen;
