import Image from "next/legacy/image";
import React from "react";

const Features = ({
  featureOneImg,
  featureTwoImg,
  featureThreeImg,
  featureOneText,
  featureTwoText,
  featureThreeText,
  featureOneHeadText,
  featureTwoHeadText,
  featureThreeHeadText,
}: any) => {
  return (
    <div className="feature_wrapper">
      <div className="feature_one">
        <div className="feature_img_one">
          <Image src={featureOneImg} layout="fill" objectFit="contain" />
        </div>
        <div className="feature_text">
          <div className="feature_head_text">{featureOneText}</div>
          <div className="feature_normal_text">{featureOneHeadText}</div>
        </div>
      </div>
      <div className="feature_two">
        <div className="feature_text">
          <div className="feature_head_text">{featureTwoText}</div>
          <div className="feature_normal_text">{featureTwoHeadText}</div>
        </div>
        <div className="feature_img_two">
          <Image src={featureTwoImg} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="feature_three">
        <div className="feature_img_three">
          <Image src={featureThreeImg} layout="fill" objectFit="contain" />
        </div>
        <div className="feature_text">
          <div className="feature_head_text">{featureThreeText}</div>
          <div className="feature_normal_text">{featureThreeHeadText}</div>
        </div>
      </div>
    </div>
  );
};

export default Features;
