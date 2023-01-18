import Image from "next/legacy/image";
import React from "react";

const Model3One = ({headingText}:any) => {
  return (
    <div className="model3_one_wrapper">
      <div className="model3_one_left">
        <Image
          src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0196%2F5170%2Ffiles%2FTesla-Model-3_5fc0ba64-40f2-4f8d-be30-ecdfbbca4224.jpg%3Fv%3D1640798908&w=1920&q=75"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="model3_one_right">
        <div className="model3_one_top_right">
          <div className="model3_one_small_text">Safety</div>
          <div className="model3_one_heading">{headingText}</div>
          <div className="model3_one_normal_text">
            Safety is the most important part of every Tesla. We design our
            vehicles to exceed safety standards.
          </div>
          <div className="model3_one_text_one">
            <div className="text_one_heading">5-Star Rating</div>
            <div className="text_one_normal">
              Model 3 achieved NHTSA 5-star safety ratings in every category and
              subcategory.
            </div>
          </div>
          <div className="model3_one_text_one">
            <div className="text_one_heading">Top Safety Pick+</div>
            <div className="text_one_normal">
              Model 3 received the IIHS Top Safety Pick+ award, with top ratings
              in all crashworthiness and front crash prevention categories.
            </div>
          </div>
        </div>
        <div className="model3_one_bottom_right">
          <div className="plus_btn">+</div>
          <div className="learn_more_btn">Learn More</div>
          <div className="order_now_btn">Order Now</div>
        </div>
      </div>
    </div>
  );
};

export default Model3One;
